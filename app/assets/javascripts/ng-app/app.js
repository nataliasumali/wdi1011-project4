var app = angular.module('spaApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url: '/home',
		template: '<h1>Home</h1>'
	})
	.state('about', {
		url: '/about',
		template: '<h1>About</h1>'
	})
});