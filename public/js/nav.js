$( document ).ready(function(){
  // Instantiate Sidenav
  $(".sidenav")
  // Close Sidenav
  .sidenav()
  .on("click tap", "li a", () => {
      $(".sidenav").sidenav("close");
  });
  // Removes Tab Index for Accessibility
  $(".tabindex-hidden-link").attr("tabindex", "-1");
  // Adds Active Class to Nav Items
  $(".main-nav-link").on("click", function(){
    var clicked = $(this);
    $(".main-nav-link").each(function(){
      if($(this).hasClass("active-link")){
        $(this).removeClass("active-link");
      }
    });
    $(this).addClass("active-link");
  });
   $(".dropdown-trigger").dropdown({
      coverTrigger: false,
      hover: true,
   });
});
