$(function(){
	$('#toTop').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        return false;
	});
	$('#to-intro').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        return false;
	});
	$('#to-skill').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        return false;
	});
	$('#to-EXP').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        return false;
	});
	$('#to-callme').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        return false;
	});
	$('#myname').click(function (){
		alert("您好，大家都叫我大薪薪，请多多指教！");
	});

})