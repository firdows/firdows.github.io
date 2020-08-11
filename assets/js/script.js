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
    let searchParams = new URLSearchParams(window.location.search);
    let paramLang = searchParams.get('lang');
    let accessKey = searchParams.get('key');
    
    var pathname = window.location.pathname;
    var res = pathname.split("/");

    if (paramLang) {
        localStorage.languege = paramLang;
    } else if (!localStorage.languege) {
        localStorage.languege = '';
    }
    var date = new Date();
    date.setDate(date.getDate() + 1);
    if (accessKey == date.getDate()) {
        localStorage.accessKey = 1;
        window.location.replace("/"+res[1]);
    } else if (!localStorage.accessKey) {
        localStorage.accessKey = 0;
    }

    // console.log(param);
    //console.log(localStorage.languege);


   
    lang = localStorage.languege == 'en' ? localStorage.languege + "/" : '';

    if (localStorage.accessKey != 1) {
        $("article.resume-wrapper").load('/splash-screen.html');
    }


    /* Header & Menu */
    $("header.resume-header").load('/includes/' + lang + 'header.html');
    $("section.menu-section").load('/includes/menu-section.html', function () {
        // console.log(res[1]);
        $('ul.main-menu').find('li.nav-item').removeClass('active');
        $('ul.main-menu').find('li.nav-item a[href="/' + res[1] + '"]').parent().addClass('active');

        var newLang = localStorage.languege;
        newLang = newLang ? newLang : 'th';
        // console.log(newLang);
        $('ul.lang-menu').find('li.nav-item').removeClass('active');
        $('ul.lang-menu').find('li.nav-item a[href*="' + newLang + '"]').parent().addClass('active');
    });

});
