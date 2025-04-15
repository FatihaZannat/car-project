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
        


    }


})(jQuery)