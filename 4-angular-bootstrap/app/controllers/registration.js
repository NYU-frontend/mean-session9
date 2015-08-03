graphApp.controller("registration", 
	function($scope, 
		$location, 
		$firebaseAuth, 
		FIREBASE_URL,
		Authentication
		){

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		$scope.login = function(){
			Authentication.login($scope.user)
			.then(function(user){
				$location.path("/graph");
			}).catch(function(error){
				$scope.message = error.message;
			}); // authwithpassword
			
	} // login

	$scope.register = function() {
		$location.path("/graph");
	} // register

});  






