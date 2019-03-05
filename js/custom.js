(function($){
    $(function(){
        $('.dropdown').on('show.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });

        $('.dropdown').on('hide.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });
    }) // End ready function
    
    $(window).on("load", function(){
        $("#sidebar-container .logo, .main-header .navbar-brand").addClass("active");
    })
})(jQuery)