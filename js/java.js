$(document).ready(function(){

   // jQuery methods go here...
    $.ajax({
        type: 'GET',
		url: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Cl%C3%A0ssic?api_key=cf1476c5-f500-4f4d-92aa-0929a43abad9',
		success: function(data) {
			$("p").text(data);
		}
	
    });

});