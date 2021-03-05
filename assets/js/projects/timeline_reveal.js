
    $(document).ready(function () {
                $(".comparison_section").addClass("sm_selected");
                $(".comparison_section").removeClass("xl_selected");


        $("#exampleRadios1").change(function () {
            if ($(this).prop("checked") == true) {
                $(".comparison_section").addClass("xl_selected");
                $(".comparison_section").removeClass("sm_selected");
            } else {
                $(".comparison_section").addClass("sm_selected");
                $(".comparison_section").removeClass("xl_selected");
            }
        });

        $("#exampleRadios2").change(function () {
            if ($(this).prop("checked") == true) {
                $(".comparison_section").addClass("sm_selected");
                $(".comparison_section").removeClass("xl_selected");
            } else {
                $(".comparison_section").addClass("xl_selected");
                $(".comparison_section").removeClass("sm_selected");
            }
        });
    });