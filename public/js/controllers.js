app.controller('homeController', function($scope) {

  angular.element(document).ready(function () {
    // IMAGE POP UP ACTION
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
  });

})

app.controller('bioController', function($scope) {

  angular.element(document).ready(function () {
    // IMAGE POP UP ACTION
    $('.materialboxed').materialbox();
    var options = [
      {
        selector: '#bio-ScrollFire-Inititator', offset: 400, callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      }
    ];
   Materialize.scrollFire(options);
  });

})

app.controller('contactController', function($scope) {

  angular.element(document).ready(function () {

  });

})

app.controller('resumeController', function($scope) {

  angular.element(document).ready(function () {
    // MODAL ACTION
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
  });

})

app.controller('projectsController', function($scope) {

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

  angular.element(document).ready(function () {
    $('.parallax').parallax();
  });

})
