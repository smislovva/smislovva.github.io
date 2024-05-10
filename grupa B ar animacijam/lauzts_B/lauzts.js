$(document).ready(function() {
    $(window).scroll( function(){
        $('.fade').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 430;
            if( bottom_of_window > bottom_of_object ){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)' // Move from translateY(50px) to translateY(0)
                });
            }
        });
    });
});