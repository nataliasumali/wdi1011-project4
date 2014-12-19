angular.module('spaApp', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'home.html',
		controller: 'homeController'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'about.html'
	})
	.state('map', {
		url: '/map',
		templateUrl: 'map.html'
	})
}])

.controller('homeController', ['$scope', 'api', function($scope, api) {

	$scope.getImages = function() {

		var lat = document.getElementsByClassName('userLat')[0].value;
		var lng = document.getElementsByClassName('userLng')[0].value;

		api.getPlaces(lat, lng)
		.then(function(data) {
			$scope.data = data.data;
		});

	};

	$scope.reset = function() {
    window.location.reload(false);
	};

  $scope.centerMap = function(data){
  	// $('#myCoolMap').attr('src', 'https://maps.googleapis.com/maps/api/staticmap?center=' + data['location']['latitude'] + ',' + data['location']['longitude'] + '&zoom=12&size=400x400&markers=color:red%7Clabel:S%7C' + data['location']['longitude']);
  	$('#myCoolMap').attr('src', 'https://maps.googleapis.com/maps/api/staticmap?center=' + data['location']['latitude'] + ',' + data['location']['longitude'] + '&zoom=12&size=400x400&markers=color:red%7C'+ data.location.latitude +','+ data.location.longitude);
  };

}])

.service('api', ['$http', function($http) {

	return {

		getPlaces: function(lat, lng) {

			var promise = $http.get('https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lng + '&client_id=43d5ec3d450445fa9aafc9765600598b')
			.then(function(response) {
				return response
			});

			return promise;

		}
	}
}]);