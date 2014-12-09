angular.module('spaApp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){

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
})

.controller('homeController', function($scope, api) {
	api.getPlaces()
	.then(function(data){
		$scope.data = data.images
	})
})

.service('api', function($http) {
	return {
		getPlaces: function() {
			var promise = $http.get('https://api.instagram.com/v1/media/popular?client_id=43d5ec3d450445fa9aafc9765600598b')
			.then(function(response) {
				return response
			});
			return promise;
		}
	}
});
