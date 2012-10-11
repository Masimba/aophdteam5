// JavaScript Document

$(document).ready(function(){
	if (!isMobile()) {
		$(".adUnit").hover(
			function() {
				$(".adUnitForm").slideDown(500, function(){
					$("#form").fadeIn(500);
				})
			}, function() {
				$("#form").fadeOut(500, function(){
					$(".adUnitForm").slideUp(500);
				})
			}
		);
	} 
	else {
		$("#adUnit").touchwipe({
			wipeUp: function() { alert("up"); },
			wipeDown: function() { alert("down"); },
			min_move_x: 20,
			min_move_y: 20,
			preventDefaultEvents: true
		});	
	}
});

function isMobile() {
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Nokia/i) || navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	}
	else {
		return false;
	}
}