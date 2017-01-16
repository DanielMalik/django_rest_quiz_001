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
                console.log(i);
                $quiz = $('#query').detach();
                console.log(json.results[i]);

                var $thisQuestion = $("<p>");
                $thisQuestion.html("<strong>" + json.results[i].query + "</strong>");
                $quiz.append($thisQuestion);
                $('#media').next().after($quiz);



            


                }
            }
        );

    };

console.log('before');

main();

});



