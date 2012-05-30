/*
 * Vincent.js
 * Unfortunately written by Ryhan Hassan
 */

var vincent = (
function(){
	function Bot(){

		this.elem= function(){

			var image = document.createElement('img');
			image.setAttribute('id', 'vincentjs-bot');
			image.setAttribute('src','http://ryhan.me/lab/vincentjs/img/vincent.png');
			image.setAttribute('style', 'visibility:visible;display:inline-block;width:362px;height:573px;position:fixed;bottom:-150px;right:0;opacity:0;transition: all 1s;-moz-transition: all 1s;-webkit-transition: all 1s;-o-transition: all 1s;');

			return image;
		}
		this.init = function(){
			document.body.appendChild(this.elem());
		}
		this.remove = function(){
			var bot = document.getElementById('vincentjs-bot');
			bot.parentNode.removeChild(bot);

		}
		this.show = function(){
			var bot = document.getElementById('vincentjs-bot');
			bot.style.bottom = '-100px';
			bot.style.opacity ='1';
		}
		this.hide = function(){
			var bot = document.getElementById('vincentjs-bot');
			bot.style.bottom = '-150px';
			bot.style.opacity = '0';
		}
	}

	var actor = new Bot();
	return {
		'init':function(){
			actor.init();
		},
		'sayHello':function(){
			actor.show();
			var autohide = setTimeout('vincent().hide();', 4000);
		},
		'hide':function(){
			actor.hide();
		},
		'fuckYeah':function(){
			var links = document.getElementsByTagName('a');
			for(var i= 0; i<links.length; i++){
				links[i].setAttribute('onclick','vincent().sayHello(); return false;')
			}
		}
	};

	
});