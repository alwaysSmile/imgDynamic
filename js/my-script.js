$(document).ready(function () {

//beginning menu clicks
    $('a[href^="."]').click(function(){
    var scroll_el = $(this).attr('href');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 600);
    return false; 
    });
//end menu clicks




});//end .ready



