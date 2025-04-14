(function ($) {

    $(function () {
        mainNav()
    })

    function mainNav() {
        $('.cs_nav').append('<span class="cs_menu_toggle"><span></span></span>')

        $('.cs_menu_toggle').on('click', function () {
            $(this)
                .toggleClass('cs_toggle_active')
                .siblings('.cs_nav_list')
                .toggleClass('cs_active')
        })
        $('.cs_nav_list a').on('click', function () {
            $('.cs_nav_list').removeClass('cs_active')
            $('.cs_menu_toggle').removeClass('cs_toggle_active')
        });
        $('.cs_menu_toggle')
            .parents('body')
            .find('.cs_side_header')
            .addClass('cs_has_main_nav');
           
            console.log('cs_menu_toggle');


    }


})(jQuery)