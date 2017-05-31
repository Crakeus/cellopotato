function main() {
	$('.images').hide();
	$('.images').fadeIn(3000);
}
function fadeIn(obj) {
    $(obj).fadeIn(1000);
}
$(document).ready(main);