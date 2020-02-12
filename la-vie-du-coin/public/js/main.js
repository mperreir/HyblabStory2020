var player;
var story_save;

/* POUR LA PARTIE ORDI */
var all_choice_done = false;
var commu;
var question;







  $('.btn_story').on('click', function(){
    player = new Player(Number.parseInt(this.id));
    
   

    player.loadImage(new PlayerImage("idee.gif", "img_perso_presentation"));
    player.loadImage(new PlayerImage("bulle_projet.svg", "bulle_projet"));
    player.loadImage(new PlayerImage("marche.gif", "walking_perso"));
    player.loadImage(new PlayerImage("bureau_ordi.svg", "bureau_ordi"));
    player.loadBackground(new PlayerImage("décor_défile_arriere-plan1.svg", "sliding_background_1"));
    player.loadBackground(new PlayerImage("décor_défile_arriere-plan2.svg", "sliding_background_2"));
    player.loadBackground(new PlayerImage("décor_défile_arriere-plan3.svg", "sliding_background_3"));
    player.loadBackground(new PlayerImage("décor_défile_premier-plan.svg", "sliding_foreground"));
    player.loadImage(new PlayerImage("immeubles_plan3_D.svg", "immeubles_plan3_D"));
    player.loadImage(new PlayerImage("immeubles_plan3_G.svg", "immeubles_plan3_G"));
    player.loadImage(new PlayerImage("immeubles_plan2_D.svg", "immeubles_plan2_D"));
    player.loadImage(new PlayerImage("immeubles_plan2_G.svg", "immeubles_plan2_G"));
    player.loadImage(new PlayerImage("immeubles_plan1_D.svg", "immeubles_plan1_D"));
    player.loadImage(new PlayerImage("immeubles_plan1_G.svg", "immeubles_plan1_G"));
    player.loadImage(new PlayerImage("bureau.svg", "bureau"));
    player.loadImage(new PlayerImage("perso_bureau.gif", "perso_bureau"));
    player.loadImage(new PlayerImage("animation-principale-1.gif", "animation_final"));
  player.loadImage(new PlayerImage("conclu.svg", "perso_conclu"));

    player.loadSon(new PlayerSon("voix_1.wav", "audio_1"));
    player.loadSon(new PlayerSon("voix_2.wav", "audio_2"));

    player.loadTextes();
    player.build();



  });



  /*HOME */
    anime.timeline()
    .add({
      targets: '.p_acceuil, .h2_acceuil, #scroll-gif ',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i
    });

/* HOME END */


/* ORDI */



$('#btn_valider_ordi').hover(function()
{
  $(this).css('background-color', 'transparent');
  $(this).css('border-color', '#4caf50');
  $(this).css('color', '#4caf50');


},
function()
{
  $(this).css('background-color', '#4caf50');
  $(this).css('border-color', '#fff');
  $(this).css('color', '#fff');
});

$('#btn_valider_ordi').on('click', function()
{
  $('.bureau_h2_commu').css('opacity', '0');
  $('.option_name_commu').css('opacity', '0');

  
  var that = this;
  setTimeout(function(){
    $('.option_question_commu').toggleClass('hide');
    $('.bureau_h2_question').css('opacity', '1');
    $('.option_question_commu').css('opacity', '1');
    $(that).css('background-color', '#4caf50');
    $(that).css('border-color', '#fff');
    $(that).css('color', '#fff');
  },700);


});
  

$('.option_name_commu').on('click', function()
{
  $('.selected_name_commu').css('color', "#000");
  $('.selected_name_commu').css('font-size', '30px');
  $('.selected_name_commu').toggleClass('selected_name_commu');
  $('#btn_valider_ordi').css('opacity', '1');


  $(this).css('color', '#23DC82');
  $(this).css('font-size', '33px');
  $(this).toggleClass('selected_name_commu');
  commu = $(this).html();
});

$('.option_question_commu').on('click', function()
{
  $('.selected_question_commu').css('color', '#000');
  $('.selected_question_commu').css('font-size', '30px');
  $('.selected_question_commu').toggleClass('selected_question_commu');

  $(this).css('color', '#23DC82');
  $(this).css('font-size', '31px');
  $(this).toggleClass('selected_question_commu');
  question = $(this).html();

});

/* FIN ORDI */


$('.section_histoire').hover(function(){
  $(this).css('width','70vw');
 
  $(this).find('.story_choice_div_img_perso').toggleClass('hide');
  anime.timeline()
    .add({
      targets: '.story_choice_div_img_perso',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2000,
    });

    
  var that = this;
  setTimeout(function()
  {
   $(that).find(".header_story_choice_text").toggleClass('hide');
  
  },500);

    
  $(this).find('.div_img_story_choice1').toggleClass('hide');
  $(this).find('.div_img_story_choice2').toggleClass('hide');
  $(this).find('.div_img_story_choice3').toggleClass('hide');
  $(this).find('.div_img_story_choice4').toggleClass('hide');



  $(this).find(".div_btn_story").css('top', '70vh');
  $(this).find(".div_btn_story").css('left', '63%');
  story_save = $(this).find(".btn_story")[0].innerText;
  $(this).find(".btn_story")[0].innerText = "Poursuivre !";
 },
 
 function(){
   $(this).css('width','33.3333vw');
   $(this).find(".div_btn_story").css('top', '50vh');
   $(this).find(".div_btn_story").css('left', '50%');
   $(this).find(".btn_story")[0].innerText = story_save;
   $(this).find('.story_choice_div_img_perso').toggleClass('hide');
   $(this).find(".header_story_choice_text").toggleClass('hide');
   $(this).find('.div_img_story_choice1').toggleClass('hide');
   $(this).find('.div_img_story_choice2').toggleClass('hide');
   $(this).find('.div_img_story_choice3').toggleClass('hide');
   $(this).find('.div_img_story_choice4').toggleClass('hide');

 
 });
 
 /* END SELECT STORY */


/* GRAPHIQUE */
new Chartist.Line('.ct-chart', {
  series: [[
    {x: 1, y: 0},
    {x: 2, y: 6.25},
    {x: 3, y: 12.5},
    {x: 5, y: 25},
    {x: 8, y: 50},
    {x: 10, y: 135},
    {x: 13, y: 189}
  ]]
}, {
  axisX: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true
  }
  
});

/* FIN GRAPHIQUE */













