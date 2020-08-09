var lang = '';

$(document).ready(function () {
    var $loading = $('#loadingDiv').hide();
    $(document).ajaxStart(function () {
        $loading.show();
        //console.log("Loading...");
    }).ajaxStop(function () {
        $loading.hide();
        //console.log("Load Success");
    });
    let searchParams = new URLSearchParams(window.location.search)
    let paramLang = searchParams.get('lang')

    if (paramLang) {
        localStorage.languege = paramLang;
    } else if (!localStorage.languege) {
        localStorage.languege = '';
    }

    // console.log(param);
    //console.log(localStorage.languege);


    var pathname = window.location.pathname;
    var res = pathname.split("/");
    lang = localStorage.languege == 'en' ? localStorage.languege + "/" : '';


    /* Header & Menu */
    $("header.resume-header").load('/includes/' + lang + 'header.html');
    $("section.menu-section").load('/includes/menu-section.html', function () {
        // console.log(res[1]);
        $('ul.main-menu').find('li.nav-item').removeClass('active');
        $('ul.main-menu').find('li.nav-item a[href="/' + res[1] + '"]').parent().addClass('active');

        var newLang = localStorage.languege;
        newLang=newLang?newLang:'th';
        // console.log(newLang);
        $('ul.lang-menu').find('li.nav-item').removeClass('active');
        $('ul.lang-menu').find('li.nav-item a[href*="' + newLang + '"]').parent().addClass('active');
    });

});
