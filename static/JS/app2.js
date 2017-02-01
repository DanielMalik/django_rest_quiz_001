$(document).ready(function () {
console.log("jQuery OK");

stage = 1;
data = {};
asked = []
chance = 3


$answerInput = $('#answer-input');
$answerButt = $('#answer-butt');
main();

function stage3() {
    console.log("ETAP 3");

    $npc = $('.npc').not('.hidden');
    console.log($npc);
    askAndCheckRepeat(randomQuestion());
}

function loosers() {
    console.log("SSSPPPRRRAAAWWWDDDZZZAAAMMM!!!!!!!!!!!!!!!!");
    var $npc = $('.out');
//    console.log($npc.length);
    if ($npc.length == 7) {

        for (var t =0; t < 7; t++) {
            $npc.eq(t).addClass("hidden");
            //stage=3;
            stage = 3;
            chance = 3;
            console.log("Teraz nadaje 3 runde");

            }
//        alert("finał");
//        var delay = 2000;
//        setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/"); }, delay);
//        return false
       // chance = 3;
        if (stage == 2) {
//            stage = 3;
//            chance = 3;
            stage3();
        }

    else {}
    }
}; //funkcja loosers


function npcSimulation() {
//    console.log(stage + "który stage           " + stage);

    var $npc = $('.npc');
//    console.log($npc);
    var $npcs_all_answers = {};
//    console.log($npc);  //wszystkie divy
    for (var n = 0; n < $npc.length; n ++) {
        $this_npc = $npc.eq(n);
//        console.log($this_npc)
        $class = $this_npc.data("level");
//        console.log("klasa tego npc :" + $class);
        if ($class == 4) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);
             //console.log($chances_lamps);
             if (ran_answer < 0.79) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer;

                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");
                            loosers();
                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");


                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");
                            loosers();
                            }


                        }
        } //end if class=4
        else if ($class == 3) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);
             //console.log($chances_lamps);
             if (ran_answer < 0.26) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer
                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");
                            loosers();
                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");


                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");
                            loosers();
                            }

//                        for (var d = 0; d < 3; d ++ ){
//                            $lamps = $chances_lamps.children();
//                            if ($lamps.eq(d).hasClass("wrong")) {}
//                            else {
//                            $lamps.eq(d).addClass("wrong")
//                            }
//                        } //for loop na wyczenianie szans
//                         //$chances_lamps.addClass("wrong");

                        }
        } //end if class=3
        else if ($class == 2) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);
             //console.log($chances_lamps);
             if (ran_answer < 0.15) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer
                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");
                            loosers();
                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");


                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");
                            loosers();
                            }

//                        for (var d = 0; d < 3; d ++ ){
//                            $lamps = $chances_lamps.children();
//                            if ($lamps.eq(d).hasClass("wrong")) {}
//                            else {
//                            $lamps.eq(d).addClass("wrong")
//                            }
//                        } //for loop na wyczenianie szans
//                         //$chances_lamps.addClass("wrong");

                        }
        } //end if class=2
        else if ($class == 1) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);
             //console.log($chances_lamps);
             if (ran_answer < 0.1) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer

                }
                else { npc_answer = false
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");
                            loosers();
                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");


                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");
                            loosers();
                            }

//                        for (var d = 0; d < 3; d ++ ){
//                            $lamps = $chances_lamps.children();
//                            if ($lamps.eq(d).hasClass("wrong")) {}
//                            else {
//                            $lamps.eq(d).addClass("wrong")
//                            }
//                        } //for loop na wyczenianie szans
//                         //$chances_lamps.addClass("wrong");

                        }
        } //end if class=1

    } //for loop
    console.log($npcs_all_answers);
//    for (var n = 0; n < ($npc.length * 3); n ++) {
//        $change = $('.chances > div').get(n);
//        console.log($change);
//
//    } //second loop
    return $npcs_all_answers
};

function randomQuestion(){



//		        console.log(data);
		        var dataLen = Object.keys(data).length;
		        var ran_key = Math.floor(Math.random() * dataLen);
//		        console.log("ran key " + ran_key);
//		        var toAsk = data[ran_key];

		        					//if zeby sie pytania nie powtarzaly

		        if ($.inArray(ran_key, asked) != -1) {
		        	console.log('again');
		        	                // if na koniec pytan
		        	if (dataLen == asked.length) {
		        		alert("nie ma wiecej pytan");
		        		return false
		        	}
		        	else {
		        	return randomQuestion();
		        }
		        }
		        else {
		        console.log("TYYYYLLLLLLLLLKO RAZZZZZZZZZZZ");
                var toAsk = data[ran_key];
		        console.log(toAsk);
//		        console.log(data);
		        asked.push(ran_key);
		        console.log(asked);

		        return questNow = {'data':data, 'toAsk': toAsk, 'asked' : asked}
				}
			};

