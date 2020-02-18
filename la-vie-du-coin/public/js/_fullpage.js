var is_ok = true;
var count = 0;
var olddelta = 0;
var Display_chart_Interval;
var end = false;
var myInterval;
var commu;
var question;
var deltaa;

;(function(global,$){
	'use strict';
	var Fullpage = (function(){
		function Fullpage (el,options) {
			this.$el = el;
			this.currIndex = 0;
			this.animating = false;
			this.init();
		}
/*
		var utils = {
			throttle:function(callback,delayTime,maxTime){
				var timer = null;
				var prevTime = 0;

				return function(){
					var context = this;
					var argument = arguments;
					var currTime = Date.now();
					if(maxTime && currTime - prevTime >= maxTime){
						prevTime = currTime;
						callback.apply(context,argument);
					}else{
						if(timer) clearTimeout(timer);
						timer = setTimeout(function(){
							callback.apply(context,argument);
						},delayTime);
					}
				}
			}
		};
*/
		Fullpage.prototype = {
			constructor:Fullpage,
			init:function(){
				this.initHTML();
				this.bindEvent();
				
				var that = this;
				
				Display_chart();
				
			},
			initHTML:function(){
				this.$el.children().css({
					// 'height':'100vh',
					'transition':'transform 0.7s',
					'-webkit-transition':'transform 0.7s'
				});
			},
			
			bindEvent:function(){
				
				var that = this;
				var targetIndex,x0,y0,xDiff,yDiff,delta;
				
				var end_Scrool;
				var no_scroll = true;	
				var count_scroll = 9;
			
				var can_scroll = true;
				var firststep = true;
				var can_scroll_paralax = false;
				var defil_building = 0;
				var defil_building_left;
				var defil_building_right;
				var compteur_commu_global = 0;
				var interval_commu_global;
				var avancement_noScrool = 1;
				var inter_end;
				var first = true;
				
			

				$(document).bind('wheel DOMMouseScroll MozMousePixelScroll', function(event) {
					var ed = arguments[0].originalEvent;
					deltaa = ed.deltaY;

					
					if (is_ok){
						var e = arguments[0].originalEvent;
						delta = e.wheelDelta?e.wheelDelta:-e.detail;
						
						init_scroll();
							
						if ((that.currIndex == 3 || that.currIndex == 9) && firststep) {
							firststep = false;
							can_scroll = false;
							setTimeout(function(){
								can_scroll = true;
							},2000);
						}

					
						if(can_scroll)
						{
							
							
							targetIndex = that.currIndex + (delta>0?-1:1);						
							console.log(that.currIndex);
							if (that.currIndex != 1 && that.currIndex != 3 && that.currIndex !=4)
							{

							
								that.gotoTarget(targetIndex);
							}
							if (that.currIndex == 4 || that.currIndex == 3) {
								can_scroll_paralax = false;
								setTimeout(function(){
									can_scroll_paralax = true;
								},1000);
							}
							
							
							firststep = true;
						}
						                        													
						is_ok=false;
					}


					var ponderation = 0.1;
					

					if(that.currIndex == 3 && can_scroll_paralax)
					{
						$('#perso_bureau').css('transform', 'translateX(-4000px)');
 
						setTimeout(function(){
							$('#blanche').css('opacity', '1');
						},900);
						
						setTimeout(function(){
							$('#blanche').css('opacity', '0');
							$('#bureau_ordi').css('opacity', '1');
							$('#bureau_ordi').css('z-index', '0');
							$('#bureau').css('display', 'none');
							
							setTimeout(function(){
								$('#blanche').css('display', 'none');
								$('.bureau_h2_commu').css('opacity', '1');
								$('#bureau_commu_name1').css('opacity', '1');
								$('#bureau_commu_name2').css('opacity', '1');
								$('#bureau_commu_name3').css('opacity', '1');
								$('#logo_ordi').css('opacity', '1');
								}, 500);
							
						},2000);
						can_scroll_paralax = false;
					}
					
					

					if (that.currIndex == 4) {

						no_scroll = false;
						var background_3 = $('#sliding_background_3').position().left;								
						var pos_background_3 = (background_3-deltaa*ponderation/3.5);
						if (pos_background_3 < -1500) {
							$('#sliding_question_reponse').removeClass('hide');
							//$('#sliding_info_commu').removeClass('hide');
							$('#titre_graphique').addClass('hide');
							$('.x_position').addClass('hide');
							$('#chart').addClass('hide');
							$('.hide_chart').addClass('hide');
							
						}
						else {
							$('#sliding_question_reponse').addClass('hide');
							//$('#sliding_info_commu').addClass('hide');
							$('#titre_graphique').removeClass('hide');
							$('.x_position').removeClass('hide');
							$('#chart').removeClass('hide');
							$('.hide_chart').removeClass('hide');
						}
						if (pos_background_3 < -1500 && pos_background_3 > -1800) {														
							//$('.sliding_nombre_commu_global').html('2');																												
						}
						if (pos_background_3 < -1800 && pos_background_3 > -2300) {
							//$('.sliding_nombre_commu_global').html('15');

							if (deltaa>0) {
								$('#answer_2').css('top','-5%');																				
								setTimeout(function(){
									$('#answer_1').css('top','-15%');
								},500)
							}
							else {
								$('#answer_1').css('top','-5%');																				
								setTimeout(function(){
									$('#answer_2').css('top','5%');
								},500)
							}
						}
						if (pos_background_3 < -2300 && pos_background_3 > -2700) {
							if (deltaa>0) {
								$('#answer_3').css('top','-5%');																				
								setTimeout(function(){
									$('#answer_2').css('top','-15%');
								},500)

							}
							else {
								$('#answer_2').css('top','-5%');																				
								setTimeout(function(){
									$('#answer_3').css('top','5%');
								},500)
							}
							//$('.sliding_nombre_commu_global').html('40');
						}
						if (pos_background_3 < -2700 && pos_background_3 > -3000) {
							//$('.sliding_nombre_commu_global').html('70');
							if (deltaa>0) {
								$('#answer_4').css('top','-5%');																				
								setTimeout(function(){
									$('#answer_3').css('top','-15%');															
								},500)

							}
							else {
								$('#answer_3').css('top','-5%');																				
								setTimeout(function(){
									$('#answer_4').css('top','5%');
								},500)
							}
							/*setTimeout(function(){
								$('#answer_5').css('top','-5%');
								setTimeout(function(){
									$('#answer_4').css('top','-15%');			
								},500);		
							},800);*/
						}
						if (pos_background_3 < 0 && pos_background_3 > -3000 && defil_building == 0) {
							
							end = false;
						
							$('#sliding_background_3').css('transform','translateX('+pos_background_3+'px)');
		
							var background_2 = $('#sliding_background_2').position().left;							
							var pos_background_2 = (background_2-deltaa*ponderation/2.75);
							$('#sliding_background_2').css('transform','translateX('+pos_background_2+'px)');
		
							var background_1 = $('#sliding_background_1').position().left;							
							var pos_background_1 = (background_1-deltaa*ponderation/1.5);
							$('#sliding_background_1').css('transform','translateX('+pos_background_1+'px)');
		
							var background_5 = $('#sliding_foreground').position().left;							
							var pos_background_5 = (background_5-deltaa*ponderation);
							$('#sliding_foreground').css('transform','translateX('+pos_background_5+'px)');
														
							Display_chart(deltaa,0.08);			
							clearTimeout(end_Scrool);
							clearInterval(myInterval);
							
							end_Scrool = setTimeout(function(){						
								no_scroll = true;				
								Display_chart();	
								myInterval = setInterval(() => {
									Auto_walk(avancement_noScrool);
									Display_chart(3,0.8);
								}, 10);																	
							},100);		
						}
						else {
							end = true;					
							
							
							
							
							if (defil_building > $(window).innerWidth()) {
								$('#animation_final').removeClass('hide');
								//defil_building = $(window).innerWidth();
								defil_building = defil_building + (deltaa*0.05);
								$('.hide_batiment').css('transform','translateX(-'+ $(window).innerWidth() +'px)');
								defil_building_left = defil_building_left + (deltaa*0.20);	
								defil_building_right = defil_building_right - (deltaa*0.20);
								if (first){
									first = false;
									setTimeout(function(){
										$('.content_image_end').removeClass('hide');
										inter_end = setInterval(function(){
											$('.content_image_end').addClass('transform_end');
											setTimeout(function(){
												$('.content_image_end').removeClass('transform_end');
											},800);
										},1600);
									},1000);
									
								}
								
								if (defil_building_left > $(window).innerWidth()) {
									$('#immeubles_plan3_D').css('transform','translateX(-'+ defil_building_right +'px)');
									$('#immeubles_plan2_D').css('transform','translateX(-'+ defil_building_right +'px)');
									$('#immeubles_plan1_D').css('transform','translateX(-'+ defil_building_right +'px)');
										
									$('#immeubles_plan3_G').css('transform','translateX(-'+ defil_building_left +'px)');
									$('#immeubles_plan2_G').css('transform','translateX(-'+ defil_building_left +'px)');
									$('#immeubles_plan1_G').css('transform','translateX(-'+ defil_building_left +'px)');
								}														
							}
							else {
								setTimeout(function(){
									clearInterval(inter_end);
									$('.content_image_end').addClass('hide');
								},1000);
								$('#animation_final').addClass('hide');
								defil_building = defil_building + (deltaa*0.05);
								defil_building_left	= defil_building;
								defil_building_right = defil_building;
								if (defil_building <= 0) {
									defil_building = 0;
								}

								$('.hide_batiment').css('transform','translateX(-'+ defil_building +'px)');
								$('.sliding_immeublesR').css('transform','translateX(-'+ defil_building +'px)');
								$('.sliding_immeublesL').css('transform','translateX(-'+ defil_building +'px)');
							}
						}
						
						
																						
					}

	/* DÉBUT RÉPONSES DÉFILANTES */

					// JE TE LAISSE GERER LE DÉCLENCHEMENT POUR REMPLACER LE TIMEOUT
					// J'ai pas fait les reglages parce que j'arrive pas à rester sur la meme page

/*
					if (that.currIndex == 4){
						document.addEventListener('wheel', function () {
							setTimeout(function () {
								$("#answer_1").css('transform', 'translateY(-100px)');
								$("#answer_2").css('transform', 'translateY(-100px)');
								$("#answer_3").css('transform', 'translateY(-100px)');
								$("#answer_4").css('transform', 'translateY(-100px)');
								$("#answer_5").css('transform', 'translateY(-100px)');
							},3000);
						})

					}
					*/
					/* FIN RÉPONSES DÉFILANTES */


			/*
					if (that.currIndex == 4 && can_scroll_paralax){
												
						var vitesse = 0.05;
						var immeubles_plan3_D = $('#immeubles_plan3_D').position().left;
						$('#immeubles_plan3_D').css('left', (immeubles_plan3_D+deltaa*vitesse/2.75) +'px');

						var immeubles_plan3_G = $('#immeubles_plan3_G').position().left;
						$('#immeubles_plan3_G').css('left', (immeubles_plan3_G-deltaa*vitesse/2.75) +'px');

						var immeubles_plan2_D = $('#immeubles_plan2_D').position().left;
						$('#immeubles_plan2_D').css('left', (immeubles_plan2_D+deltaa*vitesse/1.5) +'px');

						var immeubles_plan2_G = $('#immeubles_plan2_G').position().left;
						$('#immeubles_plan2_G').css('left', (immeubles_plan2_G-deltaa*vitesse/1.5) +'px');


						var immeubles_plan1_D = $('#immeubles_plan1_D').position().left;
						$('#immeubles_plan1_D').css('left', (immeubles_plan1_D+deltaa*vitesse) +'px');



						var immeubles_plan1_G = $('#immeubles_plan1_G').position().left;
						$('#immeubles_plan1_G').css('left', (immeubles_plan1_G-deltaa*vitesse) +'px');
					}	
					*/
					
					
                });
			   
				
				$('#animation_final').on('click',function(){
					console.log('tes');
					that.gotoTarget(5);
				});
                $('.btn_story').on('click', function(){
                    that.gotoTarget(2);
				});
				
				$('.option_name_commu').on('click', function()
				{
					commu = $(this).html();
				});

				$('.option_question_commu').on('click', function()
				{				
					question = $(this).html();
				});

				$('#btn_valider_ordi').on('click', function()
				{
					$('#sliding_nom_commu').html(commu);
					$('#sliding_question').html(question);
					if(commu && question) that.gotoTarget(4);
					if (that.currIndex == 4) {
						
						myInterval = setInterval(() => {
							Auto_walk(avancement_noScrool);
							Display_chart(4,0.8);
						}, 10);		
					}
				});


			},
			gotoTarget:function(targetIndex)
			{	
				
				
                this.scrollAnimation(targetIndex);

				var children = this.$el.children();
				var that = this;
				var translateY;
				if(this.animating || targetIndex<0 || targetIndex>this.$el.children().length-1) return;

				translateY= 'translateY(-'+targetIndex*100+'%)';
				this.animating = true;
				$(children[0]).on('transitionend', function callback() {
			        this.removeEventListener('transitionend', callback);
			        that.animating = false;
		        });
		        children.css({
					'transform':translateY,
					'-webkit-transform':translateY
				});	
				this.currIndex = targetIndex;
						
            },
            
            
            
            scrollAnimation:function(index)
            {
                if(index == 2)
                {
					setTimeout(function(){
						var textWrapper = document.querySelector('#p_presentation');
						textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

						var tl = anime.timeline({
							easing: 'easeOutExpo',
							duration: 1000
						  });

						 
						  tl.add({
							targets: '#p_presentation, .letter',
							opacity: [0,1],
							easing: "easeInOutQuad",
							delay: (el, i) => 50 * (i+1)
						});

						tl.add({
							targets: '#audio_1, #audio_texte',
							opacity: [0,1],
							easing: "easeInOutQuad",
							duration: 300,
						});

					}, 50);                 
				}
				
				if(index == 5)
				{
					setTimeout(function()
					{
						var textWrapper = document.querySelector('#p_presentation_end');
						textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

						var tl = anime.timeline({
							easing: 'easeOutExpo',
							duration: 1700
						  });

						 
						  tl.add({
							targets: '#p_presentation_end, .letter',
							opacity: [0,1],
							easing: "easeInOutQuad",
							delay: (el, i) => (i+1)
						});

						tl.add({
							targets: '#audio_2, #audio_texte_conclusion',
							opacity: [0,1],
							easing: "easeInOutQuad",
							duration: 700,
						});
					}, 50);
				}
            }                      
		};
		return Fullpage;
	})();

	$.fn.fullpage = function(options)
	{
		this.each(function(){
			new Fullpage($(this),options);
		});
		return this;
	};

  
})(this,this.jQuery);

