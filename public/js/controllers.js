app.controller('homeController', function($scope) {
  console.log('home route hit');

  angular.element(document).ready(function () {
    // IMAGE POP UP ACTION
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
  });

})

app.controller('bioController', function($scope) {
  console.log('bio route hit');

  angular.element(document).ready(function () {
    // IMAGE POP UP ACTION
    $('.materialboxed').materialbox();
  });

})

app.controller('contactController', function($scope) {
  console.log('contact route hit');

  angular.element(document).ready(function () {

  });

})

app.controller('resumeController', function($scope) {
  console.log('resume route hit');

  angular.element(document).ready(function () {
    // MODAL ACTION
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
  });

})

app.controller('projectsController', function($scope) {
  console.log('projects route hit');

  angular.element(document).ready(function () {
    // COLLAPSIBLE ACTION
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
    // MODAL ACTION
    $('.modal-trigger').leanModal();
    // IMAGE POP UP ACTION
    $('.materialboxed').materialbox();
    // CAROUSEL
    $('.carousel').carousel({

    });
    
 });

})

app.controller('mountaineeringController', function($scope) {
  console.log('mountaineering route hit');

  angular.element(document).ready(function () {
    $('.parallax').parallax();
  });

})
