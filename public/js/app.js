var app = angular.module('Vinsanety', ['ui.router', 'ngMaterial'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .state('bio', {
    url: '/bio',
    templateUrl: '/views/bio.html',
    controller: 'bioController',
    controllerAs: 'bio'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/views/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: '/views/resume.html',
    controller: 'resumeController',
    controllerAs: 'resume'
  })
  .state('projects', {
    url: '/projects',
    templateUrl: '/views/projects.html',
    controller: 'projectsController',
    controllerAs: 'projects'
  })
  .state('mountaineering', {
    url: '/mountaineering',
    templateUrl: '/views/mountaineering.html',
    controller: 'mountaineeringController',
    controllerAs: 'mountaineering'
  })
}])
