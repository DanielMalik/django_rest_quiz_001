$(document).ready(function () {
console.log("jQuery OK");

stage = 1;
data = {};
asked = []
chance = 3


$answerInput = $('#answer-input');
$answerButt = $('#answer-butt');
main();

function stage1() {
    return askAndCheckRepeat(randomQuestion());
    };

function stage2() {
	return askAndCheckRepeat(randomQuestion());
    };

function stage3() {
    $npc = $('.npc').not('.hidden');
    return askAndCheckRepeat(randomQuestion());
};

function stage3beta() {

    console.log('Stage 3 beta INIT !!! answer val =' + $answerInput.val() );

    $('#AskNPC-1').on('click', function() {

        return singleNPCsimulation(0)
        });

    $('#AskNPC-2').on('click', function() {

        return singleNPCsimulation(1)
        });

    $('#AskPlayer').on('click', function() {

        return askAndCheckRepeat(randomQuestion());
        });

    $('#answerbuttonstage3b').on('click', function(ev) {
   		console.log($answerInput.val() == questNow['toAsk']['answer']);
   		if ($answerInput.val() == questNow['toAsk']['answer']) {
//   			$answerInput.val('');
            var pts = parseInt($('#player-points').children().text());

            pts += 20;

            $('#player-points').children().text(pts);
            ev.preventDefault();
            return stage3beta();

        }
   		else {
//   			$answerInput.val('');
   			console.log('wrong');

   			if (stage == 3 && chance == 3){
   			    console.log("wrong pierwsza w finale");
   			    console.log(stage);
   			    $('.chance-lamp-player').eq(0).addClass('wrong');
   			    chance -= 1;
   			    alert("1st WRONG         will call stage 3 line 441 stage: " + stage);
//                $answerInput.val('');
                ev.preventDefault();
   			    return stage3beta()
   			}
   			else if (stage == 3 && chance == 2){
   			    console.log("wrong druga w finale");
   			    $('.chance-lamp-player').eq(1).addClass('wrong');
   			    chance -= 1;
   			    alert("2nd WRONG           will call stage 3 line 449 stage: " + stage);
//                $answerInput.val('');
                ev.preventDefault();
   			    return stage3beta();
   			}
   			else if (stage == 3 && chance == 1){
   			    console.log("wrong ostatnia w finale - koniec");
   			    $('.chance-lamp-player').eq(2).addClass('wrong');
   			    chance -= 1;

//   			    var delay = 5000;
//                setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);

   				return false
   			}


   		} //else - answer wrong

   });

};

function npcChooseToAnswer(n, $this_npc) {
        var character = $this_npc.data('character');
        var rand = character + Math.floor((Math.random() * 10));
        if (rand <= 5) {
            if (n == 0) { return singleNPCsimulation(1) }

            else { return singleNPCsimulation(0) }
            }//on other npc
        else if (rand > 5 && rand < 10) {
            console.log('npc attacks player!!! stage: ' + stage);
            return askAndCheckRepeat(randomQuestion()) } // on player
        else if (rand >= 10) {
            var npcChoose = true;
            return singleNPCsimulation(n, npcChoose)
            } // on self
}

function loosers() {
    console.log("loosers function initialized");
    var $npc = $('.out');
    if ($npc.length == 7) {

        for (var t =0; t < 7; t++) {
            $npc.eq(t).addClass("hidden");
            }

        if (stage == 2) {

            var pointsToFinal = $('.chance-lamp-player').not('.wrong').length
            $pointsPlayer = $('<div class="points" id="player-points"></div>')
            $pointsPlayer.html("<h4>" + pointsToFinal + "</h4>" );
            $('#player').append($pointsPlayer);

            $('.chance-lamp-player').eq(0).removeClass('wrong');
            $('.chance-lamp-player').eq(1).removeClass('wrong');
            $('.chance-lamp-player').eq(2).removeClass('wrong');
            stage = 3;
            chance = 4;

            alert("looosers  HACKED chances=4    call stage 3 line 46");

            return stage3();
        }

    else {
        return null
    }
    }
};

function singleNPCsimulation(id, npcChoose) {

    npcChoose = npcChoose || false;
    var n = id
    var $npc = $('.npc').not('.out');
    var $this_npc = $npc.eq(n);
    console.log('singleNPCsimulation');
    var $class = $this_npc.data("level");
    var $character = $this_npc.data("character");

    if ($class == 4) {
             var ran_answer = Math.random();
             var $chances_lamps = $this_npc.find('.chances');

             if (ran_answer < 0.79) {
                var npc_answer = true
                console.log(npc_answer)
                if (npcChoose == true) {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 20;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                else {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                }
            else {
                npc_answer = false
                console.log(npc_answer);
                $lamps = $chances_lamps.children();

                if ($lamps.eq(0).hasClass("wrong") == false) {
                    $lamps.eq(0).addClass("wrong");
                    }
                else if ($lamps.eq(1).hasClass("wrong") == false && $lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(1).addClass("wrong");
                    }
                else if ($lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(2).addClass("wrong");
                    $this_npc.addClass("wrong out");
                    }
                }
        } //end if class=4
    else if ($class == 3) {
             var ran_answer = Math.random();
             var $chances_lamps = $this_npc.find('.chances');

             if (ran_answer < 0.79) {
                var npc_answer = true
                console.log(npc_answer)
                if (npcChoose == true) {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 20;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                else {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                }
            else {
                npc_answer = false
                console.log(npc_answer);
                $lamps = $chances_lamps.children();

                if ($lamps.eq(0).hasClass("wrong") == false) {
                    $lamps.eq(0).addClass("wrong");
                    }
                else if ($lamps.eq(1).hasClass("wrong") == false && $lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(1).addClass("wrong");
                    }
                else if ($lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(2).addClass("wrong");
                    $this_npc.addClass("wrong out");
                    }
                }
        } //end if class=3
    else if ($class == 2) {
             var ran_answer = Math.random();
             var $chances_lamps = $this_npc.find('.chances');

             if (ran_answer < 0.79) {
                var npc_answer = true
                if (npcChoose == true) {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 20;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                else {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                }
            else {
                npc_answer = false
                console.log(npc_answer);
                $lamps = $chances_lamps.children();

                if ($lamps.eq(0).hasClass("wrong") == false) {
                    $lamps.eq(0).addClass("wrong");
                    }
                else if ($lamps.eq(1).hasClass("wrong") == false && $lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(1).addClass("wrong");
                    }
                else if ($lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(2).addClass("wrong");
                    $this_npc.addClass("wrong out");
                    }
                }
        } //end if class=2
    else if ($class == 1) {
             var ran_answer = Math.random();
             var $chances_lamps = $this_npc.find('.chances');

             if (ran_answer < 0.79) {
                var npc_answer = true
                console.log(npc_answer)
                if (npcChoose == true) {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 20;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                else {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;
                    $this_npc.children().last().children().text(pts);
                    return npcChooseToAnswer(n, $this_npc);
                    }
                }
            else {
                npc_answer = false
                console.log(npc_answer);
                $lamps = $chances_lamps.children();

                if ($lamps.eq(0).hasClass("wrong") == false) {
                    $lamps.eq(0).addClass("wrong");
                    }
                else if ($lamps.eq(1).hasClass("wrong") == false && $lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(1).addClass("wrong");
                    }
                else if ($lamps.eq(2).hasClass("wrong") == false) {
                    $lamps.eq(2).addClass("wrong");
                    $this_npc.addClass("wrong out");
                    }
                }
        } //end if class=1

}; //end singleNPCsimulation

function npcSimulation() {

    var $npc = $('.npc').not('.out');
    var $npcs_all_answers = {};
    for (var n = 0; n < $npc.length; n ++) {
        var $this_npc = $npc.eq(n);

        var $class = $this_npc.data("level");

        if ($class == 4) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);

             if (ran_answer < 0.79) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer;
                if (stage == 3) {
                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;
                    $this_npc.children().last().children().text(pts);
                    }
                }
                else { npc_answer = false
                    var $npcout = $('.out');
                    if ($npcout.length == 7) { return loosers() }
                    else {
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");

                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");
                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");

                            }
                        }

                    }
        } //end if class=4
        else if ($class == 3) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);

             if (ran_answer < 0.26) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer

                if (stage == 3) {

                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;

                    $this_npc.children().last().children().text(pts);
                    }

                }
                else { npc_answer = false
                    var $npcout = $('.out');
                    if ($npcout.length == 7) { return loosers() }
                    else {
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");

                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");
                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");

                            }

                        }
                    }
        } //end if class=3
        else if ($class == 2) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);

             if (ran_answer < 0.15) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer

                if (stage == 3) {

                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;

                    $this_npc.children().last().children().text(pts);
                    }

                }
                else { npc_answer = false
                    var $npcout = $('.out');
                    if ($npcout.length == 7) { return loosers() }
                    else {
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");

                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");
                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");

                            }

                        }
                    }
        } //end if class=2
        else if ($class == 1) {
             var ran_answer = Math.random();
             var $chances_lamps = $('.chances').eq(n);
             if (ran_answer < 0.1) {
                var npc_answer = true
                $npcs_all_answers[n] = npc_answer

                if (stage == 3) {

                    var pts = parseInt($this_npc.children().last().text())
                    pts += 10;

                    $this_npc.children().last().children().text(pts);
                    }

                }
                else { npc_answer = false
                    var $npcout = $('.out');
                    if ($npcout.length == 7) { return loosers() }
                    else {
                        $npcs_all_answers[n] = npc_answer;
                        $lamps = $chances_lamps.children();

                        if ($lamps.eq(0).hasClass("wrong") == false) {
                            $lamps.eq(0).addClass("wrong");
                            }
                        else if ($lamps.eq(0).hasClass("wrong") == true && stage == 1) {
                            $this_npc.addClass("wrong out");
                            $lamps.eq(1).addClass("wrong");
                            $lamps.eq(2).addClass("wrong");

                            }
                        else if ($lamps.eq(2).hasClass("wrong") == false && $lamps.eq(1).hasClass("wrong") == false && $lamps.eq(0).hasClass("wrong") == true && stage > 1) {
                            $lamps.eq(1).addClass("wrong");
                            }
                        else if($lamps.eq(0).hasClass("wrong") == true && $lamps.eq(1).hasClass("wrong") == true ) {
                            $lamps.eq(2).addClass("wrong");
                            $this_npc.addClass("wrong out");

                            }


                        }
                    }
        } //end if class=1

    } //for loop
    console.log("ALL npcs answers :");
    console.log($npcs_all_answers);
    return $npcs_all_answers
};

