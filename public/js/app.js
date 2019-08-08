var app = angular.module('Vinsanety', ['ui.router'])

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
    templateUrl: '/views/mountaineering/mountaineering.html',
    controller: 'mountaineeringController',
    controllerAs: 'mountaineering'
  })
  .state('photos', {
    url: '/photos',
    templateUrl: '/views/mountaineering/photos.html',
    controller: 'photosController',
    controllerAs: 'photos'
  })
  .state('videos', {
    url: '/videos',
    templateUrl: '/views/mountaineering/videos.html',
    controller: 'videosController',
    controllerAs: 'videos'
  })
  .state('stats', {
    url: '/stats',
    templateUrl: '/views/mountaineering/stats.html',
    controller: 'statsController',
    controllerAs: 'stats'
  })
}])
