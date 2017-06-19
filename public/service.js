app.service('emService', function($http) {
  var serv= {};
  // data-channel-external-id="UCtAh700VTIQb5Wsx_vdg-Pw"
  serv.getAllPlayLists = function() {
    var part = "snippet";
    var id = "UCtAh700VTIQb5Wsx_vdg-Pw";
    return $http.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=UCtAh700VTIQb5Wsx_vdg-Pw&key=AIzaSyCLT_rwCcNUqfBEU0FRm2hoBhMkReIUFJU').then(function(response){
      console.log("response is", response);
      return response.data;
    } ,function(error){
      console.error("error during api request", error);
    });
  }//getAllPlaylists
  return serv;
})//service
