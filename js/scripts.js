//carousel is active and two buttons control the behavior of the carousel
$(document).ready(function() {
    $('#mycarousel').carousel({ intervel: 2000});
    $('#carouselButton').click(function() {
        //if button is pause
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }//if button is play
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
       
    });
});