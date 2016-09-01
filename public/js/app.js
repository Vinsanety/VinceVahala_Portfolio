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
    // .state('xyz', {
    //   url: '/xyz',
    //   templateUrl: '/xyz/cart.html',
    //   controller: 'xyzController',
    //   controllerAs: 'bio'
    // })
}])
