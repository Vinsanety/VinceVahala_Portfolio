app.controller('homeController', function($scope) {

  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    // IMAGE POP UP ACTION
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.tooltipped').tooltip({delay: 50});
    var options = [
      {
        selector: '#home-ScrollFire-Inititator1', offset: 500, callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#home-ScrollFire-Inititator2', offset: 600, callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      }
    ];
   Materialize.scrollFire(options);
  });

})

app.controller('bioController', function($scope) {

  angular.element(document).ready(function () {
    $(this).scrollTop(0);
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
    $(this).scrollTop(0);

  });

})

app.controller('resumeController', function($scope) {

  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    // MODAL ACTION
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
  });

})

app.controller('projectsController', function($scope) {

  angular.element(document).ready(function () {
    $(this).scrollTop(0);
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
    $(this).scrollTop(0);
    $('.parallax').parallax();
    $("#mountaineering-icon-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#scroll-to-top_Mountaineering").offset().top},
        'slow');
      });
      $('.collapsible').collapsible();
  });

})
