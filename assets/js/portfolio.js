$(document).ready(function () {
    // var $loading = $('#loadingDiv').hide();
    // $(document).ajaxStart(function () {
    //     $loading.show();
    // }).ajaxStop(function () {
    //     $loading.hide();
    // });
    // let searchParams = new URLSearchParams(window.location.search)
    // let paramLang = searchParams.get('lang');
    // if (paramLang) {
    //     localStorage.languege = paramLang;
    // } else if (!localStorage.languege) {
    //     localStorage.languege = '';
    // }
    // var lang = localStorage.languege == 'en' ? localStorage.languege + "/" : '';

    /* Header & Menu */
    // $("header.resume-header").load('/includes/' + lang + 'header.html');
    // $("section.menu-section").load('/includes/menu-section.html');

    /* Data */
    $("section.portfolio-section").load('/includes/' + lang + 'portfolio-section.html', function () {
        var arrYear = [2020, 2017,2012,2010];

        $.each(arrYear, function (index, value) {
            $.get('/includes/' + lang + 'portfolio-' + value + '.html', function (data) {
                $("section.portfolio-section .resume-timeline").append(data);
                popImg();
                newSort();
            });
        });


    });

    // var curYear = new Date().getFullYear();
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    //         // ajax call get data from server and append to the div
    //         console.log("Is down");
    //         console.log(curYear);

    //         $("section.portfolio-section").load('/includes/' + lang + 'portfolio-section.html', function () {
    //             popImg();
    //         });
    //     }
    // });


});

function newSort() {
    $('section.portfolio-section .resume-timeline article').sort(function (a, b) {
        console.log("New sort");
        console.log(a.id +">"+ b.id);
        return a.id > b.id;
    }).appendTo('.section.portfolio-section .resume-timeline');
}

function popImg() {
    // $('.carousel-item  img#images').viewer();
    $('.gallery-items').viewer();
    // $('.pop').unbind('click');
    // $('.pop').on('click', function () {
        // $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        // $('#imagemodal').modal('show');
    //     return false;
    // });
    // var viewer = ImageViewer();
    // $('.gallery-items').click(function () {
    //     var imgSrc = this.src,
    //         highResolutionImage = $(this).data('high-res-img');

    //     viewer.show(imgSrc, highResolutionImage);
    // });

    // $('.iv-image-view').click(function () {
    //     viewer.hide();
    // });

}
