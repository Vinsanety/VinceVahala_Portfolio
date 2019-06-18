app.controller('homeController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
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
    $('.modal').modal();
    $("#resume-icon-overlay").click(function() {
      $('html, body').animate({
        scrollTop: $("#resume-current-job-card").offset().top - 135
      }, 2500);
    });
  });
})


app.controller('projectsController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.collapsible').collapsible();
    $('.slider').slider({
      height: 420,
      interval: 7500,
    });
    // Run Forecast Btn Add
    $('.runForecast-slider-caption').append("<a class='btn projects-visit-app-btn' href='https://RunForecast.web.app' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // Vahala Fitness Btn Add
    $('.vahalaFitness-slider-caption').append("<a class='btn projects-visit-app-btn' href='https://vahalafitness-df5d3.web.app/' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // E Source Btn Add
    $('.eSource-slider-caption').append("<a class='btn projects-visit-app-btn' href='https://www.ESource.com' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // Spoilers Btn Add
    $('.spoilers-slider-caption').append("<a class='btn projects-visit-app-btn' href='https://podcastspoilers-dd5b5.web.app/' target='_blank'>Visit App <i class='fa fa-external-link-alt'></i></a>");
    // Next and Prev btns
    $('.projects-slider-next').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.slider').slider('next');
   })
    $('.projects-slider-prev').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.slider').slider('prev');
    });
    // Prevent Default Autoplay
    // $('.slider').slider('pause');
 });
})