function randomQuestion(){

		        var dataLen = Object.keys(data).length;
		        var ran_key = Math.floor(Math.random() * dataLen);

		        if ($.inArray(ran_key, asked) != -1) {
		        	console.log('again');
		        	if (dataLen == asked.length) {
		        		alert("SZNUK: nie mam wiecej pytan");
		        		return false
		        	}
		        	else {
		        	return randomQuestion();
		            }
		        }
		        else {
		        console.log("RANDOM QUESTION SELECT");
                var toAsk = data[ran_key];
		        console.log(toAsk);

		        asked.push(ran_key);
		        console.log(asked);

		        return questNow = {'data':data, 'toAsk': toAsk, 'asked' : asked}
				}
			};

function askAndCheckRepeat() {

	console.log("function aACR()    szanse: " + chance);
	$query = $('#query');
	$media = $('#media');

	$answerInput = $('#answer-input');
	$answerButt = $('#answer-butt');
			//show question to player
	var $thisQuestion = $("<p>");
	$question = questNow['toAsk']['query']
	$category = questNow['toAsk']['category']
    $thisQuestion.html("<strong>" + $question + "</strong>");
    $query.append($thisQuestion);
    		// if there is any media in question - show it
    	if (questNow['toAsk']['media'] != null) {

    	    $query.find("strong").html(""); //clear input

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

            $query.append($media);
            $('#question').append($query);

            $('#play-it').click(function() {

                            $('audio')[0].play();

          	 	 			setTimeout(function(){

            						$('audio')[0].pause();
        							}, 30000);

            	 });  //click play it

    	}
    	else {
    		console.log('there is no media');
    		$media.html("");
    		$query.detach();
    		$query.find("strong").html(""); //clear input
    		$thisQuestion.html("<h1><strong>" + $question + "</strong></h1>");

    		$query.append($thisQuestion);
    		$('#question').append($query);
    	}

};


