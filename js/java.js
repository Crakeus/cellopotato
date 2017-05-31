function main() {
	$('.images').hide();
	function fadeIn(obj) {
      $(obj).fadeIn(1000);
    }
	$("#JTSnow").bind("load", function () { $(this).fadeIn(); });
}

$(document).ready(main);