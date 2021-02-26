        function rotate1() {
            var FR = document.getElementsByClassName("cube")[0];
            FR.style.transform = "rotateX(-180deg)";
            $(".mission").css("display", "none")
            $(".ethical").css("display", "block")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "none")


        }
        function rotate2() {
            var SR = document.getElementsByClassName("cube")[0];
            SR.style.transform = "rotateY(90deg)";
            $(".mission").css("display", "none")
            $(".ethical").css("display", "block")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "none")

        }
        function rotate3() {
            var TR = document.getElementsByClassName("cube")[0];
            TR.style.transform = "rotateY(-90deg)";
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "block")
            $(".empowering").css("display", "none")
        }
        function rotate3() {
            var OR = document.getElementsByClassName("cube")[0];
            OR.style.transform = "rotateY(-90deg)";
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "block")
            $(".empowering").css("display", "none")

        }
        function rotate4() {
            var IR = document.getElementsByClassName("cube")[0];
            IR.style.transform = "rotateX(-90deg)";
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "block")

        }
        function rotate5() {
            var XR = document.getElementsByClassName("cube")[0];
            XR.style.transform = "rotateX(90deg)";
        }
        function rotate6() {
            var VR = document.getElementsByClassName("cube")[0];
            VR.style.transform = "rotateX(360deg)";
        }

        var ethical = document.getElementsByClassName(".ethical")[0];
        var engaging = document.getElementsByClassName(".engaging")[0];
        var empowering = document.getElementsByClassName(".empowering")[0];


        function show_mission() {
            $(".mission").css("display", "block")
            $(".ethical").css("display", "none")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "none")

        }

        function show_ethical() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", "block")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "none")

        }

        function show_engaging() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "block")
            $(".empowering").css("display", "none")

        }

        function show_empowering() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "block")

        }

           function stylize1() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", "block")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "none")

        }

        function stylize2() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "block")
            $(".empowering").css("display", "none")

        }

        function stylize3() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "block")

        }
  function stylize4() {
            $(".mission").css("display", "none")
            $(".ethical").css("display", " none")
            $(".engaging").css("display", "none")
            $(".empowering").css("display", "block")

        }

        
        
		function frida_confetti() {
            
			document.getElementById(".frida_confetti")
			confetti.speed = 0;
			confetti.start(400, 30, 50);
		}

