$(document).ready(function () {
    $('#btnSend').click(function (event) {
        var email = 'cestparla@sortiesdesecours.com';
        var subject = 'Ici votre sujet ';
        var emailBody = 'Ici votre message (Pour la planète pensez à vider votre boîte mail régulièrement ;))';
        var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+"?attach="+attach;
    });
});
