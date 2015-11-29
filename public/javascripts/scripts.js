$(document).ready(function(){
    if (window.innerWidth < 450) {
        $('.home').css ({
            'padding-left': '0px'
        })
    }

    for (var i = 1; i < 366;) {
        var arry = [];
        
        console.log(i);
    }

    $('#projects, #web, #experience').hide();

    $('.home').click(function() {
    var id = (this.title)
    var $content = $('#' + id);

    if ($('.current').length === 0) {
            showContent($content)
        }
        else {
            $('.current').fadeOut(300, function() {
                showContent($content)
            });
        }
    });

    function showContent(content) {
        content.fadeIn(600);
        $('.current').removeClass('current');
        content.addClass('current');
    }
});