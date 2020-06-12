$(function(){

    $(document).ready(function(){
        var mySettings = {
              key : true,
              dropBlock : $('.drop'),
              virtualSelect : $('.slct')
          }
          
          mySettings.virtualSelect.click(function(){
              if( mySettings.dropBlock.is(':hidden') ) {
                  mySettings.dropBlock.slideDown();
                  $(this).addClass('active');
              } 
              else {
                  mySettings.dropBlock.slideUp();
                  $(this).delay(400).queue(function(nextJ){
                      $(this).removeClass("active");
                      nextJ();
                  });
              }
              return false;
          });	
          mySettings.dropBlock.find('li').click(function(){
              var selectResult = $(this).html();
              $(this).parent().parent().find('input').val(selectResult);
              mySettings.dropBlock.slideUp();				
              mySettings.virtualSelect.delay(400).queue(function(nextJs){
                  $(this).removeClass("active");
                  nextJs();
              }).html(selectResult);
              return false;
          });	
          $(document).click(function(event) {
              if(mySettings.key && !$(event.target).closest(mySettings.dropBlock).length){
                  mySettings.dropBlock.slideUp();
                  mySettings.virtualSelect.delay(400).queue(function(nextJs){
                      $(this).removeClass("active");
                      nextJs();
                  });
                  mySettings.key = true; 
                  return;
              }	
          });
      });


      $('.work-slider__inner').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
      });

      $('.buy-slider').slick({
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/right-arrow.svg" alt=""></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/left-arrow.svg" alt=""></img>',
        responsive: [
            {
              breakpoint: 1181,
              settings: {
                arrows: false,
                dots: true,
              }
            },
          ]
      });

      $('.location-slider').slick({
        nextArrow: '<img class="slider-arrows location-arrows__right" src="images/right-arrow.svg" alt=""></img>',
        prevArrow: '<img class="slider-arrows location-arrows__left" src="images/left-arrow.svg" alt=""></img>',
        responsive: [
          {
            breakpoint: 1181,
            settings: {
              arrows: false,
              dots: true,
            }
          },
        ]
      });

      $('.open-btn').on('click', function() {
        $('.menu').toggleClass('active');
      });

      $('.close-btn').on('click', function() {
        $('.menu').toggleClass('active');
      });
      
      new WOW().init();
});