app.controller('mountaineeringController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.tooltipped').tooltip({delay: 50});
    $('.collapsible').collapsible();
    $("#travel-icon-overlay").click(function() {
      $('html, body').animate({
        scrollTop: $("#travel-card-container").offset().top - 75
      }, 1500);
    });
    $("#vahala-films-scroll-to").click(function() {
      $('html, body').animate({
        scrollTop: $("#vahala-films-collection").offset().top - 75
      }, 1000);
    });
    $("#photo-collections-scroll-to").click(function() {
      $('html, body').animate({
        scrollTop: $("#photo-collections").offset().top - 75
      }, 1000);
    });

    $scope.oxfordData = [
      {
        description: "Starting out for Mount Belford",
        img: "https://lh3.googleusercontent.com/ueiE0FUcZBMjNJic-cRkECqwAIlpnwobiyXGay6TftBCKrkTGt0D9WG-6pXM5SCbjfXZND_weKNOWuaAyisJtN_kUNedXZ83l2KMJgL2mKTuNwRFnPf10hzCFt_pCf0xl4u855_KrFbfe-p6upbdZcYL5Lxx7cIaA2TzPodS8wBASQGwR17tzck5B9RmSDQqQkcFiiQfxHBHoNzYJT2rXjlDaYsRw_Q2UDnKwTzab1XgX7oEFXD6z6CC0dTidpVzd2AapwcEqjEG8OgkmyIjYLgvqDtTN8F8Sm9DjhkcgCDRGIBD20v74gEh1JqAsPjP1a7hCMPzshDLFoX_vh6r97cN2wzKgV-JCSTNk7845KpC--Px-Y5Glc0GLBADSk8FPsjP3dT9izyJ0EfStDGqqnvvSCVXPpTCXAkDmCk205_iQ4xhWQ2rGegcELY_t7y72dsJ0gAJGkuwFRBNij26QoAbXdr_4emMG7sCrElx3yzXZxqW9JapU-vUMemcbhigJp01_0LTkm3r1jVZuFvlHSNmDkoGnzijGxxwQQl_Eaqq-tNg_4e_QpIfEtXYpsZwlZ96ANw4g_-F2dFtfX8K2Xd5OviLpUp0X8ddhYEYMjwBUnBgTLjxmEU67uKD3oNN1SJtTlshQBAHOHzcIPDSVlI09iuvw_k=w1052-h789-no",
      },
      {
        description: "Garrett dragging feet but in good spirits",
        img: "https://lh3.googleusercontent.com/VAO65FZasVNzxjAvbY8Qslq-moHMRav1znBqTYgnk5PkJ3i0kEsPBVsTJyIhVZojHvhLSkfO_5kGYN2DKYQappkPBWvJQoutsxZBUiNkoQYWYkxxHKhQ_ibopj9VK8vN35jnHgOheC27zrFlgjlriYX6Cfzx24VJrozvtrqj2tCt-Et5DLC8B05wBoIlxbQNHfa9RPu_aGaSZkTdGP_vUS78mvPqUGpBSkw0xV7_OsUmlqsy2yWcl5RbgYe352Pq2vtonaOd2gzV16a8lNpqZU5iL1UxhAZqBnGpLV175tvZaTHDHzLpPndNobjx_IsdJQYKFFuG2Mrx4ZcuFDlNeYdyErIIfj-iqkk4mVfQtZ9gMG_ictmVz5RLbI2enn7FR_-gMGtx5SWOMS_O2H00YAdhzHrE4PH2mxaEKpyqqLCLgDEJSOPYvYJZ2UMY8kYZ3GP2bsKxpbIp2YOE2KTO9aSwLNqLvBZupQc0MRDNeoLVnD4BpGrAq74RNyufqn4rcThfaugYAw095s1UlxVi1_8MoqbN76AuKiIETzzUob9VdocdmxxS3fehRlDlUutNQ_2nDCEKR-7lqsPHjz4noM5KHrndq6Iv9by3Yt1D-GMrNUVo9ZRtIC4Itfunsdi3ZuHsNZMoMdgQQ-AJF4R0S-_W-wjKy94=w1052-h789-no",
      },
      {
        description: "Summit of Mount Belford; half the work done, onto Oxford",
        img: "https://lh3.googleusercontent.com/YNPfcHEKBXDBg70sU4-Fgud5Qzehxkt-gHXLvygBOcBJCQZ8gst-vQJrOlnRV1GMLNtL7WyD_vHZt6f14VcGcXxkG8xxcZrsvI2r_Q0FXE1ADE__m5cp79MgurQ6kYnNsv5O-1THTSo_MfjbiuxPTa_8ngxHfZ-HV-uwUMqZ4CqELOW8RSek61Qt6Uw9edtZwTMoYDCGfniuQbOU30BrvQ5V8J5GE9lSOgGyg4cvDHAMYKu6GBv1pNPR2aByH6OiAHa9iAPDNnzBhjhG4oiISuF4FDTcaFkShGDnOfumYEvg5g6BXOuAnzbKdjgESkEGgOBx3Bnk0g8fBnJnvSyD1HMn0linllrWxN5DivezVHwTuS_kcEbJJ1Ir2dyfn_vNWmWjfZQ9rgUSuo1OkgfQS4HmzDosef9u9WiUlFUw0NxcOkgUfMtTJ2dNB565rlu63483Ai9PMzskjSBLa7nhbNGjE48uMAC5kMx-2IdqnvAPIdIwW0rOGl-ceCZ3toGTo9Q5FeWWE0lKrjMI6OlNBzdzJ6gTJeigH54-_E426oDvaczZhezMApB6hR7-7zDeKF0mTtqQVTtZeYFi8ZwgQCOpqOLY4GEaokS3a07aTKxi3gSau2Xs_MNqGDuvzLH-TNdAs2J0Wo0zBfWRgEmLpkIWYAqLv1Q=w1052-h789-no",
      },
      {
        description: "Traversing snowpack on the way to Oxford",
        img: "https://lh3.googleusercontent.com/9pol1g6O_37ZOv3hOgbsV3_KV2JRU7Y3HWgUIVnftECpRQTSxK7W5r3bU-Hv6aaAjXoL7fdFNRBZ0rJlQ4Eqmin1cJh0-8P2T7JUBTxP19ZQMJ1iv1T4ge3XMUkkuzVZwoyWtHUTmQpo7vVRiJNE-FxuUhVqcFEhvYF3MXQR7KN4g718CFdvRpN79KSjpS_zlzsQ8giYJoMtX6167Dqe9WU7MMvrtvcmdysjk46nuRM7LNxzFqU-Cqdi4DUYV4MjMPyh-4BK7Z7T1c7ZOmmaWnq0sJJrPtmtwOVprkVHZRXWb_o-tI96Er_AM8Wtz66LzGO05szDQkuNU809Ky0bUAzft0Rt-a0yCrMSkf3Dd-v2PKBDQiciMWmLW8zLe7iIRueDnc7AoJ59tYdRD_K4UzkF9ov26KyCeaYdC9Rf4erZlCF0303VsWV-QyHrvz04wkgA1-VBOItvE37mtZzGLK24WWWixfUPaYBp3Bzf3smeU-AVkGS38lZIloZPIcrZkQ8nlgksvRfqdiWTJQeyixnHy7dbRUD6eMxtiyp0zL72u0aHDrYGY1t-_Ky5ZJDGYyJWlBykJqsap_kNZu8AtdKvqHmXigafpOi4I0o7Vcq-DyvQsozPOw5hzmhR7oICX3rzuKkRo9e89O7__6CSGBIJ2uEFFAk=w1054-h789-no",
      },
      {
        description: "Mount Oxford seen from Belford, working our way back",
        img: "https://lh3.googleusercontent.com/1RoPUGlet6uLa1Z7QgojvIayJ3YgIDBFOiblkBvql05txQLBf4a9RXvo1NIO58g1wVQC4ud9vlr71O4OIiVz1MAhCzYlwmoM_gjrxdaxkdXkKX2ywM0Z4b-0YqgDN1K0M6imn7og0PHbeK5v74FBoeI_rZq2sD1oIBmvcrZfJnmXIjuHnNNblEpGIbtovNv4LDqw8IxsIuFx1ecEKB_67y2MLGOi48rxaP9gdUxl9SMiRJuRzMj8eUn55va9RqONnpT4zq2FqnNjpoafwxKfTi_O64DDuX56qVp5oZqLt3e_efs51zYh_NHsZsI1Khlr7MXTGWg5p0YbvE1G3izdGmunm85Pkt84v_luvWbgpvkS0lhcchY5BMWQ-Pr7-MB15hTNgoeknjHlEgX8UP3mWnlTwSvs5WFcU44Pu8UA8Flh1XpmiyPZPPohF0P0C8mJMentiwuq52ooCq-fE0MG3BYItwDzuLWQZs7Asm1Gvf3d1WbTBZfB0MTdoOR9carvr3Ir8nATzkq-stOxcBnNWDahcHWR2lDh6eP1yIYMHbYZynyXt7B8XeAeNdX4kgHBjQvMm4tg9AJVQo0whcAFLDJHu5JYVfvBQhk5NRugGm7kdQPUqxxY1EKt4uP19Gt_CXmNnVeis6ExTvaN6lIt4KO4_DNpsNU=w1083-h789-no",
      }
    ]
    console.log($scope.oxfordData);

  });
})