$answerButt.on('click', function(ev) {

   		npcSimulation();  //daj to w inne miejsce

   		console.log($answerInput.val() == questNow['toAsk']['answer']);
   		console.log("dlugosc listy zadanych pytan :" + asked.length);

   		if ($answerInput.val() == questNow['toAsk']['answer']) {

   			$answerInput.val('');
            if (stage == 3) {
   			    console.log("ETAP 3 good answer initializing: stage3() ");
                alert("GOOD ANSWER    will call stage 3 line 355");

                if (stage == 3) {

                    var pts = parseInt($('#player-points').children().text());
                    pts += 10;

                    $('#player-points').children().text(pts);
                    }
                    if (stage == 3 && parseInt($('#player-points').children().text()) > 30 && $('#AskPlayer').length == 0) {
                        $answerNow = $('<button class="btn btn-danger" id="AskPlayer">DLA MNIE</button>');
                        $answerNPC1 = $('<button class="btn btn-primary" id="AskNPC-1">GRACZ 1</button>');
                        $answerNPC2 = $('<button class="btn btn-primary" id="AskNPC-2">Gracz 2</button>');

                        $answerButt.detach();
                        $answerButton = $('<button class="btn btn-secondary" id="answerbuttonstage3b">ANSWER</button>');
                        $('#answer').append($answerButton);

                        $('#answer').append($answerNPC2);
                        $('#answer').append($answerNPC1);
                        $('#answer').append($answerNow);



                        return stage3beta();

                    }
   			    return stage3();
   			}

   			else if ( stage == 1 && asked.length == 2) {
   				console.log("ETAP 2");
   				console.log("ETAP 1 at least 1 good answer initializing: stage2() ");
   				stage = 2; // niedobrze tu jest, bo z rundy 3 wraca do drugiej

   				return stage2();
   			}

            else if (stage == 2) {
                console.log("ETAP 2 good answer initializing: stage2() ");

                return stage2();

   			}

   			else if (stage == 1) {
   			    return askAndCheckRepeat(randomQuestion());
   			}
   		}
// now it handles WRONG ANSWERS
   		else {
   			$answerInput.val('');
   			console.log('wrong');
   			console.log('BEFORE IF in wrong handle .... chances:' + chance);

  			console.log("1st IF  ...  chances left :" + chance);

   			if (stage == 1 && asked.length == 2 && chance == 3) { //at least one good answer in stage 1 - promotion to STAGE 2
   				alert("ETAP 2");
   				chance -= 1;
   				$('.chance-lamp-player').eq(0).addClass('wrong');
   				console.log("3rd IF  ...  chances left :" + chance);
   				stage = 2;

   				return stage2();
   			}
   			else if (stage == 2 && chance == 3) { //1st wrong answer STAGE 2
   				chance -= 1;
   				$('.chance-lamp-player').eq(0).addClass('wrong');
   				console.log("4th IF ST2 CH3 ...  chances left :" + chance);
   				stage = 2;

   				return stage2();
   			}
   			else if (stage == 2 && chance == 2) { // STAGE 2
   				chance -= 1;
   				$('.chance-lamp-player').eq(1).addClass('wrong');
   				console.log("5th IF ST2 CH2 ...  chances left :" + chance);
   				stage = 2;

                return stage2();
   			}
   			else if (stage == 2 && chance == 1) { //3rd wrong answer in STAGE2 - GAMEOVER
                chance -= 1;
                $('.chance-lamp-player').eq(2).addClass('wrong');
                console.log("4th IF  ...  chances left :" + chance);
   				alert("game over");
   				var delay = 5000;
                setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);

   				return false
   			}
   			else if (stage == 3 && chance == 3){
   			    console.log("wrong pierwsza w finale");
   			    $('.chance-lamp-player').eq(0).addClass('wrong');
   			    chance -= 1;
   			    console.log(chance);
   			    alert("1st WRONG         will call stage 3 line 441");

   			    return stage3()
   			}
   			else if (stage == 3 && chance == 2){
   			    console.log("wrong druga w finale");
   			    $('.chance-lamp-player').eq(1).addClass('wrong');
   			    chance -= 1;
   			    console.log(chance);
   			    alert("2nd WRONG           will call stage 3 line 449");

   			    return stage3();
   			}
   			else if (stage == 3 && chance == 1){
   			    console.log("wrong ostatnia w finale - wypad");
   			    $('.chance-lamp-player').eq(2).addClass('wrong');
   			    chance -= 1;
   			    console.log(chance);
   			    var delay = 5000;
                setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);

   				return false
   			}
   			if (stage == 1 && chance == 3) { //1st wrong answer in STAGE 1
   			    $('.chance-lamp-player').eq(0).addClass('wrong');
                console.log($('.chance-lamp-player').eq(0).addClass('wrong'));
                chance -= 1;

   			    return askAndCheckRepeat(randomQuestion());
   			}

   			else if (stage == 1 && chance == 2) { //2nd wrong answer in STAGE 1 - GAMEOVER
                console.log("2nd IF  ...  chances left :" + chance);
                $('.chance-lamp-player').eq(1).addClass('wrong');
                $('.chance-lamp-player').eq(2).addClass('wrong');
   				alert("game over");
   				var delay = 5000;
   				setTimeout(function(){ window.location.replace("http://127.0.0.1:8000/end/"); }, delay);
   				return false
   			}
   			else if (stage == 3 && chance == 4){
   			    console.log("hacked - losing one question");
   			    chance -= 1;

   			    var $final_npcs = $('.npc').not('.hidden');
   			    var firstNPCpointsToFinal =$final_npcs.eq(0).children().last().children().not('.wrong').length
   			    console.log(firstNPCpointsToFinal);
   			    var secondNPCpointsToFinal =$final_npcs.eq(1).children().last().children().not('.wrong').length
   			    console.log(secondNPCpointsToFinal);
   			    for (var t = 0; t < $final_npcs.length; t ++) {
   			        $final_npcs.eq(t).children().last().children().removeClass('wrong');
                    }
                $npc = $('.npc').not('.hidden');
                alert("idzie to?!");

                $points1 = $('<div class="points" id="first-finalist"></div>');
                $points1.html("<h4>" + firstNPCpointsToFinal + "</h4>" );
                $npc.eq(0).append($points1);

                $points2 = $('<div class="points" id="second-finalist"></div>')
                $points2.html("<h4>" + secondNPCpointsToFinal + "</h4>" );
                $npc.eq(1).append($points2);


   			    return stage3();
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

            stage1();







	 	}) //.ajax done()

}; //main() - getQuestions



}); //document ready