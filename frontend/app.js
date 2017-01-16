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
            for (var i = 0; i < json.results.length; i ++) {

                if (json.results[i].media != null) {
                    var $media = $('#media')
                    var $audio = $('<audio id="dynamic-audio">') || new Audio();
                    var $play = $('<button id="play-it" class="btn btn-danger">');
                    $audio.attr('src', json.results[i].media);
                    $media.append($audio);
                    $media.append($play);

                    var $quiz = $('#query').detach();
                    console.log(json.results[i]);

                    var $thisQuestion = $("<p>");
                    $thisQuestion.html("<strong>" + json.results[i].query + "</strong>");
                    $quiz.append($thisQuestion);
                    $('#question').append($quiz);

                    var $audioFile = $('#play-it');
                    $audioFile.on("canplay",function(){
                    $("#length").text("Duration:" + audioFile.duration + " seconds");
                    $("#source").text("Source:" + audioFile.src);
                    $("#status").text("Status: Ready to play").css("color","green");
                    });

                    $('#play-it').on("click", function () {
                        
                        $('audio').play();
                        
                    });


                }

                else {

                console.log(i);
                var $quiz = $('#query').detach();
                console.log(json.results[i]);

                var $thisQuestion = $("<p>");
                $thisQuestion.html("<strong>" + json.results[i].query + "</strong>");
                $quiz.append($thisQuestion);
                $('#question').append($quiz);

                
                }
                




            


                }
            }
        );

    };

console.log('before');

main();

});



