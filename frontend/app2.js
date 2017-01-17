$(document).ready(function () {
console.log("jQuery OK");

data = {};
asked = []
chance = 3
$answerInput = $('#answer-input');
$answerButt = $('#answer-butt');
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
		        	if (dataLen == asked.length) {
		        		console.log("nie ma wiecej pytan");
		        		return false
		        	}
		        	else {
		        	return randomQuestion();
		        }
		        }
		        else {

		        console.log(toAsk);
		        console.log(data);
		        asked.push(ran_key);
		        console.log(asked);

		        return questNow = {'data':data, 'toAsk': toAsk, 'asked' : asked}
				}
			}

function askAndCheckRepeat() {

	console.log("szanse: " + chance);
	$query = $('#query');
	console.log($query);
	$media = $('#media');
	console.log($media);
	$timebelt = $('#timebelt');
	$answerInput = $('#answer-input');
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
    		$media.html("");
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
                            
                      
          	 	 			setTimeout(function(){	

            						$('audio')[0].pause();
            							alert("Audio Stop Successfully");
        							}, 15000);

            	 });

    	}	else {
    		console.log('nie ma media');
    		$query.detach();
    		$query.find("strong").html("");
    		$thisQuestion.html("<strong>" + $question + "</strong>");
    		$query.append($thisQuestion);
    		$('#question').append($query);
    	}


    		//paczamy czy dobrze odpowiedział
   
}
$answerButt.on('click', function(ev) {
   		// ev.preventDefault();
   		console.log($answerInput.val());
   		console.log(questNow['toAsk']['answer']);
   		console.log($answerInput.val() == questNow['toAsk']['answer']);

   		if ($answerInput.val() == questNow['toAsk']['answer']) {

   			$answerInput.val('');
   			console.log('ok answer');
   			console.log(chance);
   		
   			askAndCheckRepeat(randomQuestion());
   		} //if answ ok
   		else {
   			$answerInput.val('');
   			console.log('wrong');
   			chance -= 1
   			console.log(chance);
   		
   			askAndCheckRepeat(randomQuestion());
   					
   		} //else - answer wrong

   }); //ev.list do submit
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
			

			askAndCheckRepeat(randomQuestion());


			
			

	 	}) //.ajax done()

}; //main() - getQuestions



}); //document ready
