
		// using d3 for convenience
		var main1 = d3.select(".main1");
		var scrolly1 = main1.select("#scrolly1");
		var figure1 = scrolly1.select(".figure1");
		var article1 = scrolly1.select(".article1");
		var step1 = article1.selectAll(".step1");
	
		// initialize the scrollama
		var scroller1 = scrollama();
	
		// generic window resize listener event
		function handleResize() {
		  // 1. update height of step elements
		  var stepH1 = Math.floor(window.innerHeight * 0.75);
		  step1.style("height", stepH1 + "px");
	
		  var figureHeight1 = window.innerHeight / 2;
		  var figureMarginTop1 = (window.innerHeight - figureHeight1) / 2;
	
		  figure1
		    .style("height", figureHeight1 + "px")
		    .style("top", figureMarginTop1 + "px");
	
		  // 3. tell scrollama to update new element dimensions
		  scroller1.resize();
		}
	
		// scrollama event handlers
		function handleStepEnter(response) {
		  console.log(response);
		  // response = { element, direction, index }
	
		  // add color to current step only
		  step1.classed("is-active", function(d, i) {
		    return i === response.index;
		  });
	
		  // update graphic based on step
		  figure1.select(".p1").text(response.index + 1 +4);
		}
	
		function setupStickyfill() {
		  d3.selectAll(".sticky").each(function() {
		    Stickyfill.add(this);
		  });
		}
	
		function init() {
		  setupStickyfill();
	
		  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
		  handleResize();
	
		  // 2. setup the scroller passing options
		  // 		this will also initialize trigger observations
		  // 3. bind scrollama event handlers (this can be chained like below)
		  scroller1
		    .setup({
			step: "#scrolly1 .article1 .step1",
			offset: 0.33,
			debug: true
		    })
		    .onStepEnter(handleStepEnter);
	
		  // setup resize event
		  window.addEventListener("resize", handleResize);
		}
	
		// kick things off
		init();