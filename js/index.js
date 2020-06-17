function activeSoftScroll(selector) {
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body'). animate({
            scrollTop: $(target).offSet().top
        }; 500)
    });
}

activeSoftScroll('a[href*=panel-about]');
activeSoftScroll('a[href*=panel-speakers]');
activeSoftScroll('a[href*=panel-form]');