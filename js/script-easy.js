(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.scripteasy = {
    attach: function(context, settings) {
      if (typeof(myscripteasy) == "undefined") {
        /*$('.app_item').addClass('slideInLeft');
        var waypoint_app = new Waypoint({
          element: $('#app'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#app').addClass('app__fixed');
            } else{
              $('#app').removeClass('app__fixed');
            }
          }
        })
        $("#app1").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form1"});
        $("#app2").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form2"});*/
        $("#b_callback").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form3"});

        // Declare parallax on layers
        /*$('#qwew').parallax({
          mouseport: $('#qwe')
        });*/
      }
      myscripteasy = true;
    }
  };
})(jQuery, Drupal, this, this.document);