function askAndCheckRepeat() {

	console.log("szanse: " + chance);
	$query = $('#query');
//	console.log($query);
	$media = $('#media');
//	console.log($media);
	$timebelt = $('#timebelt');
	$answerInput = $('#answer-input');
	$answerButt = $('#answer-butt');
			//pokazujemy typowi pytanie
	var $thisQuestion = $("<p>");
	$question = questNow['toAsk']['query']
	$category = questNow['toAsk']['category']
//	console.log($question);
    $thisQuestion.html("<strong>" + $question + "</strong>");
    $query.append($thisQuestion);
    		// paczamy czy mamy media
    	if (questNow['toAsk']['media'] != null) {

    	    $query.find("strong").html("");
//    		console.log("czyscimy div z pytaniem");
            $thisQuestion.html("<h1><strong>" + $question + "</strong></h1>");
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
//            console.log($audio);
            $query.append($media);
            $('#question').append($query);

            $('#play-it').click(function() {
//                            console.log($('audio'));

                            $('audio')[0].play()


          	 	 			setTimeout(function(){

            						$('audio')[0].pause();
//            							alert("Audio Stop Successfully");
        							}, 20000);

            	 });  //click play it

    	}
    	else {
    		console.log('nie ma media');
    		$media.html("");
    		$query.detach();
    		$query.find("strong").html("");
    		$thisQuestion.html("<h1><strong>" + $question + "</strong></h1>");

    		$query.append($thisQuestion);
    		$('#question').append($query);
    	}


    		//paczamy czy dobrze odpowiedział

};

function stage2() {
    console.log("leci funkcja stage2");
	askAndCheckRepeat(randomQuestion());

};

$answerButt.on('click', function(ev) {

   		npcSimulation();  //daj to w inne miejsce

   		console.log($answerInput.val() == questNow['toAsk']['answer']);
   		console.log("dlugosc listy zadanych pytan :" + asked.length);

   		if ($answerInput.val() == questNow['toAsk']['answer']) {

   			$answerInput.val('');
            if (stage == 3) {
   			    console.log("ETAP 3 init");

   			    stage3();
   			    return false
   			}

   			else if (asked.length == 2) {
   				console.log("ETAP 2");
   				stage = 2; // niedobrze tu jest, bo z rundy 3 wraca do drugiej
   				stage2();
   			}

   			else if (stage == 1) {

   			askAndCheckRepeat(randomQuestion());
   			}
   		}
// now it handles WRONG ANSWERS
   		else {
   			$answerInput.val('');
   			console.log('wrong');
   			console.log('BEFORE IF in wrong handle .... chances:' + chance);
   			chance -= 1
   			var lamp_shut_id = (chance);
   			$('.chance-lamp-player').eq(lamp_shut_id).addClass('wrong');
  			console.log("1st IF  ...  chances left :" + chance);
   			if (chance > 1 && asked.length < 2) { //1st wrong answer in STAGE 1

   			askAndCheckRepeat(randomQuestion());
   			}

   			else if (stage == 1 && chance == 1) { //2nd wrong answer in STAGE 1 - GAMEOVER
                console.log("2nd IF  ...  chances left :" + chance);
   				alert("game over");
   				var delay = 5000;
   				setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);
   				return false
   			}
   			else if (stage == 1 && asked.length == 2) { //at least one good answer in stage 1 - promotion to STAGE 2
   				alert("ETAP 2");
   				console.log("3rd IF  ...  chances left :" + chance);
   				stage = 2;
   				stage2();
   			}
   			else if (chance == 0 && stage == 2) { //3rd wrong answer in STAGE2 - GAMEOVER
                console.log("4th IF  ...  chances left :" + chance);
   				alert("game over");
   				var delay = 5000;
                setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);

   				return false
   			}
   			else if (stage == 3 && chance == 3){
   			    console.log("wrong pierwsza w finale");
   			    chance -= 1;
   			    console.log(chance);
   			    stage3();
   			}
   			else if (stage == 3 && chance == 2){
   			    console.log("wrong druga w finale");
   			    chance -= 1;
   			    console.log(chance);
   			    stage3();
   			}
   			else if (stage == 3 && chance == 1){
   			    console.log("wrong ostatnia w finale - wypad");
   			    chance -= 1;
   			    console.log(chance);
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