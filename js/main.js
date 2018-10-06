var main = (function() {

    function createSvg() {
        $('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            $.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');
        });
    }

    function dragWindow() {
        $(".window").draggable({ handle: ".window-header" });
        $(".window").draggable({ cancel: "span.close" });
        $(".window").draggable({ containment: "#office" });
        $(".window-content").disableSelection();
    }

    function resizeWindow() {	
        $(".window").resizable({ containment: "#office", ghost: true });
    }

    function closeWindow() {
        $("span.circle.left.close").click(function(){
            $(".window").hide();
        });
    }

    function openWindow() {
        $("ul.title li").click(function(){
            $(".window").show();
        });
    }

    function defineClick() {
        closeWindow();
        openWindow();
    }

    function defineWindow() {
        dragWindow();
        resizeWindow();
    }

    return{
        createSvg: createSvg,
        defineClick: defineClick,
        defineWindow: defineWindow
    }
})();

window.onload = function(){   
    main.createSvg();
    main.defineWindow();
    main.defineClick();
};