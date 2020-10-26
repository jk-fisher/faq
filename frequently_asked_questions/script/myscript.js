$(document).ready(function () {
    $.getJSON("/data.json", function (data) {
        $.each(data.rows, function (key, value) {
            let question = $('<button class="question-btn"></button>')
                .html(value.title + '<i class="fas fa-caret-down"></i>')
                .appendTo(document.body)
                .bind('click', function () {
                    
                    const $answer = $(this).next(".answer-content");

                    if ($answer.hasClass("active")) {

                        $answer.removeClass("active");
                        $(this).html(value.title + '<i class="fas fa-caret-down"></i>') //button

                        
                    } else {
                        $('.answer-content').removeClass('active')
                        $answer.siblings('.question-btn').find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
                        $answer.addClass("active");
                        $(this).html(value.title + '<i class="fas fa-caret-up"></i>') //button

                    }

                });
            $('#faq-data').append(question);

            let answer = $('<p class="answer-content"></p>')
                .text(value.content)
                .appendTo(document.body)
            $('#faq-data').append(answer);

        })
    })
})
