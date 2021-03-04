
    $(document).ready(function () {

                $(".single_section").addClass("sm_selected");
                $(".comparison_section").addClass("sm_selected");
                $(".single_section").removeClass("xl_selected");
                $(".comparison_section").removeClass("xl_selected");


        $("#exampleRadios1").change(function () {
            if ($(this).prop("checked") == true) {
                $(".single_section").addClass("xl_selected");
                $(".comparison_section").addClass("xl_selected");
                $(".single_section").removeClass("sm_selected");
                $(".comparison_section").removeClass("sm_selected");
            } else {
                $(".single_section").addClass("sm_selected");
                $(".comparison_section").addClass("sm_selected");
                $(".single_section").removeClass("xl_selected");
                $(".comparison_section").removeClass("xl_selected");
            }
        });

        $("#exampleRadios2").change(function () {
            if ($(this).prop("checked") == true) {
                $(".single_section").addClass("sm_selected");
                $(".comparison_section").addClass("sm_selected");
                $(".single_section").removeClass("xl_selected");
                $(".comparison_section").removeClass("xl_selected");
            } else {
                $(".single_section").addClass("xl_selected");
                $(".comparison_section").addClass("xl_selected");
                $(".single_section").removeClass("sm_selected");
                $(".comparison_section").removeClass("sm_selected");
            }
        });
    });