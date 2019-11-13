$(document).ready(function() {
    $(".card_1").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_1_div").offset().top},
            'slow');
    });

    $(".card_2").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_2_div").offset().top},
            'slow');
    });

    $(".card_3").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_3_div").offset().top},
            'slow');
    });

    $(".card_4").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_4_div").offset().top},
            'slow');
    });

    $(".card_5").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_5_div").offset().top},
            'slow');
    });
})