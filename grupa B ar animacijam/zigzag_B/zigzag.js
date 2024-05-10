// /* FadeIn Scroll */
// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.fade').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},900);
                    
//             }
            
//         }); 
    
//     });
    
// });

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fade').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 250;
            if( bottom_of_window > bottom_of_object ){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)' // Move from translateY(50px) to translateY(0)
                });
            }
        });
    });
});

