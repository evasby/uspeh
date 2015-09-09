(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.mycalc = {
    attach: function(context, settings) {
      if (typeof(mycalc) == "undefined") {
        //Calculation
        function calculate(var1, var2) {
          result =  parseInt(var1) + parseInt(var2);
          $('#calc_result').text(result);
        }

        //Initialization
        var slideresult = 10;
        var var1 = 60;
        $('input[name=calcradio]').each(function() {
          if( $(this).is(':checked') ) { 
            var1 = $(this).val();
            calculate(var1, slideresult);
          }
        });
        $('input[name=calcradio]').change(function() {     
          var1 = parseInt($(this).val());
          calculate(var1, slideresult);
        }); 
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
              calculate(var1, 10);
            } else
            if (curent <= 247) {
              slideresult = Math.round((curent)/247*50);
              $( "#calc-curent" ).val(slideresult);
              calculate(var1, slideresult);
            }else if (curent <= 358){
              slideresult = Math.round((curent-248)/110*50+50);
              $( "#calc-curent" ).val(slideresult);
              calculate(var1, slideresult);
            }else if (curent <= 491){
              slideresult = Math.round((curent-359)/132*100+100);
              $( "#calc-curent" ).val(slideresult);
              calculate(var1, slideresult);
            }else if (curent <= 718){
              slideresult = Math.round((curent-492)/226*300+200);
              $( "#calc-curent" ).val(slideresult);
              calculate(var1, slideresult);
            }else if (curent <= 855){
              slideresult = Math.round((curent-719)/136*500+500);
              $( "#calc-curent" ).val(slideresult);
              calculate(var1, slideresult);
            }else if (curent <= 1000){
              slideresult = Math.round((curent-856)/144*1000+1000);
              $( "#calc-curent" ).val(slideresult);
              calculate(var1, slideresult);
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
            slideresult = $(this).val();
            calculate(var1, slideresult);
          }else if ($(this).val() <= 100){
            slider.slider( 'value', ($(this).val()-50)*110/50 + 248 );
            slideresult = $(this).val();
            calculate(var1, slideresult);
          }else if ($(this).val() <= 200){
            slider.slider( 'value', ($(this).val()-100)*132/100 + 359 );
            slideresult = $(this).val();
            calculate(var1, slideresult);
          }else if ($(this).val() <= 500){
            slider.slider( 'value', ($(this).val()-200)*226/300 + 492 );
            slideresult = $(this).val();
            calculate(var1, slideresult);
          }else if ($(this).val() <= 1000){
            slider.slider( 'value', ($(this).val()-500)*136/500 + 719 );
            slideresult = $(this).val();
            calculate(var1, slideresult);
          }else if ($(this).val() <= 2000){
            slider.slider( 'value', ($(this).val()-1000)*144/1000 + 856 );
            slideresult = $(this).val();
            calculate(var1, slideresult);
          }
        });
        $( "#calc-curent" ).change(function() {
          if ($(this).val() <= 10) {
            $(this).val(10);
          }
        });
      }
      mycalc = true;
    }
  };
})(jQuery, Drupal, this, this.document);