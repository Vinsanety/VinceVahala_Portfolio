var app = angular.module('Vinsanety', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'home'
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
