app.controller('homeController', function($scope) {
  console.log('home route hit');
  // SIDE NAV ACTION
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
  // IMAGE POP UP ACTION
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

})

app.controller('bioController', function($scope) {
  console.log('bio route hit');
  // SIDE NAV ACTION
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
  // IMAGE POP UP ACTION
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

})

app.controller('contactController', function($scope) {
  console.log('contact route hit');
  // SIDE NAV ACTION
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

})

app.controller('resumeController', function($scope) {
  console.log('resume route hit');
  // SIDE NAVE ACTION
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
  // MODAL ACTION
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

})

app.controller('projectsController', function($scope) {
  console.log('projects route hit');
  // SIDE NAV ACTION
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

  // COLLAPSIBLE ACTION
  $(document).ready(function(){
   $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
 });

})

app.controller('mountaineeringController', function($scope) {
  console.log('mountaineering route hit');
  // SIDE NAV ACTION
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

})
