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
    var lang = res[1] != '' ? "-" + res[1] : '';

    /* Data */
    $("header.resume-header").load('/includes/header' + lang + '.html');
    $("section.resume-section").load('/includes/resume-section' + lang + '.html');
    
    $("section.experience-section").load('/includes/experience-section' + lang + '.html');
    $("section.skills-section").load('/includes/skills-section' + lang + '.html');


});
