(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.myscript = {
    attach: function(context, settings) {


      if (typeof(myscript) == "undefined") {
      

        $('.main-pager_item').each(function(){
          $(this).click(function(){
            $.scrollTo(
              $(this).attr("href"),
              {
                duration: 400,
                offset: { 'left':0, 'top':0 }
              }
            );
          });  
        });

        $('#toup').each(function(){
          $(this).click(function(){
            $.scrollTo(
              $(this).attr("href"),
              {
                duration: 400,
                offset: { 'left':0, 'top':0 }
              }
            );
          });
        });

        var visible = '95%';
        var hidden = 50;
        $('.app_item').addClass('slideInLeft');
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

        

        var waypoint_title1 = new Waypoint({
          element: $('#title'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.title__main').bgLoaded({
                afterLoaded : function(){
                  $('#title').removeClass('fadeOut').addClass('fadeIn');
                  $('.title_h1').removeClass('fadeOut').addClass('fadeIn');
                  $('.title_descr').removeClass('fadeOut').addClass('fadeIn');
                  $('.main-descr').removeClass('rollOut').addClass('rollIn');
                  $('.form-discount').addClass('bounceInDown');
                }
              });
            } else{
              $('#title').removeClass('fadeIn').addClass('fadeOut');
              $('.title_h1').removeClass('fadeIn').addClass('fadeOut');
              $('.title_descr').removeClass('fadeIn').addClass('fadeOut');
              $('.main-descr').removeClass('rollIn').addClass('rollOut');
              $('.form-discount').removeClass('bounceInDown');
            }
          },
          offset: visible
        })
        var waypoint_title2 = new Waypoint({
          element: $('#title'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#title').removeClass('fadeIn').addClass('fadeOut');
              $('.title_h1').removeClass('fadeIn').addClass('fadeOut');
              $('.title_descr').removeClass('fadeIn').addClass('fadeOut');
              $('.main-descr').removeClass('rollIn').addClass('rollOut');
              $('.form-discount').removeClass('bounceInDown');
            } else {
              $('#title').removeClass('fadeOut').addClass('fadeIn');
              $('.title_h1').removeClass('fadeOut').addClass('fadeIn');
              $('.title_descr').removeClass('fadeOut').addClass('fadeIn');
              $('.main-descr').removeClass('rollOut').addClass('rollIn');
              $('.form-discount').addClass('bounceInDown');
            };
            
          },
          offset: - $('#title').innerHeight() + hidden
        })

        var waypoint1_1 = new Waypoint({
          element: $('#main1'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main1_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main1_item').removeClass('fadeOutUp').addClass('fadeInUp');
            } else{
              $('.main1_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main1_item').removeClass('fadeInUp').addClass('fadeOutUp');
            }
          },
          offset: visible
        })
        var waypoint1_2 = new Waypoint({
          element: $('#main1'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main1_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main1_item').removeClass('fadeInUp').addClass('fadeOutUp');
            } else {
              $('.main1_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main1_item').removeClass('fadeOutUp').addClass('fadeInUp');
            };
          },
          offset: - $('#main1').innerHeight() + hidden
        })

        var waypoint2_1 = new Waypoint({
          element: $('#main2'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main2_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main2_wrap').removeClass('fadeOut').addClass('fadeIn');
              $('.calc-tax_item').removeClass('flipOutY').addClass('flipInY');
            } else{
              $('.main2_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main2_wrap').removeClass('fadeIn').addClass('fadeOut');
              $('.calc-tax_item').removeClass('flipInY').addClass('flipOutY');
            }
          },
          offset: visible
        })
        var waypoint2_2 = new Waypoint({
          element: $('#main2'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main2_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main2_wrap').removeClass('fadeIn').addClass('fadeOut');
              $('.calc-tax_item').removeClass('flipInY').addClass('flipOutY');
            } else {
              $('.main2_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main2_wrap').removeClass('fadeOut').addClass('fadeIn');
              $('.calc-tax_item').removeClass('flipOutY').addClass('flipInY');
            };
            
          },
          offset: - $('#main2').innerHeight() + hidden
        })

        var waypoint3_1 = new Waypoint({
          element: $('#main3'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main3').addClass('main3__anim fadeIn').removeClass('fadeOut');
              $('.main3_item').removeClass('fadeOut').addClass('fadeIn');
            } else{
              $('#main3').addClass('fadeOut').removeClass('main3__anim fadeIn');
              $('.main3_item').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint3_2 = new Waypoint({
          element: $('#main3'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main3').addClass('fadeOut').removeClass('main3__anim fadeIn');
              $('.main3_item').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main3').addClass('main3__anim fadeIn').removeClass('fadeOut');
              $('.main3_item').removeClass('fadeOut').addClass('fadeIn');
            };
          },
          offset: - $('#main3').innerHeight() + hidden
        })

        var waypoint4_1 = new Waypoint({
          element: $('#main4'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main4_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main4_item').removeClass('fadeOutUp').addClass('fadeInUp');
            } else{
              $('.main4_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main4_item').removeClass('fadeInUp').addClass('fadeOutUp');
            }
          },
          offset: visible
        })
        var waypoint4_2 = new Waypoint({
          element: $('#main4'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main4_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main4_item').removeClass('fadeInUp').addClass('fadeOutUp');
            } else {
              $('.main4_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main4_item').removeClass('fadeOutUp').addClass('fadeInUp');
            };
          },
          offset: - $('#main4').innerHeight() + hidden
        })

        var waypoint5_1 = new Waypoint({
          element: $('#main5'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main5_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main5').removeClass('fadeOut').addClass('fadeIn');
              $('.main5_item').removeClass('zoomOut').addClass('zoomIn');
            } else{
              $('.main5_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main5').removeClass('fadeIn').addClass('fadeOut');
              $('.main5_item').removeClass('zoomIn').addClass('zoomOut');
            }
          },
          offset: visible
        })
        var waypoint5_2 = new Waypoint({
          element: $('#main5'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.main5_head').removeClass('fadeIn').addClass('fadeOut');
              $('.main5').removeClass('fadeIn').addClass('fadeOut');
              $('.main5_item').removeClass('zoomIn').addClass('zoomOut');
            } else {
              $('.main5_head').removeClass('fadeOut').addClass('fadeIn');
              $('.main5').removeClass('fadeOut').addClass('fadeIn');
              $('.main5_item').removeClass('zoomOut').addClass('zoomIn');
            };
          },
          offset: - $('#main5').innerHeight() + hidden
        })

        var waypoint7_1 = new Waypoint({
          element: $('#main7'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main7').addClass('main3__anim fadeIn').removeClass('fadeOut');
              $('.main3_item').removeClass('fadeOut').addClass('fadeIn');
            } else{
              $('#main7').addClass('fadeOut').removeClass('main3__anim fadeIn');
              $('.main3_item').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint7_2 = new Waypoint({
          element: $('#main7'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main7').addClass('fadeOut').removeClass('main3__anim fadeIn');
              $('.main3_item').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main7').addClass('main3__anim fadeIn').removeClass('fadeOut');
              $('.main3_item').removeClass('fadeOut').addClass('fadeIn');
            };
          },
          offset: - $('#main7').innerHeight() + hidden
        })

         var waypoint8_1 = new Waypoint({
          element: $('#main8'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main8').addClass('fadeIn').removeClass('fadeOut');
              $('.main8_head').addClass('fadeIn').removeClass('fadeOut');
              $('.main8_slider').addClass('fadeIn').removeClass('fadeOut');
            } else{
              $('#main8').addClass('fadeOut').removeClass('fadeIn');
              $('.main_head').addClass('fadeOut').removeClass('fadeIn');
              $('.main8_slider').addClass('fadeOut').removeClass('fadeIn');
            }
          },
          offset: visible
        })
        var waypoint8_2 = new Waypoint({
          element: $('#main8'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main8').addClass('fadeOut').removeClass('fadeIn');
              $('.main8_head').addClass('fadeOut').removeClass('fadeIn');
              $('#main8').addClass('fadeOut').removeClass('fadeIn');
            } else {
              $('#main8').addClass('fadeIn').removeClass('fadeOut');
              $('.main_head').addClass('fadeIn').removeClass('fadeOut');
              $('.main8_slider').addClass('fadeIn').removeClass('fadeOut');
            };
          },
          offset: - $('#main8').innerHeight() + hidden
        })

        /*var waypoint_gmap1 = new Waypoint({
          element: $('#gmap'),
          handler: function(dir) {
            navigation_links.removeClass("main-pager_item__active");
            $('.main-pager a[href="#gmap"]').addClass("main-pager_item__active");
          },
          offset: visible
        })
        var waypoint_gmap2 = new Waypoint({
          element: $('#gmap'),
          handler: function(dir) {
            navigation_links.removeClass("main-pager_item__active");
            $('.main-pager a[href="#gmap"]').addClass("main-pager_item__active");
          },
          offset: - $('#gmap').innerHeight() + hidden
        })*/


        var navigation_links = $('.main-pager_item');
        var waypager11 = new Waypoint({
          element: $('#main1'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main1"]').addClass("main-pager_item__active");
            } else {
              navigation_links.removeClass("main-pager_item__active");
            }
          },
          offset: 100
        })
        var waypager12 = new Waypoint({
          element: $('#main1'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
            } else {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main1"]').addClass("main-pager_item__active");
            };
          },
          offset: - $('#main1').innerHeight() + 200
        })

        var waypager21 = new Waypoint({
          element: $('#main2'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main2"]').addClass("main-pager_item__active");
            } else{
              navigation_links.removeClass("main-pager_item__active");
            }
          },
          offset: 100
        })
        var waypager22 = new Waypoint({
          element: $('#main2'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
            } else {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main2"]').addClass("main-pager_item__active");
            };
          },
          offset: - $('#main2').innerHeight() + 200
        })

        var waypager41 = new Waypoint({
          element: $('#main4'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main4"]').addClass("main-pager_item__active");
            } else{
              navigation_links.removeClass("main-pager_item__active");
            }
          },
          offset: 100
        })
        var waypager42 = new Waypoint({
          element: $('#main4'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
            } else {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main4"]').addClass("main-pager_item__active");
            };
          },
          offset: - $('#main4').innerHeight() + 200
        })

        var waypager51 = new Waypoint({
          element: $('#main5'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main5"]').addClass("main-pager_item__active");
            } else{
              navigation_links.removeClass("main-pager_item__active");
            }
          },
          offset: 100
        })
        var waypager52 = new Waypoint({
          element: $('#main5'),
          handler: function(dir) {
            if (dir === 'down') {
              navigation_links.removeClass("main-pager_item__active");
            } else {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#main5"]').addClass("main-pager_item__active");
            };
          },
          offset: - $('#main5').innerHeight() + 200
        })

        var waypager_gmap1 = new Waypoint({
          element: $('#gmap'),
          handler: function(dir) {
            if (dir === 'down') {
              //navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#gmap"]').addClass("main-pager_item__active");
            } else{
              navigation_links.removeClass("main-pager_item__active");
            }
          },
          offset: 500
        })
        var waypager_gmap2 = new Waypoint({
          element: $('#gmap'),
          handler: function(dir) {
            if (dir === 'down') {
              //navigation_links.removeClass("main-pager_item__active");
            } else {
              navigation_links.removeClass("main-pager_item__active");
              $('.main-pager a[href="#gmap"]').addClass("main-pager_item__active");
            };
          },
          offset: - $('#gmap').innerHeight() + 500
        })
        /*
        var title_top = $('#title').offset().top;
        var title_height = $('#title').innerHeight();
        var main1_top = $('#main1').offset().top;
        var main1_height = $('#main1').innerHeight();
        var main2_top = $('#main2').offset().top;
        var main2_height = $('#main2').innerHeight();
        var main3_top = $('#main3').offset().top;
        var main3_height = $('#main3').innerHeight();
        var main4_top = $('#main4').offset().top;
        var main4_height = $('#main4').innerHeight();
        var main5_top = $('#main5').offset().top;
        var main5_height = $('#main5').innerHeight();
        var main6_top = $('#main6').offset().top;
        var main6_height = $('#main6').innerHeight();
        var main7_top = $('#main7').offset().top;
        var main7_height = $('#main7').innerHeight();
        var main8_top = $('#main8').offset().top;
        var main8_height = $('#main8').innerHeight();
        var title_loaded, main1_loaded, main2_loaded, main3_loaded, main4_loaded, main5_loaded, main6_loaded, main7_loaded, main8_loaded = false;
        var add_H = 300;
        $('#blocks').html(
        	'<p>titleT - ' + title_top + '; titleH - ' + title_height + '</p>' + 
        	'<p>main1T - ' + main1_top + '; main1H - ' + main1_height + '</p>' + 
        	'<p>main2T - ' + main2_top + '; main2H - ' + main2_height + '</p>' + 
        	'<p>main3T - ' + main3_top + '; main3H - ' + main3_height + '</p>' +
        	'<p>main4T - ' + main4_top + '; main4H - ' + main4_height + '</p>' +
        	'<p>main5T - ' + main5_top + '; main5H - ' + main5_height + '</p>' +
        	'<p>main6T - ' + main6_top + '; main6H - ' + main6_height + '</p>' +
        	'<p>main7T - ' + main7_top + '; main7H - ' + main7_height + '</p>' +
        	'<p>main8T - ' + main8_top + '; main8H - ' + main8_height + '</p>');
       	var win_H = $(window).height();
        $(window).resize(function() {
        	win_H = $(window).height();
        })*/
        $("#app1").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form1"});
        $("#app2").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form2"});
        $("#b_callback").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form3"});
        $("#b_calc1").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form4"});
        $("#b_calc2").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form5"});
        $("#b_calc3").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form6"});
        $("#b_calc4").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form7"});

        $('.main5_item__1').poshytip({
          className: 'tip-green',
          alignTo: 'target',
          alignX: 'right',
          alignY: 'top',
          offsetX: -10,
          offsetY: -100
        });
        $('.main5_item__2').poshytip({
          className: 'tip-green',
          alignTo: 'target',
          alignX: 'right',
          alignY: 'top',
          offsetX: -10,
          offsetY: -100
        });
        $('.main5_item__3').poshytip({
          className: 'tip-green',
          alignTo: 'target',
          alignX: 'right',
          alignY: 'top',
          offsetX: -10,
          offsetY: -100
        });
        $('.main5_item__4').poshytip({
          className: 'tip-green',
          alignTo: 'target',
          alignX: 'right',
          alignY: 'top',
          offsetX: -10,
          offsetY: -100
        });
        $('.main5_item__5').poshytip({
          className: 'tip-green',
          alignTo: 'target',
          alignX: 'right',
          alignY: 'top',
          offsetX: -10,
          offsetY: -100
        });

        $('.main6_slider').bxSlider({
          controls: false,
          auto: true,
          mode: 'fade'
        });
        $('.main8_slider').bxSlider({
          easing: 'cubic-bezier(.42, 0, .58, 1)',
          pager: false,
          //auto: true,
          slideWidth: 215,
          minSlides: 4,
          maxSlides: 4,
          moveSlides: 1,
          controls: true
        });
      	

      }
      myscript = true;

    }
  };
})(jQuery, Drupal, this, this.document);