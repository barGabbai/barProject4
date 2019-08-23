$(document).ready(function () {

    $("#Qfinish").hide();
    $("#results").hide();
    $("#centerCircles").hide();


    $('.carousel').carousel()

    $("#sortable").sortable({
        axis: "x"
    });

    $("#sortable").disableSelection();

    $('#myCarousel').on('slide.bs.carousel', function (event) {
        if ($(event.relatedTarget).index() === 0) { // Example if first item
            slideTo(event);
        }
    });


    //$("#myCarousel").swipe({

    //    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

    //        if (direction == 'left') $(this).carousel('next');
    //        if (direction == 'right') $(this).carousel('prev');

    //    },
    //    allowPageScroll: "vertical"

    //});

    Element.prototype.hasClass = function (className) {
        return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);


    };
    $(".carousel-control-next").hide();


    //$(".carousel-control-prev").hide();

    var totalItems = $('.item').length;
    var currentIndex = $('div.active').index() + 1;
    $('#carouselExampleControls').on('slid.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.num').html('' + currentIndex + '/' + totalItems + '');

        if (currentIndex == 1) {
            $(".siteInto").find(".questionsHeadQ").html("שאלה 1");
            $(".siteInto").find("#qInstQ").html("אילו מהקטגוריות הבאות היא החשובה ביותר עבורך?");
            $(".text-center").find("#qInstSpan").html("לחץ על התשובה הרלוונטית.");
            $(".carousel-control-prev").show();
            $(".carousel-control-next").hide();

            if ($('#Qfinish').is(':visible')) {
                $("#Qfinish").show();
            }
            else {
                $("#Qfinish").hide();
            }
        }

        if (currentIndex == 2) {
            $(".siteInto").find(".questionsHeadQ").html("שאלה 2");
            $(".siteInto").find("#qInstQ").html("גרור את הסמן בהתאם <b>למצבך הנוכחי</b> בכל אחד מהתחומים הבאים:");
            $(".text-center").find("#qInstSpan").html("");

            $(".carousel-control-next").show();
            $(".carousel-control-prev").show();

        }

        if (currentIndex == 3) {
            $(".siteInto").find(".questionsHeadQ").html("שאלה 3");
            $(".siteInto").find("#qInstQ").html("כשאני בהתלבטות, אני מעדיף לבקש עזרה מ...");
            $(".text-center").find("#qInstSpan").html("לחץ על התשובה הרלוונטית עבורך.");

            $(".carousel-control-next").show();
            $(".carousel-control-prev").show();

        }

        if (currentIndex == 4) {
            $(".siteInto").find(".questionsHeadQ").html("שאלה 4");
            $(".siteInto").find("#qInstQ").html("סמן את <b>שביעות רצונך</b> ממצבך הנוכחי בתחומים הבאים:");
            $(".text-center").find("#qInstSpan").html("");

            $(".carousel-control-next").show();
            $(".carousel-control-prev").show();

        }

        if (currentIndex == 5) {
            $(".siteInto").find(".questionsHeadQ").html("שאלה 5");
            $(".siteInto").find("#qInstQ").html("באיזו מידה אתה מרגיש שאתה יודע מהן הזכויות המגיעות לך כצעיר בישראל?");
            $(".text-center").find("#qInstSpan").html("לחץ על התשובה הרלוונטית עבורך.");
            $(".carousel-control-next").show();
            $(".carousel-control-prev").show();
        }

        if (currentIndex == 6) {
            $(".siteInto").find(".questionsHeadQ").html("שאלה 6");
            $(".siteInto").find("#qInstQ").html("לחץ על הארגונים/אתרים שאתה מכיר מתוך הרשימה שלפניך.");
            $(".text-center").find("#qInstSpan").html("");

            $(".carousel-control-prev").hide();
            $(".carousel-control-next").show();
        }
    });


    $("#workImgQ1").click(function () {
        $("#workImgQ1").css('opacity', '0');
        $("#friendsImgQ1").css('opacity', '1');
        $("#eduImgQ1").css('opacity', '1');
        $("#familyImgQ1").css('opacity', '1');

        $("#workSpanQ1").css('font-weight', 'bold');
        $("#friendsSpanQ1").css('font-weight', 'normal');
        $("#eduSpanQ1").css('font-weight', 'normal');
        $("#familySpanQ1").css('font-weight', 'normal');
    });

    $("#friendsImgQ1").click(function () {
        $("#friendsImgQ1").css('opacity', '0');
        $("#workImgQ1").css('opacity', '1');
        $("#eduImgQ1").css('opacity', '1');
        $("#familyImgQ1").css('opacity', '1');

        $("#friendsSpanQ1").css('font-weight', 'bold');
        $("#workSpanQ1").css('font-weight', 'normal');
        $("#eduSpanQ1").css('font-weight', 'normal');
        $("#familySpanQ1").css('font-weight', 'normal');
    });

    $("#eduImgQ1").click(function () {
        $("#eduImgQ1").css('opacity', '0');
        $("#workImgQ1").css('opacity', '1');
        $("#friendsImgQ1").css('opacity', '1');
        $("#familyImgQ1").css('opacity', '1');

        $("#eduSpanQ1").css('font-weight', 'bold');
        $("#workSpanQ1").css('font-weight', 'normal');
        $("#friendsSpanQ1").css('font-weight', 'normal');
        $("#familySpanQ1").css('font-weight', 'normal');
    });

    $("#familyImgQ1").click(function () {
        $("#familyImgQ1").css('opacity', '0');
        $("#workImgQ1").css('opacity', '1');
        $("#friendsImgQ1").css('opacity', '1');
        $("#eduImgQ1").css('opacity', '1');

        $("#familySpanQ1").css('font-weight', 'bold');
        $("#workSpanQ1").css('font-weight', 'normal');
        $("#friendsSpanQ1").css('font-weight', 'normal');
        $("#eduSpanQ1").css('font-weight', 'normal');
    });


    $("#managerImgQ2").click(function () {
        $("#managerImgQ2").css('opacity', '0');
        $("#familyImgQ2").css('opacity', '1');
        $("#friendImgQ2").css('opacity', '1');
        $("#nobodyImgQ2").css('opacity', '1');

        $("#teacherSpanQ2").css('font-weight', 'bold');
        $("#familySpanQ2").css('font-weight', 'normal');
        $("#friendSpanQ2").css('font-weight', 'normal');
        $("#nobodySpanQ2").css('font-weight', 'normal');
    });

    $("#familyImgQ2").click(function () {
        $("#familyImgQ2").css('opacity', '0');
        $("#managerImgQ2").css('opacity', '1');
        $("#friendImgQ2").css('opacity', '1');
        $("#nobodyImgQ2").css('opacity', '1');

        $("#familySpanQ2").css('font-weight', 'bold');
        $("#teacherSpanQ2").css('font-weight', 'normal');
        $("#friendSpanQ2").css('font-weight', 'normal');
        $("#nobodySpanQ2").css('font-weight', 'normal');
    });

    $("#friendImgQ2").click(function () {
        $("#friendImgQ2").css('opacity', '0');
        $("#managerImgQ2").css('opacity', '1');
        $("#familyImgQ2").css('opacity', '1');
        $("#nobodyImgQ2").css('opacity', '1');

        $("#friendSpanQ2").css('font-weight', 'bold');
        $("#teacherSpanQ2").css('font-weight', 'normal');
        $("#familySpanQ2").css('font-weight', 'normal');
        $("#nobodySpanQ2").css('font-weight', 'normal');
    });

    $("#nobodyImgQ2").click(function () {
        $("#nobodyImgQ2").css('opacity', '0');
        $("#managerImgQ2").css('opacity', '1');
        $("#familyImgQ2").css('opacity', '1');
        $("#friendImgQ2").css('opacity', '1');

        $("#nobodySpanQ2").css('font-weight', 'bold');
        $("#teacherSpanQ2").css('font-weight', 'normal');
        $("#friendSpanQ2").css('font-weight', 'normal');
        $("#familySpanQ2").css('font-weight', 'normal');
    });



    $("#noSpanQ4").click(function () {
        if ($(window).width() > 500) {
            $("#noSpanQ4").css('background-color', '#fca78d');
            $("#littleSpanQ4").css('background-color', 'lightgrey');
            $("#yesSpanQ4").css('background-color', 'lightgrey');
            $("#verySpanQ4").css('background-color', 'lightgrey');

            
        }
        else {
            $("#noSpanQ4").css('background-color', 'transparent');
            $("#noSpan2Q4").css('color', '#E80707');
            $("#littleSpan2Q4").css('color', '#000');
            $("#yesSpan2Q4").css('color', '#000');
            $("#verySpan2Q4").css('color', '#000');
        }
        
        $("#noSpan2Q4").css('font-weight', 'bold');
            $("#littleSpan2Q4").css('font-weight', 'normal');
            $("#yesSpan2Q4").css('font-weight', 'normal');
            $("#verySpan2Q4").css('font-weight', 'normal');
    });

    $("#littleSpanQ4").click(function () {
        if ($(window).width() > 500) {
            $("#littleSpanQ4").css('background-color', 'orange');
            $("#noSpanQ4").css('background-color', 'lightgrey');
            $("#yesSpanQ4").css('background-color', 'lightgrey');
            $("#verySpanQ4").css('background-color', 'lightgrey');
        }

        else {
            $("#littleSpanQ4").css('background-color', 'transparent');
            $("#littleSpan2Q4").css('color', '#E89207');
            $("#noSpan2Q4").css('color', '#000');
            $("#yesSpan2Q4").css('color', '#000');
            $("#verySpan2Q4").css('color', '#000');
        }

        $("#littleSpan2Q4").css('font-weight', 'bold');
        $("#noSpan2Q4").css('font-weight', 'normal');
        $("#yesSpan2Q4").css('font-weight', 'normal');
        $("#verySpan2Q4").css('font-weight', 'normal');
    });

    $("#yesSpanQ4").click(function () {
        if ($(window).width() > 500) {

            $("#yesSpanQ4").css('background-color', '#8ff489');
            $("#noSpanQ4").css('background-color', 'lightgrey');
            $("#littleSpanQ4").css('background-color', 'lightgrey');
            $("#verySpanQ4").css('background-color', 'lightgrey');
        }

        else {
            $("#yesSpanQ4").css('background-color', 'transparent');
            $("#yesSpan2Q4").css('color', '#36C108');
            $("#noSpan2Q4").css('color', '#000');
            $("#littleSpan2Q4").css('color', '#000');
            $("#verySpan2Q4").css('color', '#000');
        }

        $("#yesSpan2Q4").css('font-weight', 'bold');
        $("#noSpan2Q4").css('font-weight', 'normal');
        $("#littleSpan2Q4").css('font-weight', 'normal');
        $("#verySpan2Q4").css('font-weight', 'normal');
    });

    $("#verySpanQ4").click(function () {
        if ($(window).width() > 500) {

            $("#verySpanQ4").css('background-color', '#60c95b');
            $("#noSpanQ4").css('background-color', 'lightgrey');
            $("#littleSpanQ4").css('background-color', 'lightgrey');
            $("#yesSpanQ4").css('background-color', 'lightgrey');
        }

        else {
            $("#verySpanQ4").css('background-color', 'transparent');
            $("#verySpan2Q4").css('color', '#1e7f18');
            $("#noSpanQ4").css('color', '#000');
            $("#littleSpanQ4").css('color', '#000');
            $("#yesSpanQ4").css('color', '#000');
        }

        $("#verySpan2Q4").css('font-weight', 'bold');
        $("#noSpan2Q4").css('font-weight', 'normal');
        $("#littleSpan2Q4").css('font-weight', 'normal');
        $("#yesSpan2Q4").css('font-weight', 'normal');
    });

    $('#youtCenterImgQ5').click(function () {
        $("#youtCenterImgQ5").css('filter', 'grayscale(0%)');
        $("#noSpanQ5").css('font-weight', 'normal');

    });



    $('#colZchutImgQ5').click(function () {
        $("#colZchutImgQ5").css('filter', 'grayscale(0%)');
        $("#noSpanQ5").css('font-weight', 'normal');

    });


    $('#jointImgQ5').click(function () {
        $("#jointImgQ5").css('filter', 'grayscale(0%)');
        $("#noSpanQ5").css('font-weight', 'normal');

    });



    $('#noSpanQ5').click(function () {
        $("#noSpanQ5").css('font-weight', 'bold');
        $("#jointImgQ5").css('filter', 'grayscale(100%)');
        $("#colZchutImgQ5").css('filter', 'grayscale(100%)');
        $("#youtCenterImgQ5").css('filter', 'grayscale(100%)');
    });

    //$('.slider').slider({
    //    min: 1,
    //    max: 5,
    //    value: 3,
    //    step: 1
    //});

    $(".slider").slider({
        min: 1,
        max: 5
    }).slider("pips").slider("float");

    $('#q3SliderEco .ui-slider-label[data-value=1]').text('לא טוב');
    $('#q3SliderEco .ui-slider-label[data-value=5]').text('מעולה');
    $('#q3SliderFam .ui-slider-label[data-value=1]').text('לא טוב');
    $('#q3SliderFam .ui-slider-label[data-value=5]').text('מעולה');
    $('#q3SliderFri .ui-slider-label[data-value=1]').text('לא טוב');
    $('#q3SliderFri .ui-slider-label[data-value=5]').text('מעולה');

    $('#q4SliderWork .ui-slider-label[data-value=1]').text('לא מרוצה');
    $('#q4SliderWork .ui-slider-label[data-value=5]').text('מרוצה מאוד').css("text-align","center");
    $('#q4SliderFam .ui-slider-label[data-value=1]').text('לא מרוצה');
    $('#q4SliderFam .ui-slider-label[data-value=5]').text('מרוצה מאוד');
    $('#q4SliderFri .ui-slider-label[data-value=1]').text('לא מרוצה');
    $('#q4SliderFri .ui-slider-label[data-value=5]').text('מרוצה מאוד');
    $('#q4SliderEdu .ui-slider-label[data-value=1]').text('לא מרוצה');
    $('#q4SliderEdu .ui-slider-label[data-value=5]').text('מרוצה מאוד');

    //מענה על שאלות - משתנים
    var career = 0;
    var friendship = 0;
    var family = 0;

    var q1career = 0;
    var q1friendship = 0;
    var q1family = 0;

    var q2career = 0;
    var q2friendship = 0;
    var q2family = 0;

    var q3career = 0;
    var q3friendship = 0;
    var q3family = 0;

    var q4career = 0;
    var q4friendship = 0;
    var q4family = 0;

    var q5;

    var q6youth;
    var q6colZchut;
    var q6joint;

    //שאלה 1
    $('#workImgQ1').click(function () {
        var careerQ1 = 2;
        var friendshipQ1 = 0;
        var familyQ1 = 0;

        q1career = careerQ1;
        q1friendship = friendshipQ1;
        q1family = familyQ1;

    });

    $('#friendsImgQ1').click(function () {
        var careerQ1 = 0;
        var friendshipQ1 = 2;
        var familyQ1 = 0;

        q1career = careerQ1;
        q1friendship = friendshipQ1;
        q1family = familyQ1;

    });

    $('#eduImgQ1').click(function () {
        var careerQ1 = 2;
        var friendshipQ1 = 0;
        var familyQ1 = 0;

        q1career = careerQ1;
        q1friendship = friendshipQ1;
        q1family = familyQ1;

    });

    $('#familyImgQ1').click(function () {
        var careerQ1 = 0;
        var friendshipQ1 = 0;
        var familyQ1 = 2;

        q1career = careerQ1;
        q1friendship = friendshipQ1;
        q1family = familyQ1;

    });

  

    //שאלה 2
    var q2eco = 1;
    var q2fam = 1;
    var q2fri = 1;

    var q2career = 2;
    var q2family = 2;
    var q2friendship = 2;

    $("#q3SliderEco").slider({
        change: function (event, ui) {
            q2eco = $("#q3SliderEco").slider("value");

            if (q2eco <= 2) {
                q2career = 2;
            }

            if (q2eco == 3) {
                q2career = 1;
            }

            if (q2eco > 3) {
                q2career = 0
            }
        }
    });

    $("#q3SliderFam").slider({
        change: function (event, ui) {
            q2fam = $("#q3SliderFam").slider("value");

            if (q2fam <= 2) {
                q2family = 2;
            }

            if (q2fam == 3) {
                q2family = 1;
            }

            if (q2fam > 3) {
                q2family = 0
            }
        }
    });

    $("#q3SliderFri").slider({
        change: function (event, ui) {
            q2fri = $("#q3SliderFri").slider("value");

            if (q2fri <= 2) {
                q2friendship = 2;
            }

            if (q2fri == 3) {
                q2friendship = 1;
            }

            if (q2fri > 3) {
                q2friendship = 0
            }
        }
    });
    //$('#q3SliderEco').on('slide', function (event, ui) {
    //    q2eco = $("#q3SliderEco").slider("value");

    //    if (q2eco <= 2) {
    //        var careerQ2 = 2;
    //    }

    //    else if (q2eco == 3) {
    //        var careerQ2 = 1;
    //    }

    //    else if (q2eco > 3) {
    //        var careerQ2 = 0;
    //    }

    //    q2career = careerQ2;
    //});

    //$('#q3SliderFam').on('slide', function (event, ui) {
    //    q2fam = $("#q3SliderFam").slider("value");

    //    if (q2fam <= 2) {
    //        var familyQ2 = 2;
    //    }

    //    else if (q2fam == 3) {
    //        var familyQ2 = 1;
    //    }

    //    else if (q2fam > 3) {
    //        var familyQ2 = 0;
    //    }

    //    q2family = familyQ2;
    //});

    //$('#q3SliderFri').on('slide', function (event, ui) {
    //    q2fri = $("#q3SliderFri").slider("value");

    //    if (q2fri <= 2) {
    //        var friendshipQ2 = 2;
    //    }

    //    else if (q2fri == 3) {
    //        var friendshipQ2 = 1;
    //    }

    //    else if (q2fri > 3) {
    //        var friendshipQ2 = 0;
    //    }

    //    q2friendship = friendshipQ2;


    //שאלה 3

    $('#managerImgQ2').click(function () {
        var careerQ3 = 0;
        var friendshipQ3 = 1;
        var familyQ3 = 1;

        q3career = careerQ3;
        q3friendship = friendshipQ3;
        q3family = familyQ3;

    });

    $('#friendsImgQ1').click(function () {
        var careerQ3 = 1;
        var friendshipQ3 = 0;
        var familyQ3 = 1;

        q3career = careerQ3;
        q3friendship = friendshipQ3;
        q3family = familyQ3;

    });

    $('#eduImgQ1').click(function () {
        var careerQ3 = 0;
        var friendshipQ3 = 1;
        var familyQ3 = 1;

        q3career = careerQ3;
        q3friendship = friendshipQ3;
        q3family = familyQ3;

    });

    $('#familyImgQ1').click(function () {
        var careerQ3 = 1;
        var friendshipQ3 = 1;
        var familyQ3 = 0;

        q3career = careerQ3;
        q3friendship = friendshipQ3;
        q3family = familyQ3;

    });

    $('#nobodyImgQ2').click(function () {
        var careerQ3 = 1;
        var friendshipQ3 = 1;
        var familyQ3 = 1;

        q3career = careerQ3;
        q3friendship = friendshipQ3;
        q3family = familyQ3;
    });

    //שאלה 4

    var q4eco = 1;
    var q4fam = 1;
    var q4fri = 1;

    var q4career = 2;
    var q4family = 2;
    var q4friendship = 2;

    $("#q4SliderWork").slider({
        change: function (event, ui) {
            q4eco = $("#q4SliderWork").slider("value");

            if (q4eco <= 2) {
                q4career = 2;
            }

            if (q4eco == 3) {
                q4career = 1;
            }

            if (q4eco > 3) {
                q4career = 0
            }
        }
    });

    $("#q4SliderFam").slider({
        change: function (event, ui) {
            q4fam = $("#q4SliderFam").slider("value");

            if (q4fam <= 2) {
                q4family = 2;
            }

            if (q4fam == 3) {
                q4family = 1;
            }

            if (q4fam > 3) {
                q4family = 0
            }
        }
    });

    $("#q4SliderFri").slider({
        change: function (event, ui) {
            q4fri = $("#q4SliderFri").slider("value");

            if (q4fri <= 2) {
                q4friendship = 2;
            }

            if (q4fri == 3) {
                q4friendship = 1;
            }

            if (q4fri > 3) {
                q4friendship = 0
            }
        }
    });

    $("#q4SliderEdu").slider({
        change: function (event, ui) {
            q4eco = $("#q4SliderEdu").slider("value");

            if (q4eco <= 2) {
                q4career = 2;
            }

            if (q4eco == 3) {
                q4career = 1;
            }

            if (q4eco > 3) {
                q4career = 0
            }
        }
    });


    //שאלה 5
    $('#noSpanQ4').click(function () {
        var q5 = "כלל לא";
    });

    $('#littleSpanQ4').click(function () {
        var q5 = "במידה מועטה";
    });

    $('#yesSpanQ4').click(function () {
        var q5 = "במידה רבה";
    });

    $('#verySpanQ4').click(function () {
        var q5 = "במידה רבה מאוד";

        $("#Qfinish").show();

    });

    //שאלה 6
    $('#youtCenterImgQ5').click(function () {
        var q6youth = "מרכז צעירים";

        $("#Qfinish").show();

    });

    $('#colZchutImgQ5').click(function () {
        var q6colZchut = "כל-זכות";

        $("#Qfinish").show();

    });

    $('#jointImgQ5').click(function () {
        var q6joint = "ג'וינט אשלים";

        $("#Qfinish").show();

    });

    $('#noSpanQ5').click(function () {
        var q6joint = "";
        var q6colZchut = "";
        var q6youth = "";

        $("#Qfinish").show();

    });

    $("#Qfinish").click(function () {
        $("#results").show();
        $("#centerCircles").show();

        $("#carouselExampleControls").hide();

        $(".siteInto").find(".questionsHeadQ").html("תודה!");
        $(".siteInto").find("#qInstQ").html("מצוין! עכשיו שאנחנו מכירים אותך יותר, נוכל להכווין אותך...<br/><b>אנו ממליצים לך לבדוק את העמודים הבאים...</b>");

        //alert(q4family);

        //if (q2eco == 0) {
        //    q2career += 2;
        //}

        //if (q2fri == 0) {
        //    q2friendship += 2;
        //}

        //if (q2fam == 0) {
        //    q2family += 2;
        //}


        //if (q4eco == 0) {
        //    q4career += 2;
        //}

        //if (q4fri == 0) {
        //    q4friendship += 2;
        //}

        //if (q4fam == 0) {
        //    q4family += 2;
        //}

        //alert(q4family);


        career = (parseInt(q1career, "10") + parseInt(q2career, "10") + parseInt(q3career, "10") + parseInt(q4career, "10"));
        friendship = (parseInt(q1friendship, "10") + parseInt(q2friendship, "10") + parseInt(q3friendship, "10") + parseInt(q4friendship, "10"));
        family = (parseInt(q1family, "10") + parseInt(q2family, "10") + parseInt(q3family,"10") + parseInt(q4family,"10"));

        if ((career >= friendship) && (career >= family)) {
            $("#firstChoice").find("span").html("קריירה");
            $("#firstChoice").addClass("ChoiceCareer");

            $("#firstChoice").removeClass("ChoiceFriendship");
            $("#firstChoice").removeClass("ChoiceFamily");

            if (friendship >= family) {
                $("#secondChoice").find("span").html("חברה");
                $("#thirdChoice").find("span").html("משפחה");

                $("#secondChoice").addClass("ChoiceFriendship");
                $("#thirdChoice").addClass("ChoiceFamily");

                $("#secondChoice").removeClass("ChoiceFamily");
                $("#thirdChoice").removeClass("ChoiceFriendship");
            }

            else {
                $("#secondChoice").find("span").html("משפחה");
                $("#thirdChoice").find("span").html("חברה");

                $("#secondChoice").addClass("ChoiceFamily");
                $("#thirdChoice").addClass("ChoiceFriendship");

                $("#secondChoice").removeClass("ChoiceFriendship");
                $("#thirdChoice").removeClass("ChoiceFamily");
            }
        }

        else if ((friendship >= career) && (friendship >= family)) {
            $("#firstChoice").find("span").html("חברה");
            $("#firstChoice").addClass("ChoiceFriendship");

            $("#firstChoice").removeClass("ChoiceCareer");
            $("#firstChoice").removeClass("ChoiceFamily");

            if (career >= family) {
                $("#secondChoice").find("span").html("קריירה");
                $("#thirdChoice").find("span").html("משפחה");

                $("#secondChoice").addClass("ChoiceCareer");
                $("#thirdChoice").addClass("ChoiceFamily");

                $("#secondChoice").removeClass("ChoiceFamily");
                $("#thirdChoice").removeClass("ChoiceCareer");

            }

            else {
                $("#secondChoice").find("span").html("משפחה");
                $("#thirdChoice").find("span").html("קריירה");

                $("#secondChoice").addClass("ChoiceFamily");
                $("#thirdChoice").addClass("ChoiceCareer");

                $("#secondChoice").removeClass("ChoiceCareer");
                $("#thirdChoice").removeClass("ChoiceFamily");
            }
        }

        else if ((family >= career) && (family >= friendship)) {
            $("#firstChoice").find("span").html("משפחה");
            $("#firstChoice").addClass("ChoiceFamily");

            $("#firstChoice").removeClass("ChoiceCareer");
            $("#firstChoice").removeClass("ChoiceFriendship");

            if (career >= friendship) {
                $("#secondChoice").find("span").html("קריירה");
                $("#thirdChoice").find("span").html("חברה");

                $("#secondChoice").addClass("ChoiceCareer");
                $("#thirdChoice").addClass("ChoiceFriendship");

                $("#secondChoice").removeClass("ChoiceFriendship");
                $("#thirdChoice").removeClass("ChoiceCareer");
            }

            else {
                $("#secondChoice").find("span").html("חברה");
                $("#thirdChoice").find("span").html("קריירה");

                $("#secondChoice").addClass("ChoiceFriendship");
                $("#thirdChoice").addClass("ChoiceCareer");

                $("#secondChoice").removeClass("ChoiceCareer");
                $("#thirdChoice").removeClass("ChoiceFriendship");
            }
        }

    });

    $('#thirdChoice').click(function () {
        if ($(this).hasClass('ChoiceCareer')) {
            window.location = 'career.html';
        }

        if ($(this).hasClass('ChoiceFriendship')) {
            window.location = 'friendship.html';
        }

        if ($(this).hasClass('ChoiceFamily')) {
            window.location = 'family.html';
        }
    });

    $('#secondChoice').click(function () {
        if ($(this).hasClass('ChoiceCareer')) {
            window.location = 'career.html';
        }

        if ($(this).hasClass('ChoiceFriendship')) {
            window.location = 'friendship.html';
        }

        if ($(this).hasClass('ChoiceFamily')) {
            window.location = 'family.html';
        }

    });

    $('#firstChoice').click(function () {
        if ($(this).hasClass('ChoiceCareer')) {
            window.location = 'career.html';
        }

        if ($(this).hasClass('ChoiceFriendship')) {
            window.location = 'friendship.html';
        }

        if ($(this).hasClass('ChoiceFamily')) {
            window.location = 'family.html';
        }

    });
});