(function ($) {
    "use strict";

    $(document).ready(function() {

        $(".switch-btn").on("click", function () {
            var e = this.io ^= 1;
            $(".switcher").animate({right: e ? 0 : -300}, "medium");
        });

        /*Color sheets Switching
         * -----------------------------------------------------------------------------------------------------------*/
        $(".switcher .list-inline li").on('click', function(e) {
            e.preventDefault();
            var colorCss=$(this).attr('class')+".css";
            $("#color-switcher").attr('href','css/color-css/'+colorCss);
        });       
        
    });

})(jQuery);