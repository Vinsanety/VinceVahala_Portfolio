app.controller('homeController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.tabindex-hidden-link').attr('tabindex', '-1');
  });
})


app.controller('bioController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.materialboxed').materialbox();
  });
})


app.controller('contactController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('textarea#contact-textarea').characterCounter();
  });
})


app.controller('resumeController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
  });
})


app.controller('projectsController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.collapsible').collapsible();
    $('.slider').slider({
      height: 420,
      duration: 420,
    }).slider('pause');
    // Run Forecast Btn Add
    $('.runForecast-slider-caption').append("<a class='btn btn-draw-border projects-visit-app-btn' href='https://RunForecast.web.app' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // Vahala Fitness Btn Add
    $('.vahalaFitness-slider-caption').append("<a class='btn btn-draw-border projects-visit-app-btn' href='https://vahalafitness-df5d3.web.app/' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // E Source Btn Add
    $('.eSource-slider-caption').append("<a class='btn btn-draw-border projects-visit-app-btn' href='https://www.ESource.com' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // Spoilers Btn Add
    $('.spoilers-slider-caption').append("<a class='btn btn-draw-border projects-visit-app-btn' href='https://podcastspoilers-dd5b5.web.app/' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // Next and Prev btns
    $('.projects-slider-next').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.slider').slider('next').slider('pause');
   })
    $('.projects-slider-prev').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.slider').slider('prev').slider('pause');
    });
 });
})


app.controller('mountaineeringController', function($scope, $sce, travelPhotoDataFactory, travelFilmDataFactory) {
  document.documentElement.scrollTop = 0;
  $('.tabindex-hidden-link').attr('tabindex', '-1');
})


app.controller('photosController', function($scope, travelPhotoDataFactory) {
  document.documentElement.scrollTop = 0;
  // Photo Data
  $scope.travelPhotoDataCurrent = travelPhotoDataFactory.travelPhotoDataCurrent();
  $scope.travelPhotoData = travelPhotoDataFactory.travelPhotoData();
});
// Allows passing html into JSON strings
app.filter('HtmlBind', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});


app.controller('videosController', function($scope, $sce, travelFilmDataFactory) {
  document.documentElement.scrollTop = 0;
  // Delay collasible method as ng-repeat finishes
  setTimeout(function(){
    $('.collapsible').collapsible();
  }, 250);
  // Film Data
  $scope.travelFilmData = travelFilmDataFactory.travelFilmData();
  // Handle Youtube embed trusted src
  $scope.trustSrc = function(videoID) {
    var path = 'https://www.youtube-nocookie.com/embed/' + videoID + '?rel=0';
    return $sce.trustAsResourceUrl(path);
  }
});


app.controller('statsController', function($scope, summitDataFactory) {
  document.documentElement.scrollTop = 0;
  $scope.currentPage = 0;
  $scope.pageSize = 7;
  $scope.summitData = summitDataFactory.summitData();
  $scope.numberOfPages = function(){
    return Math.ceil($scope.summitData.length/$scope.pageSize);
  }
});
// Stats Table Filter
app.filter('startFrom', function() {
  return (input, start) => {
    start = +start;
    return input.slice(start);
  }
});
// Stats Total Summit Filter
app.filter('SummitTotal', function () {
	return function (input, prop) {
		var i =  input.length;
  		var total = 0;
  		while (i--)
  			total += input[i][prop];
		  return total;
	  }
});
