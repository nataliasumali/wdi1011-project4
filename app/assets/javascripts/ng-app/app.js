var app = angular.module('spaApp', ['ui.router', 'templates']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'home.html'
	});
	
});