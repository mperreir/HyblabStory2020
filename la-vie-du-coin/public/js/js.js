$('.sound_on').on('click',function(){
    $('.sound_on').addClass('hide');
    $('.sound_off').removeClass('hide');
});

$('.sound_off').on('click',function(){
    $('.sound_off').addClass('hide');
    $('.sound_on').removeClass('hide');
});