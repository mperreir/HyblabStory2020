$(document).ready(function () {

    $("#sec-story").hide();
    $("#start-story").hide();

    mapboxgl.accessToken = config.accessToken;

    let map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
        center: config.chapters[0].location.center,
        zoom: config.chapters[0].location.zoom,
        bearing: config.chapters[0].location.bearing,
        pitch: config.chapters[0].location.pitch,
        scrollZoom: false,
    });

    let size = 200;
    var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        // get rendering context for the map canvas when layer is added to the map
        onAdd: function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },

        // called once before every frame where the icon will be used
        render: function () {
            var duration = 1000;
            var t = (performance.now() % duration) / duration;

            var radius = (size / 2) * 0.3;
            var outerRadius = (size / 2) * 0.7 * t + radius;
            var context = this.context;

            // draw outer circle
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                outerRadius,
                0,
                Math.PI * 2
            );
            context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
            context.fill();

            // draw inner circle
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                radius,
                0,
                Math.PI * 2
            );
            context.fillStyle = 'rgba(255, 100, 100, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();

            // update this image's data with data from the canvas
            this.data = context.getImageData(
                0,
                0,
                this.width,
                this.height
            ).data;

            // continuously repaint the map, resulting in the smooth animation of the dot
            map.triggerRepaint();

            // return `true` to let the map know that the image was updated
            return true;
        }
    };

    let origin = [2.34662, 48.85884];
    let destination = [76.63995, 33.91296];

    let route = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [origin, destination]
                }
            }
        ]
    };
    let track = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [origin, origin]
                }
            }
        ]
    };
    let point = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': origin
                }
            }
        ]
    };

    // Calculate the distance in kilometers between route start/end point.
    let lineDistance = turf.lineDistance(route.features[0], 'kilometers');
    let arc = [];

    // Number of steps to use in the arc and animation, more steps means
    // a smoother arc and animation, but too many steps will result in a
    // low frame rate
    let steps = 500;

    // Draw an arc between the `origin` & `destination` of the two points
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
        let segment = turf.along(route.features[0], i, 'kilometers');
        arc.push(segment.geometry.coordinates);
    }

    // Update the route with calculated arc coordinates
    let coordinates = arc;
    route.features[0].geometry.coordinates = arc;
    track.features[0].geometry.coordinates = [coordinates[0], coordinates[1]];

    // Used to increment the value of the point measurement against the route.
    let counter = 0;

    map.on("load", function () {

        // Add a source and layer displaying a point which will be animated in a circle.
        map.addSource('route', {
            'type': 'geojson',
            'data': route
        });

        map.addSource('point', {
            'type': 'geojson',
            'data': point
        });

        map.addSource('track', {
            'type': 'geojson',
            'data': track
        });

        map.addLayer({
            'id': 'track',
            'source': 'track',
            'type': 'line',
            'paint': {
                'line-width': 5,
                'line-color': '#007cbf'
            }
        });

        /*map.addLayer({
            'id': 'route',
            'source': 'route',
            'type': 'line',
            'paint': {
                'line-width': 2,
                'line-color': 'black'
            }
        });*/

        map.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2});

        map.addLayer({
            'id': 'start',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': origin
                            }
                        }
                    ]
                }
            },
            'layout': {
                'icon-image': 'pulsing-dot'
            }
        });

        map.addLayer({
            'id': 'end',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': destination
                            }
                        }
                    ]
                }
            },
            'layout': {
                'icon-image': 'pulsing-dot'
            }
        });

        map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
                'icon-image': 'airport-15',
                'icon-rotate': ['get', 'bearing'],
                'icon-rotation-alignment': 'map',
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                'icon-size': 1.5
            }
        });

        let cpt = 1;
        let end = false;
        let rotate = false;

        $(window).on("wheel", function (e) {

            if(!end) {

                if (e.isTrigger !== undefined || e.originalEvent.deltaY > 0) {
                    cpt = 1;
                } else {
                    cpt = 0;
                }

                // Update point geometry to a new position based on counter denoting
                // the index to access the arc.
                point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];
                track.features[0].geometry.coordinates[counter] = route.features[0].geometry.coordinates[counter];

                map.jumpTo({'center': point.features[0].geometry.coordinates});

                // Calculate the bearing to ensure the icon is rotated to match the route arc
                // The bearing is calculate between the current point and the next point, except
                // at the end of the arc use the previous point and the current point
                point.features[0].properties.bearing = turf.bearing(
                    turf.point(
                        route.features[0].geometry.coordinates[
                            counter >= steps ? counter - 1 : counter
                            ]
                    ),
                    turf.point(
                        route.features[0].geometry.coordinates[
                            counter >= steps ? counter : counter + 1
                            ]
                    )
                );

                // Update the source with this new data.
                map.getSource('point').setData(point);
                map.getSource('track').setData(track);

                counter = counter + cpt;

            } else {
                $("#test1").hide();
                $("#start-story").show();
            }

            if(point.features[0].geometry.coordinates[0].toFixed(2) === destination[0].toFixed(2)
                && point.features[0].geometry.coordinates[1].toFixed(2) === destination[1].toFixed(2)) {
                end = true;
            }
        });
    });

    $("#start-story").on("click", function () {
        $("#s1-map").hide();
        $("#sec-story").show();
    });

});