$(document).ready(function () {
console.log("jQuery OK");

data = {};
asked = []
main();


function randomQuestion(){
		
				
		        
		        console.log(data);
		        var dataLen = Object.keys(data).length;
		        var ran_key = Math.floor(Math.random() * dataLen);
		        console.log("ran key " + ran_key);
		        var toAsk = data[ran_key];

		        					//okej, teraz if zeby sie pytania nie powtarzaly

		        if ($.inArray(ran_key, asked) != -1) {
		        	console.log('wyjebka na losowaniu');
		        	return randomQuestion();
		        }
		        else {

		        console.log(toAsk);
		        console.log(data);
		        asked.push(ran_key);
		        console.log(asked);

		        return questNow = {'data':data, 'toAsk': toAsk, 'asked' : asked}
				}
			}

function askAndCheckRepeat(questNow) {

	$query = $('#query');
	console.log($query);
	$media = $('#media');
	console.log($media);
	$timebelt = $('#timebelt');
	$answerInput = $('answer-input');
	$answerButt = $('#answer-butt');
			//pokazujemy typowi pytanie
	var $thisQuestion = $("<p>");
	$question = questNow['toAsk']['query']
	console.log($question);
    $thisQuestion.html("<strong>" + $question + "</strong>");
    $query.append($thisQuestion);
    		// paczamy czy mamy media
    	if (questNow['toAsk']['media'] != null) {

    		console.log("some media");
    		$media.detach();
    		var $audio = $('<audio id="dynamic-audio" type="audio/mpeg">') || new Audio();
            var $play = $('<button id="play-it" class="btn btn-danger">');
            $audio.attr('src', questNow['toAsk']['media']);
            $media.append($audio);
            $media.append($play);
            console.log($audio);
            $query.append($media);
            $('#question').append($query);

            $('#play-it').click(function() {
                            console.log($('audio'));
                            
                            $('audio')[0].play();
                            
                        });
            setTimeout(function(){
            						$('audio')[0].pause();
            							alert("Audio Stop Successfully");
        							}, 15000);


    	}	else {
    		console.log('nie ma media');
    		$query.detach();
    		$thisQuestion.html("<strong>" + $question + "</strong>");
    		$query.append($thisQuestion);
    		$('#question').append($query);
    	}

    		//paczamy czy dobrze odpowiedział
   
}

function main() {



    $.ajax(
        {
            url: "http://127.0.0.1:8000/questions/"
        }
    )
        .done(
        function (json) {
        	for (var i = 0; i < (json.results.length); i ++) {
        		
        		console.log(json.results[i]);
        		data[i] = json.results[i];
        		console.log(data);
        	
        	
			}
			randomQuestion();
			console.log(questNow);

			askAndCheckRepeat(questNow);

			
			

	 	}) //.ajax done()

}; //main() - getQuestions



}); //document ready
