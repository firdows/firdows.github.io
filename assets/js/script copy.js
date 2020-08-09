$(document).ready(function () {
    var $loading = $('#loadingDiv').hide();
    $(document).ajaxStart(function () {
          $loading.show();
        //console.log("Loading...");
    }).ajaxStop(function () {
        $loading.hide();
        //console.log("Load Success");
    });


    var pathname = window.location.pathname;
    var res = pathname.split("/");
    var lang = res[1] == 'en' ? "-" + res[1] : '';

    /* Data */
    $("header.resume-header").load('/includes/header' + lang + '.html');
    $("section.summary-section").load('/includes/summary-section' + lang + '.html');
    $("section.menu-section").load('/includes/menu-section.html');

    $("section.experience-section").load('/includes/experience-section' + lang + '.html');
    $("section.skills-section").load('/includes/skills-section' + lang + '.html');


});
