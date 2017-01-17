$(document).ready(function () {
console.log("jQuery OK");

function main() {

    $.ajax(
        {
            url: "http://127.0.0.1:8000/questions/"
        }
    )
        .done(
        function (json) {
            asked = [];
            for (var i = 0; i < (json.results.length - 1); i ++) {


                console.log(json.results.length - 1);

                k = Math.floor((Math.random() * (json.results.length - 1)) + 1); 
                console.log(k);

                
                console.log("teraz w asked:" + asked);
                if ($.inArray(k, asked) != -1) {

                    k = Math.floor((Math.random() * (json.results.length - 1)) + 1); 

                } if ($.inArray(k, asked) == -1) {
                    var $losed = json.results[k]
                    console.log("wylosowano" + $losed);

                    if (json.results[k].media != null) {

                        console.log(this);



                        var $media = $('#media')
                        var $audio = $('<audio id="dynamic-audio" type="audio/mpeg">') || new Audio();
                        var $play = $('<button id="play-it" class="btn btn-danger">');
                        $audio.attr('src', json.results[i].media);
                        $media.append($audio);
                        $media.append($play);

                        var $quiz = $('#query').detach();
                        console.log(json.results[k]);

                        var $thisQuestion = $("<p>");
                        $thisQuestion.html("<strong>" + json.results[k].query + "</strong>");
                        $quiz.append($thisQuestion);
                        $('#question').append($quiz);

                        var $playButton = $('#play-it');
                        console.log($playButton);
                        var $audioFile = $('audio');
                        // $audioFile.on("canplay",function(){
                        // $("#length").text("Duration:" + audioFile.duration + " seconds");
                        // $("#source").text("Source:" + audioFile.src);
                        // $("#status").text("Status: Ready to play").css("color","green");
                        // });

                        $playButton.click(function() {
                            console.log($audioFile);
                            
                            $audioFile[0].play();
                            
                        });
                        asked.push(k);

                        }
                    }

                else {

                console.log(i);
                var $quiz = $('#query').detach();
                console.log(json.results[k]);

                var $thisQuestion = $("<p>");
                $thisQuestion.html("<strong>" + json.results[k].query + "</strong>");
                $quiz.append($thisQuestion);
                $('#question').append($quiz);

                
                }
                
                var $answer = $('#answer-input');
                console.log($answer);
                var $answerButton = $('#answer-butt');
                console.log($answerButton);

                $answerButton.on("submit", function(e) {

                    console.log($losed.answer);

                    if ($answer.val() == $losed.answer) {
                        console.log(ok);
                    }

                });

            


                }
            }
        );

    };

console.log('before');

main();

});

