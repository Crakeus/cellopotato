$(document).ready(function(){

   // jQuery methods go here...
   $.get("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Clàssic?api_key=cf1476c5-f500-4f4d-92aa-0929a43abad9", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
   });
   

});