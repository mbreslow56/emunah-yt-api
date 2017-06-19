app.controller('emCtrl', function($scope, emService){
  $scope.getAllPlayLists = function() {
    emService.getAllPlayLists().then(function(data, err){
      if (err) {
        console.error("controller error fetching playlists", err);
      } else {
        $scope.allPlayLists = data;
        console.log("controller data", data);
    }
    }//function
  )//callback
}//getallplaylists

$scope.getAllPlayLists();

});//controller
