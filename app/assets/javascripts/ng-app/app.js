angular.module('spaApp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/home/',
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
		console.log(data);
		$scope.data = data.data.data.comments.data;
		var dataArray = [];
		var dataLength = data.data.data.comments.data.length;
		for (var i=0; i < dataLength; i++) {
			dataArray.push($scope.data[i].created_time);
		}
		console.log(dataArray);
	})
})

.service('api', function($http) {
	return {
		getPlaces: function() {
			var promise = $http.get('https://api.instagram.com/v1/media/3?client_id=43d5ec3d450445fa9aafc9765600598b')
			.then(function(response) {
				return response
			});
			return promise;
		}
	}
});

