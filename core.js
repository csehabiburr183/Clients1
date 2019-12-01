
//  Javascript File

/* Created By      : Habibur Rahman
   Project For     : Freelancer.com
   Reliable Client : GregorSesko
*/



//  Code Below For Showing Second Button --> (CLICK ME BUTTON)
function ShowBtn(){
	document.querySelector(".PrimaryBtn").addEventListener("click",function(){
		document.querySelector(".VisBtn").setAttribute("class","btnShow")
	});
};
// Call The Function For Shown Second Button When Click First Button
ShowBtn();





function FullChat(){
	document.querySelector(".VisBtn").addEventListener("click",function(){
		document.querySelector(".chat-box").setAttribute("style","transform:scaleY(1);")
	});
};
// Call The FullChat() Function For Show Full Chat Option
FullChat();




function ChatXross(){
	document.querySelector(".Xross").addEventListener("click",function(){
		document.querySelector(".chat-box").setAttribute("style","transform:scaleY(0);")
	});
};
// Call The FullChat() Function For Show Full Chat Option
ChatXross();







//   Jquery For Chat Head
//   With Realtime Message 

$(function(){
	var arrow = $('.chat-head img');
	var textarea = $('.chat-text textarea');

	arrow.on('click', function(){
		var src = arrow.attr('src');

		$('.chat-body').slideToggle('fast');
		if(src == 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png'){
			arrow.attr('src', 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png');
		}
		else{
			arrow.attr('src', 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png');
		}
	});

	textarea.keypress(function(event) {
		var $this = $(this);

		if(event.keyCode == 13){
			var msg = $this.val();
			$this.val('');
			$('.msg-insert').prepend("<div class='msg-send'>"+msg+"</div>");
			}
	});

});