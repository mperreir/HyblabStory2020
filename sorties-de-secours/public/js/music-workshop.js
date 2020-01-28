$(document).ready(function() {

    let stage = new Konva.Stage({
        container: 'music-workshop-konva',
        width: window.innerWidth,
        height: window.innerHeight
    });

    let layer = new Konva.Layer();
    stage.add(layer);

    let group = new Konva.Group({
        draggable: true,
        dragBoundFunc: function(pos) {
            // disable drag
            return {
                x: 0,
                y: 0
            };
        }
    });

    var k_vinyl_head = new Konva.Image({
        x: 945,
        y: 318,
        width: 71,
        height: 671
    });

    let image_vinyl = new Image();
    image_vinyl.onload = () => {
        let k_vinyl = new Konva.Image({
            x: 0,
            y: 0,
            image: image_vinyl
        });

        // vinyl-head
        let vinyl_head = new Image();
        vinyl_head.onload = () => {
            k_vinyl_head.image(vinyl_head);
            k_vinyl_head.offset({ x: 35, y: 138 });

            group.add(k_vinyl_head);
            layer.add(group);

            // layer.add(k_vinyl_head);
            layer.batchDraw();
        };
        vinyl_head.src = 'img/vinyl-head.png';

        layer.add(k_vinyl);
        layer.batchDraw();

    };
    image_vinyl.src = 'img/vinyl.jpg';

    // EVENTS
    var mouseDown = false;

    group.on('dragmove', function() {
        mouseDown = true;
        let pos = stage.getPointerPosition();

        let angleDeg = Math.atan2(318 - pos.y, 945 - pos.x) * 180 / Math.PI + 90;

        if (angleDeg < 0) {
            angleDeg = 0;
        } else if (angleDeg > 50) {
            angleDeg = 50;
        }

        k_vinyl_head.rotation(angleDeg);
        layer.batchDraw();
    });

});
