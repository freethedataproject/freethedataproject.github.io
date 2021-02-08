

$(function() {

	$.each(lyrics, function(key, value) {
	  $('#json').append('<div class="item album year ' + lyrics[key].album + " " + lyrics[key].year + " " + lyrics[key].physical_violence + " " + lyrics[key].murder + " " + lyrics[key].threat + " " + lyrics[key].stalking + " " + lyrics[key].domestic_violence + " " + lyrics[key].emotional_abuse +  " " + lyrics[key].reproductive_violence + " " + lyrics[key].sexual_harassment + " " + lyrics[key].rape + " " + lyrics[key].molestation + " " + lyrics[key].trivialization + " " + lyrics[key].objectification + " " + lyrics[key].stereotype + '"><p class = "songtitle">' + lyrics[key].title + '</p><p class = "songlyric">' + lyrics[key].lyric + '</p></div>')

	  
	});
    });
    