function init_scroll(){
				
	setTimeout(function(){
		is_ok = true;
	},1500);
}


function Auto_walk(avancement_noScrool)
{
		var background_3 = $('#sliding_background_3').position().left;
		var background_2 = $('#sliding_background_2').position().left;
		var background_1 = $('#sliding_background_1').position().left;
		var background_5 = $('#sliding_foreground').position().left;
		
		
		$('#sliding_background_3').css('transform','translateX('+(background_3-avancement_noScrool)+'px)');
		$('#sliding_background_2').css('transform','translateX('+(background_2-avancement_noScrool)+'px)');
		$('#sliding_background_1').css('transform','translateX('+(background_1-avancement_noScrool)+'px)');
		$('#sliding_foreground').css('transform','translateX('+(background_5-avancement_noScrool)+'px)');		
}

function Display_chart(_delta, ponderation) 
{


	
	if($('#sliding_background_3').position().left <= -2950) {
		end = true;
	}
	if (end){
		clearInterval(myInterval);
	}
	
	if ($('#sliding_background_3').position().left < -1500) {
		$('#sliding_question_reponse').removeClass('hide');
		//$('#sliding_info_commu').removeClass('hide');
		$('#titre_graphique').addClass('hide');
		$('.x_position').addClass('hide');
		$('#chart').addClass('hide');
		$('.hide_chart').addClass('hide');
		
	}
	else {
		$('#sliding_question_reponse').addClass('hide');
		//$('#sliding_info_commu').addClass('hide');
		$('#titre_graphique').removeClass('hide');
		$('.x_position').removeClass('hide');
		$('#chart').removeClass('hide');
		$('.hide_chart').removeClass('hide');
	}
	if ($('#sliding_background_3').position().left < -1500 && $('#sliding_background_3').position().left > -1800) {														
		//$('.sliding_nombre_commu_global').html('2');		
		$('.sliding_nombre_commu_rep').html('1');
	}
	if ($('#sliding_background_3').position().left < -1800 && $('#sliding_background_3').position().left > -2300) {
		//$('.sliding_nombre_commu_global').html('15');
		$('.sliding_nombre_commu_rep').html('10');

		if (deltaa>0) {
			$('#answer_2').css('top','-5%');																				
			setTimeout(function(){
				$('#answer_1').css('top','-15%');
			},500)
		}
		else {
			$('#answer_1').css('top','-5%');																				
			setTimeout(function(){
				$('#answer_2').css('top','5%');
			},500)
		}
	}
	if ($('#sliding_background_3').position().left < -2300 && $('#sliding_background_3').position().left > -2700) {
		if (deltaa>0) {
			$('#answer_3').css('top','-5%');																				
			setTimeout(function(){
				$('#answer_2').css('top','-15%');
			},500)

		}
		else {
			$('#answer_2').css('top','-5%');																				
			setTimeout(function(){
				$('#answer_3').css('top','5%');
			},500)
		}
		//$('.sliding_nombre_commu_global').html('40');
		$('.sliding_nombre_commu_rep').html('30');
	}
	if ($('#sliding_background_3').position().left < -2700 && $('#sliding_background_3').position().left > -3000) {
		//$('.sliding_nombre_commu_global').html('70');
		$('.sliding_nombre_commu_rep').html('50');
		if (deltaa>0) {
			$('#answer_4').css('top','-5%');																				
			setTimeout(function(){
				$('#answer_3').css('top','-15%');															
			},500)

		}
		else {
			$('#answer_3').css('top','-5%');																				
			setTimeout(function(){
				$('#answer_4').css('top','5%');
			},500)
		}
		/*setTimeout(function(){
			$('#answer_5').css('top','-5%');
			setTimeout(function(){
				$('#answer_4').css('top','-15%');			
			},500);		
		},800);*/
	}

	if ($('#sliding_background_3').position().left < -500 && $('#sliding_background_3').position().left > -1500) {
		var hide_chart = $('.hide_chart').position().left;
		var pos_hide_chart = hide_chart+_delta*ponderation;					
		if (pos_hide_chart>0 && pos_hide_chart < $(window).innerWidth()){
			$('.hide_chart').css('transform','translateX('+pos_hide_chart+'px)');
		}
	
	}

	if($('.hide_chart').position().left >= 200 ) {
		$('#walking_perso_1').removeClass('hide');
		$('.sliding_nombre_commu_global').html('5');
	}
	if($('.hide_chart').position().left >= 660) {
		$('#walking_perso_2').removeClass('hide');
		$('.sliding_nombre_commu_global').html('15');
	}
	if($('.hide_chart').position().left >= 1130) {
		$('#walking_perso_3').removeClass('hide');
		$('.sliding_nombre_commu_global').html('22');
	}
	if($('.hide_chart').position().left >= 1440) {
		$('#walking_perso_4').removeClass('hide');
		$('.sliding_nombre_commu_global').html('40');
	}

	if($('.hide_chart').position().left <= 200 && $('.hide_chart').position().left > 30) {
		$('#walking_perso_1').addClass('hide');
		//$('.sliding_nombre_commu_global').html('5');
	}
	if($('.hide_chart').position().left <= 660 && $('.hide_chart').position().left > 200) {
		$('#walking_perso_2').addClass('hide');
		//$('.sliding_nombre_commu_global').html('15');
	}
	if($('.hide_chart').position().left <= 1130 && $('.hide_chart').position().left > 660) {
		$('#walking_perso_3').addClass('hide');
		//$('.sliding_nombre_commu_global').html('22');
	}
	if($('.hide_chart').position().left <= 1440 && $('.hide_chart').position().left > 1440 ) {
		$('#walking_perso_4').addClass('hide');
		//$('.sliding_nombre_commu_global').html('40');
	}
		
}
