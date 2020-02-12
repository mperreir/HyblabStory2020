
var chart_height = $('#chart').height() + 40;
$('.hide_chart').css('height',chart_height+"px");

setTimeout(function(){
    var left;
    var top;
    for (var i = 1; i< $($('.ct-series')[0]['children']).length ;i++) {
        left = $($($('.ct-series')[0]['children'])[i]).attr('x1') - 10;
        top = $($($('.ct-series')[0]['children'])[i]).attr('y1') - 10;   
        $('.x_'+i).css('left', left + 'px');
        $('.x_'+i).css('top', top + 'px');             
    }     

    for (var i = 0; i < $($('.ct-labels')[0]['children']).length; i++) {
        $($($('.ct-labels')[0]['children'])[i]).addClass('hide');
    }
    
},100);


