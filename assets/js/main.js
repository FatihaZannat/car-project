(function($){

    $(function() {
        mainNav()
    })

    function mainNav() {
        $('.cs_nav').append('<span class="cs_menu_toggle"><span></span></span>')
    }   $('.cs_menu_toggle').on('click', function(){
  
        $(this)
        .toggleClass('cs_toggle_active')
        .sibllings('.cs_nav_list')
        .toggleClass('cs_active')
        console.log('object');

    })
    
})(jQuery)