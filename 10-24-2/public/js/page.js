;(function(global,$){
	'use strict';
	var Fullpage = (function(){
		function Fullpage (el,options) {
			this.$el = el;
			this.currIndex = 0;
			this.animating = false;
			this.init();
		}

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

		Fullpage.prototype = {
			constructor:Fullpage,
			init:function(){
				this.initHTML();
				this.bindEvent();
				
				var that = this;
				
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
				
				
				$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
					
					
						var e = arguments[0].originalEvent;
						delta = e.wheelDelta?e.wheelDelta:-e.detail;
						targetIndex = that.currIndex + (delta>0?-1:1);
                        init_scroll();
                        
                            that.gotoTarget(targetIndex);
                        
							  

                });
                
            
				this.$el.on('touchstart',function(e){     
					x0 = e.touches[0].clientX;
					y0 = e.touches[0].clientY;
				});

				this.$el.on('touchmove',utils.throttle(function(){
					var e = arguments[0];
					if (!x0 || !y0) return;
					xDiff = e.touches[0].clientX - x0;
					yDiff = e.touches[0].clientY - y0;

					targetIndex = that.currIndex + (yDiff>0?-1:1);
					that.gotoTarget(targetIndex);
					
				},16));
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

function init_scroll(event, delta){
				
	setTimeout(function(){
		is_ok = true;
	},1500);
}


