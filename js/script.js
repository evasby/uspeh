$(document).ready(function(){

  $('html, body').scrollTop();


  /*
    **Main animation
    */


  var app_top = $('#app').offset().top;
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
  })

  /*function loadImage(selector, name){
    $(selector).css('background-image','url(../image/'+ name +')')
    .waitForImages(function() {
      console.log('lib1');
    }, $.noop, true);
  };
  loadImage('.title__main', 'title-main-1920.jpg');*/

  /*function loadImage(selector){
    startTime = new Date().getTime();
    $(selector).bgLoaded({
      afterLoaded : function(){
       this.addClass('bg-loaded');
       console.log(this.attr('class')+' took '+Math.round((new Date().getTime() - startTime))+'ms');
      }
    });
  };
  loadImage('.title__main');*/





  /*$('.title__main').css('opacity', '0');
  $('.title__main').delay(1000).animate({
    opacity: 1,
  }, 1000);*/
	
	var startTime = new Date().getTime();
	var top = $(document).scrollTop();
	if (top == 0) {
  	$('.title__main').bgLoaded({
      afterLoaded : function(){
       this.addClass('bg-loaded');
       title_loaded = true;
       console.log(this.attr('class')+' took '+Math.round((new Date().getTime() - startTime))+'ms');
      }
    });
	};
  $(window).scroll(function(){
  	
  	
    top = $(document).scrollTop();
    $('#offset').text(top);
    //app--------------------------------/
    if (top > app_top) {
      $('#app').addClass('app__fixed');
    } else {
      $('#app').removeClass('app__fixed');
    };
    //title------------------------------/
    if ((top > title_top + title_height) && (title_loaded)) {
    	console.log(title_top + title_height);
			$('.title__main').removeClass('bg-loaded');
			title_loaded = false;
    };
    if ((top < title_top + add_H) && (!title_loaded)){
    	$('.title__main').bgLoaded({
	      afterLoaded : function(){
	       this.addClass('bg-loaded');
	       title_loaded = true;
	       console.log(this.attr('class')+' took '+Math.round((new Date().getTime() - startTime))+'ms');
	      }
	    });
    };
    //main2------------------------------/
    if ((top > main2_top - add_H) && (top < main2_top + main2_height - add_H) && (!main2_loaded)){
			$('#main2').addClass('bg-loaded');
			main2_loaded = true;
			console.log('load main2');
    };
    if (((top < main2_top - win_H) || (top > main2_top + main2_height)) && (main2_loaded)) {
    	console.log('unload main2');
			$('#main2').removeClass('bg-loaded');
			main2_loaded = false;
    };
    //main4------------------------------/
    if ((top > main4_top - add_H) && (top < main4_top + main4_height - add_H) && (!main4_loaded)){
			$('#main4').addClass('bg-loaded');
			main4_loaded = true;
			console.log('load main4');
    };
    if (((top < main4_top - win_H) || (top > main4_top + main4_height)) && (main4_loaded)) {
    	console.log('unload main4');
			$('#main4').removeClass('bg-loaded');
			main4_loaded = false;
    };
    //main5------------------------------/
    if ((top > main5_top - add_H) && (top < main5_top + main5_height - add_H) && (!main5_loaded)){
			$('#main5').addClass('bg-loaded');
			main5_loaded = true;
			console.log('load main5');
    };
    if (((top < main5_top - win_H) || (top > main5_top + main5_height)) && (main5_loaded)) {
    	console.log('unload main5');
			$('#main5').removeClass('bg-loaded');
			main5_loaded = false;
    };
  });











  /*******************************************************************************/






























  $("#app1").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form1"});
  $("#app2").colorbox({transition:"fade", inline:true, opacity:0.8, href:"#form2"});

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

  $('.app_item').each(function(){
    $(this).css('left', '-1000px');
  });
  $('#app1').delay(1500).animate({left: '0px'}, 500, 'swing');
  $('#app2').delay(1800).animate({left: '0px'}, 500, 'swing');

  /*$('.main5_wrap').mousemove(function(e){
    // положение элемента
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // положение курсора внутри элемента
    var Xinner = e.pageX - elem_left;
    var Yinner = e.pageY - elem_top;
    console.log("X: " + Xinner + " Y: " + Yinner); // вывод результата в консоль
  });*/
  
	var curent;
  var slider = $( "#calc" ).slider({
    value: 10,
    orientation: "horizontal",
    range: "min",
    animate: true,
    min: 1,
    max: 1000,
    slide: function( event, ui ) {
    	curent = ui.value;
    	if (curent <= 50) {
    		$( "#calc-curent" ).val(10);
    	} else
    	if (curent <= 247) {
    		$( "#calc-curent" ).val(Math.round((curent)/247*50));
    	}else if (curent <= 358){
    		$( "#calc-curent" ).val(Math.round((curent-248)/110*50+50));
    	}else if (curent <= 491){
    		$( "#calc-curent" ).val(Math.round((curent-359)/132*100+100));
    	}else if (curent <= 718){
    		$( "#calc-curent" ).val(Math.round((curent-492)/226*300+200));
    	}else if (curent <= 855){
    		$( "#calc-curent" ).val(Math.round((curent-719)/136*500+500));
    	}else if (curent <= 1000){
    		$( "#calc-curent" ).val(Math.round((curent-856)/144*1000+1000));
    	}
    	else{
    		$( "#calc-curent2" ).val(curent);
    	}
    }
  });
  $( "#calc-curent" ).keyup(function() {
    if ($(this).val() <= 10) {
      slider.slider( 'value', 1 );
    } else
    if ($(this).val() <= 50) {
      slider.slider( 'value', $(this).val()*247/50 );
    }else if ($(this).val() <= 100){
      slider.slider( 'value', ($(this).val()-50)*110/50 + 248 );
    }else if ($(this).val() <= 200){
      slider.slider( 'value', ($(this).val()-100)*132/100 + 359 );
    }else if ($(this).val() <= 500){
      slider.slider( 'value', ($(this).val()-200)*226/300 + 492 );
    }else if ($(this).val() <= 1000){
      slider.slider( 'value', ($(this).val()-500)*136/500 + 719 );
    }else if ($(this).val() <= 2000){
      slider.slider( 'value', ($(this).val()-1000)*144/1000 + 856 );
    }
  });
  $( "#calc-curent" ).change(function() {
    if ($(this).val() <= 10) {
      $(this).val(10);
    }
  });
});