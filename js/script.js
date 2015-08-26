$(document).ready(function(){
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
      slider.slider( 'value', 50 );
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
});