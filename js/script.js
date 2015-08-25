$(document).ready(function(){
	var curent;
  $( "#calc" ).slider({
    value: 10,
    orientation: "horizontal",
    range: "min",
    animate: true,
    min: 1,
    max: 1000,
    slide: function( event, ui ) {
    	/*if (ui.value < 283) {
    		$( "#calc-curent" ).val(ui.value/5.66);
      	$( "#calc-curent2" ).val(ui.value);
    	} else{
    		$( "#calc-curent" ).val(ui.value/3.9);
      	$( "#calc-curent2" ).val(ui.value);
    	}*/
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
});