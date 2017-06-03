$(document).ready(function(){

   // jQuery methods go here...
    $.ajax({
        type: 'GET',
		url: 'http://rest.learncode.academy/',
		success: function(data) {
			console.log('success', data);
		}
	
    });

});