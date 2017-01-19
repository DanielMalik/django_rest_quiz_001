$(document).ready(function () {
console.log("jQuery OK");

stage = 1;
data = {};
asked = []
chance = 3
$answerInput = $('#answer-input');
$answerButt = $('#answer-butt');
main();

function npcSimulation() {

    var $npc = $('.npc');
    var $npcs_all_answers = {};
    console.log($npc);
    for (var n = 0; n < $npc.length; n ++) {
        $class = $npc.data("level");
        if ($class == 4) {
             var ran_answer = Math.floor(Math.random() * $class);
             var $thing = $('.chances').get(n);
             console.log($thing);
             if (ran_answer < 0.5) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer
                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;


                        }
        } //end if class=4
        else if ($class == 3) {
             var ran_answer = Math.floor(Math.random() * $class);
             var $thing = $('.chances').get(n);
             console.log($thing);
             if (ran_answer < 0.7) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer
                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;

                        }
        } //end if class=3
        else if ($class == 2) {
             var ran_answer = Math.floor(Math.random() * $class);
             var $thing = $('.chances').get(n);
             console.log($thing);
             if (ran_answer < 1) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer
                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;

                        }
        } //end if class=2
        else if ($class == 1) {
             var ran_answer = Math.floor(Math.random());
             var $thing = $('.chances').get(n);
             console.log($thing);
             if (ran_answer < 0.86) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer
                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;

                        }
        } //end if class=1

    } //for loop
    console.log($npcs_all_answers);
    for (var n = 0; n < ($npc.length * 3); n ++) {
        $change = $('.chances > div').get(n);
        console.log($change);

    } //second loop
    return $npcs_all_answers
};

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
			};

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

    	    $query.find("strong").html("");
    		console.log("czyscimy div z pytaniem");
            $thisQuestion.html("<strong>" + $question + "</strong>");
            $query.append($thisQuestion);
    		console.log("some media");
    		$media.detach();
    		$media.html("");
    		var $audio = $('<audio id="dynamic-audio" type="audio/mpeg">') || new Audio();
            var $play = $('<button id="play-it" class="btn btn-danger">');
            $audio.attr('src', questNow['toAsk']['media']);
            $media.append($audio);
            $play.text('PLAY');
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
    		$media.html("");
    		$query.detach();
    		$query.find("strong").html("");
    		$thisQuestion.html("<strong>" + $question + "</strong>");
    		$query.append($thisQuestion);
    		$('#question').append($query);
    	}


    		//paczamy czy dobrze odpowiedział

};

function stage2() {
	askAndCheckRepeat(randomQuestion());

};

$answerButt.on('click', function(ev) {
   		// ev.preventDefault();
   		npcSimulation();
   		console.log($answerInput.val());
   		console.log(questNow['toAsk']['answer']);
   		console.log($answerInput.val() == questNow['toAsk']['answer']);
   		console.log("dlugosc listy zadanych pytan :" + asked.length);

   		if ($answerInput.val() == questNow['toAsk']['answer']) {

   			$answerInput.val('');
   			console.log('ok answer');
   			console.log(chance);

   			if (asked.length == 2) {
   				console.log("ETAP 2");
   				stage2();
   			}
   			else {

   			askAndCheckRepeat(randomQuestion());
   			}
   		} //if answ ok
   		else {
   			$answerInput.val('');
   			console.log('wrong');
   			console.log("stage issssssssssss :" + stage);
   			chance -= 1
   			console.log("szanseeeeeeeeeeeeeee :" + chance);
   			if (chance > 1 && asked.length < 2) { //1 zla odpowiedz w stage 1
   			console.log(chance);

   			askAndCheckRepeat(randomQuestion());
   			}
   			else if (stage == 1 && chance == 1) { //na koniec 1wszej rundy - 2 zle odp

   				console.log("koniec");
   				setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);
   				return false
   			}
   			else if (stage == 1 && asked.length == 2) { //przechodzi do rundy2 z 2 szansami -1z 1 db
   				console.log("ETAP 2");
   				stage = 2;
   				console.log("stage teraz bedzie :" + stage);
   				stage2();
   			}
   			else if (chance == 0) { //na koniec szans

   				console.log("koniec");
   				var delay = 5000;
                setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);

   				return false
   			}


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

//        		console.log(json.results[i]);
        		data[i] = json.results[i];
//        		console.log(data);


			}


			askAndCheckRepeat(randomQuestion());





	 	}) //.ajax done()

}; //main() - getQuestions



}); //document ready