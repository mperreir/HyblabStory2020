$(document).ready(function() {

    $(".expChoice").click(function() {
        $(".expChoice").addClass('expChoiceHidden');

        $(this).removeClass("expChoiceHidden");
        $(this).addClass("expChoiceExpand");

    });
});
