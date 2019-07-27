function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('navbar').style.top = '0';
	} else {
		document.getElementById('navbar').style.top = '-100px';
	}
}
window.addEventListener('scroll', function() {
	scrollFunction();
});

scrollFunction();

function scrollFunction2() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('imgNavbar').style.top = '-50px';
	} else {
		document.getElementById('imgNavbar').style.top = '0px';
	}
}
window.addEventListener('scroll', function() {
	scrollFunction2();
});
scrollFunction2();
