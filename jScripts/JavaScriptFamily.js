
$(document).ready(function () {

    $("#containerOfSite").fitVids();


    if ($(window).width() > 720) {
        if ($('#back-to-top').length) {
            var scrollTrigger = 100, //px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });

        }
    }

    else {

        $('#back-to-top').removeClass('show');


    }

    $('#contactInfo').hide();

    //$('#contactContainer2').hide();
    //$('#contactContainer').hide();
    $('footer').show();

    var offsetHelp = $('#introAbout').outerHeight() + 170;
    var offsetKnow = $('#introAbout').outerHeight() + 350;


    $("#img1InnerNav2-3").click(function () {
        if ($(window).height() < 750) {

            $('html, body').animate({
                scrollTop: $("#dykFamily").position().top - offsetHelp
            }, 700);
        }

        else {
            $('html, body').animate({
                scrollTop: $("#dykFamily").position().top - offsetKnow
            }, 700);
        }

        $("#img1InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

        $("#img2InnerNav2-3").css('opacity', '1');
    });

    $("#img2InnerNav2-3").click(function () {
        $('html, body').animate({
            scrollTop: $("#assistanceFamily").position().top - offsetHelp
        }, 700);
        $("#img2InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

        $("#img1InnerNav2-3").css('opacity', '1');
    });


    var topOfassistanceFamilyeDiv;
    var topOfdykFamilyyDiv;


    if ($(window).width() > 750) {
         topOfdykFamilyyDiv = $("#dykFamily").offset().top - 620;
         topOfassistanceFamilyeDiv = $("#assistanceFamily").offset().top - 520;

        $(window).scroll(function () {


            if ($(window).scrollTop() > topOfdykFamilyyDiv) { //scrolled past the other div?
                $("#img1InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

                $("#img2InnerNav2-3").css('opacity', '1');
            }

            if ($(window).scrollTop() > topOfassistanceFamilyeDiv) { //scrolled past the other div?
                $("#img2InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

                $("#img1InnerNav2-3").css('opacity', '1');

            }

        });
    }

    else {
         topOfdykFamilyyDiv = $("#dykFamily").offset().top - 300;
         topOfassistanceFamilyeDiv = $("#assistanceFamily").offset().top - 100;

        $(window).scroll(function () {


            if ($(window).scrollTop() > topOfdykFamilyyDiv) { //scrolled past the other div?
                $("#img1InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

                $("#img2InnerNav2-3").css('opacity', '1');
            }

            if ($(window).scrollTop() > topOfassistanceFamilyeDiv) { //scrolled past the other div?
                $("#img2InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

                $("#img1InnerNav2-3").css('opacity', '1');

            }

        });
    }

    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function () {
        if (window.innerWidth > window.innerHeight) {
            $("#introAbout").css("position", "fixed");
            $(".innerPagesNav").css("position", "fixed");
            $(".bgNav").css("position", "fixed");
        }

        else {
            $("#introAbout").css("position", "absolute");
            $(".innerPagesNav").css("position", "absolute");
            $(".bgNav").css("position", "absolute");

        }
    });

    $("#aboutUsLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity","0");
        }
    });

    $("#familyLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity", "1");
        }
    });

    $("#friendshipLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity", "1");
        }
    });

    $("#careerLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity", "1");
        }
    });

    if ($(window).width() < 768) {
        $("#screenFooter").hide();
        $("#screenFooterCareer").hide();

        $("#mobileFooter").show();
    }

    else {
        $("#screenFooter").show();
        $("#screenFooterCareer").show();

        $("#mobileFooter").hide();
        $("#contactM2").hide();
    }


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('[data-toggle="popover"]').popover({
        //trigger: 'focus',
        trigger: 'focus',
        placement:'bottom',
        html: true
    });




    $('.goalsLink').on('click', function () {
        $('.goalsWWA').show();
        $('.howItWorks').hide();
    });

    $('.howItWorksLink').on('click', function () {
        $('.howItWorks').show();
        $('.goalsWWA').hide();
    });

    $('#goalsLink').on('click', function () {
        $('#goals').show();
        $('#howItWorks').hide();
    });

    $('#howItWorksLink').on('click', function () {
        $('#howItWorks').show();
        $('#goals').hide();
    });

    //$(".form-group option").click(function () {
    //    var selText = $(this).text();
    //    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    //});


    $('#exampleFormControlSelect1').on('change', function () {
        if ($(this).find("option:selected").attr("id") == "umElFahem") {
            $('#nameOfOrg').html("ريان مراكز تشغيل- ריאן חברה ערבית");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html('דועאא עזב');
            $('#nameOfAddressOfCenter').html("מרכז ריאן, שכונת אלדהר");
            $('#nameOfphoneNum').html('04-7703250, 052-7709775');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/FANAR.RAYAN/');
        }

        else if ($(this).find("option:selected").attr("id") == "eilat") {
            $('#nameOfOrg').html("מרכז צעירים אילת");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("אורלי מלכה");
            $('#nameOfAddressOfCenter').html("דרך יותם 4, אילת");
            $('#nameOfphoneNum').html('08-6367594');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/EilatYouthCenter/');
        }

        else if ($(this).find("option:selected").attr("id") == "efrat") {
            $('#nameOfOrg').html("מטה צעירים אפרת");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("ליאורה ציון-תאיר");
            $('#nameOfAddressOfCenter').html("פיטום הקטורת 1 ב', אפרת");
            $('#nameOfphoneNum').html('02-9939453, 054-7230075');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:bodner@efrat.muni.il');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/%D7%9E%D7%98%D7%94-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A4%D7%A8%D7%AA-339371922889349/');
        }

        else if ($(this).find("option:selected").attr("id") == "beerSheva") {
            $('#nameOfOrg').html("סטארט אפ - הזדמנויות לצעירים");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("נועה פילד");
            $('#nameOfAddressOfCenter').html('השלום 16, באר שבע');
            $('#nameOfphoneNum').html('08-6650840, 050-8783870');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/MERKAZSTARTUP/');
        }

        else if ($(this).find("option:selected").attr("id") == "beitJan") {
            $('#nameOfOrg').html("מרכז הצעירים שלי");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("מיה קבלאן");
            $('#nameOfAddressOfCenter').html("בניין הרשות המקומית, בית ג'אן");
            $('#nameOfphoneNum').html('052-9252808, 052-3068888');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:samimas69@gmail.com');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/groups/1518355791796834/');
        }

        else if ($(this).find("option:selected").attr("id") == "bneiShimon") {
            $('#nameOfOrg').html("");
            $('#contactInfo').show();
        }

        else if ($(this).find("option:selected").attr("id") == "hadera") {
            $('#nameOfOrg').html("טורבינה מרכז צעירים חדרה");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("שירה לברון");
            $('#nameOfAddressOfCenter').html('הנשיא 15, חדרה');
            $('#nameOfphoneNum').html('04-6331787, 054-6565095');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:haderay@gmail.com');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/%D7%98%D7%95%D7%A8%D7%91%D7%99%D7%A0%D7%94-%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A8%D7%94-653718471351501/');
        }

        else if ($(this).find("option:selected").attr("id") == "holon") {
            $('#nameOfOrg').html("מרכז צעירים חולון");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("עדי קרספי");
            $('#nameOfAddressOfCenter').html('אליעזר בן יהודה 18, קומה 4, חולון');
            $('#nameOfphoneNum').html('03-6366090');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/tzeirim.holon/');
        }

        else if ($(this).find("option:selected").attr("id") == "tiratCarmel") {
            $('#nameOfOrg').html("מרכז צעירים והון אנושי-טירת כרמל");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("אביב ארם");
            $('#nameOfAddressOfCenter').html('עזרא לניאדו 1, טירת כרמל');
            $('#nameOfphoneNum').html('04-8581406, 04-8570271');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/tzeirimtiratcarmel/');
        }

        else if ($(this).find("option:selected").attr("id") == "yokneam") {
            $('#nameOfOrg').html("מרכז צעירים יקנעם");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("מיכל בירן זקצר");
            $('#nameOfAddressOfCenter').html('הצאלים 1, יקנעם');
            $('#nameOfphoneNum').html('04-9591236, 052-8753266');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/merkazyoqneam/');
        }

        else if ($(this).find("option:selected").attr("id") == "jerusalem") {
            $('#nameOfOrg').html("מרכז צעירים ירושלים");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("רייצ'ל ענקי");
            $('#nameOfAddressOfCenter').html('שבטי ישראל 22, ירושלים');
            $('#nameOfphoneNum').html('*8162, 052-6141419');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:maydale@young-jerusalem.org.il');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/youngJLM/');
        }

        else if ($(this).find("option:selected").attr("id") == "netanya") {
            $('#nameOfOrg').html("הגג - בית הצעירים בנתניה");
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("הילה לוי קולטוצ'ניק");
            $('#nameOfAddressOfCenter').html('שטמפפר 4, נתניה');
            $('#nameOfphoneNum').html('09-9669987, 09-8321460');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:info@hagag.org');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/hagag.netanya/');
        }

        else if ($(this).find("option:selected").attr("id") == "aco") {
            $('#nameOfOrg').html('מרכז צעירים ולהב"ה עכו');
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html('שלומית יוסף');
            $('#nameOfAddressOfCenter').html('מרכז צעירים ולהב"ה, עכו');
            $('#nameOfphoneNum').html('04-9917477, 054-7384803');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:tzeirimacco@gmail.com');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/tzeirim.acco/');
        }

        else if ($(this).find("option:selected").attr("id") == "afula") {
            $('#nameOfOrg').html('מרכז צעירים עפולה');
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html('רווית זהרי');
            $('#nameOfAddressOfCenter').html('דרך חטיבה תשע 15, עפולה');
            $('#nameOfphoneNum').html('04-6484284, 054-6386890');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:mazkirut@yaic.org.il');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/pages/%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%A2%D7%A4%D7%95%D7%9C%D7%94/1501851256720492');
        }

        else if ($(this).find("option:selected").attr("id") == "pardesHana") {
            $('#nameOfOrg').html('"הפרדס" - מרכז הצעירים פרדס חנה כרכור');
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html("אלה דור-און");
            $('#nameOfAddressOfCenter').html("כורש 7, פרדס חנה-כרכור");
            $('#nameOfphoneNum').html('077-5524074, 053-7370659');
            //$('#emailImg').hide();
            $('#emailAddress').hide();
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/hapardes/');
        }

        else if ($(this).find("option:selected").attr("id") == "rlz") {
            $('#nameOfOrg').html('מרכז צעירים ראשון לציון');
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html('שירי דלל');
            $('#nameOfAddressOfCenter').html('יבניאלי 4, ראשון לציון');
            $('#nameOfphoneNum').html('03-6042598');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:merkazrishon@gmail.com');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/merkazrishon/');
        }

        else if ($(this).find("option:selected").attr("id") == "rehovot") {
            $('#nameOfOrg').html('הפלטפורמה');
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html('טובה יערי');
            $('#nameOfAddressOfCenter').html('רמז 80, רחובות');
            $('#nameOfphoneNum').html('08-9314806');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:info@haplatforma.org.il');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/HaplatformaRehovot/');
        }

        else if ($(this).find("option:selected").attr("id") == "shaarHanegev") {
            $('#nameOfOrg').html('מרכז צעירים שער הנגב');
            $('#contactInfo').show();

            $('#nameOfOperatingPerson').html('מזי כהן');
            $('#nameOfAddressOfCenter').html('מכללת ספיר');
            $('#nameOfphoneNum').html('077-9802237');
            //$('#emailImg').show();
            $('#emailAddress').show();
            $('#linkToEmail').attr('href', 'mailto:youngs@sng.org.il');
            $('#linkToFacebook').attr('href', 'https://www.facebook.com/tzeirimsng/');
        }
    });

    $('#exampleFormControlSelect2').on('change', function () {
        if ($(this).find("option:selected").attr("id") == "umElFahemM") {
            $('#nameOfOrgM').html("ريان مراكز تشغيل- ריאן חברה ערבית");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html('דועאא עזב');
            $('#nameOfAddressOfCenterM').html("מרכז ריאן, שכונת אלדהר");
            $('#nameOfphoneNumM').html('04-7703250, 052-7709775');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/FANAR.RAYAN/');
        }

        else if ($(this).find("option:selected").attr("id") == "eilatM") {
            $('#nameOfOrgM').html("מרכז צעירים אילת");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("אורלי מלכה");
            $('#nameOfAddressOfCenterM').html("דרך יותם 4, אילת");
            $('#nameOfphoneNumM').html('08-6367594');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/EilatYouthCenter/');
        }

        else if ($(this).find("option:selected").attr("id") == "efratM") {
            $('#nameOfOrgM').html("מטה צעירים אפרת");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("ליאורה ציון-תאיר");
            $('#nameOfAddressOfCenterM').html("פיטום הקטורת 1 ב', אפרת");
            $('#nameOfphoneNumM').html('02-9939453, 054-7230075');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:bodner@efrat.muni.il');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/%D7%9E%D7%98%D7%94-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A4%D7%A8%D7%AA-339371922889349/');
        }

        else if ($(this).find("option:selected").attr("id") == "beerShevaM") {
            $('#nameOfOrgM').html("סטארט אפ - הזדמנויות לצעירים");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("נועה פילד");
            $('#nameOfAddressOfCenterM').html('השלום 16, באר שבע');
            $('#nameOfphoneNumM').html('08-6650840, 050-8783870');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/MERKAZSTARTUP/');
        }

        else if ($(this).find("option:selected").attr("id") == "beitJanM") {
            $('#nameOfOrgM').html("מרכז הצעירים שלי");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("מיה קבלאן");
            $('#nameOfAddressOfCenterM').html("בניין הרשות המקומית, בית ג'אן");
            $('#nameOfphoneNumM').html('052-9252808, 052-3068888');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:samimas69@gmail.com');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/groups/1518355791796834/');
        }

        else if ($(this).find("option:selected").attr("id") == "bneiShimonM") {
            $('#nameOfOrgM').html("");
            $('#contactInfoM').show();
        }

        else if ($(this).find("option:selected").attr("id") == "haderaM") {
            $('#nameOfOrgM').html("טורבינה מרכז צעירים חדרה");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("שירה לברון");
            $('#nameOfAddressOfCenterM').html('הנשיא 15, חדרה');
            $('#nameOfphoneNumM').html('04-6331787, 054-6565095');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:haderay@gmail.com');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/%D7%98%D7%95%D7%A8%D7%91%D7%99%D7%A0%D7%94-%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A8%D7%94-653718471351501/');
        }

        else if ($(this).find("option:selected").attr("id") == "holonM") {
            $('#nameOfOrgM').html("מרכז צעירים חולון");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("עדי קרספי");
            $('#nameOfAddressOfCenterM').html('אליעזר בן יהודה 18, קומה 4, חולון');
            $('#nameOfphoneNumM').html('03-6366090');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/tzeirim.holon/');
        }

        else if ($(this).find("option:selected").attr("id") == "tiratCarmelM") {
            $('#nameOfOrgM').html("מרכז צעירים והון אנושי-טירת כרמל");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("אביב ארם");
            $('#nameOfAddressOfCenterM').html('עזרא לניאדו 1, טירת כרמל');
            $('#nameOfphoneNumM').html('04-8581406, 04-8570271');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/tzeirimtiratcarmel/');
        }

        else if ($(this).find("option:selected").attr("id") == "yokneamM") {
            $('#nameOfOrgM').html("מרכז צעירים יקנעם");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("מיכל בירן זקצר");
            $('#nameOfAddressOfCenterM').html('הצאלים 1, יקנעם');
            $('#nameOfphoneNumM').html('04-9591236, 052-8753266');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/merkazyoqneam/');
        }

        else if ($(this).find("option:selected").attr("id") == "jerusalemM") {
            $('#nameOfOrgM').html("מרכז צעירים ירושלים");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("רייצ'ל ענקי");
            $('#nameOfAddressOfCenterM').html('שבטי ישראל 22, ירושלים');
            $('#nameOfphoneNumM').html('*8162, 052-6141419');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:maydale@young-jerusalem.org.il');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/youngJLM/');
        }

        else if ($(this).find("option:selected").attr("id") == "netanyaM") {
            $('#nameOfOrgM').html("הגג - בית הצעירים בנתניה");
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("הילה לוי קולטוצ'ניק");
            $('#nameOfAddressOfCenterM').html('שטמפפר 4, נתניה');
            $('#nameOfphoneNumM').html('09-9669987, 09-8321460');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:info@hagag.org');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/hagag.netanya/');
        }

        else if ($(this).find("option:selected").attr("id") == "acoM") {
            $('#nameOfOrgM').html('מרכז צעירים ולהב"ה עכו');
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html('שלומית יוסף');
            $('#nameOfAddressOfCenterM').html('מרכז צעירים ולהב"ה, עכו');
            $('#nameOfphoneNumM').html('04-9917477, 054-7384803');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:tzeirimacco@gmail.com');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/tzeirim.acco/');
        }

        else if ($(this).find("option:selected").attr("id") == "afulaM") {
            $('#nameOfOrgM').html('מרכז צעירים עפולה');
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html('רווית זהרי');
            $('#nameOfAddressOfCenterM').html('דרך חטיבה תשע 15, עפולה');
            $('#nameOfphoneNumM').html('04-6484284, 054-6386890');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:mazkirut@yaic.org.il');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/pages/%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%A2%D7%A4%D7%95%D7%9C%D7%94/1501851256720492');
        }

        else if ($(this).find("option:selected").attr("id") == "pardesHanaM") {
            $('#nameOfOrgM').html('"הפרדס" - מרכז הצעירים פרדס חנה כרכור');
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html("אלה דור-און");
            $('#nameOfAddressOfCenterM').html("כורש 7, פרדס חנה-כרכור");
            $('#nameOfphoneNumM').html('077-5524074, 053-7370659');
            //$('#emailImg').hide();
            $('#emailAddressM').hide();
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/hapardes/');
        }

        else if ($(this).find("option:selected").attr("id") == "rlzM") {
            $('#nameOfOrgM').html('מרכז צעירים ראשון לציון');
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html('שירי דלל');
            $('#nameOfAddressOfCenterM').html('יבניאלי 4, ראשון לציון');
            $('#nameOfphoneNumM').html('03-6042598');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:merkazrishon@gmail.com');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/merkazrishon/');
        }

        else if ($(this).find("option:selected").attr("id") == "rehovotM") {
            $('#nameOfOrgM').html('הפלטפורמה');
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html('טובה יערי');
            $('#nameOfAddressOfCenterM').html('רמז 80, רחובות');
            $('#nameOfphoneNumM').html('08-9314806');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:info@haplatforma.org.il');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/HaplatformaRehovot/');
        }

        else if ($(this).find("option:selected").attr("id") == "shaarHanegevM") {
            $('#nameOfOrgM').html('מרכז צעירים שער הנגב');
            $('#contactInfoM').show();

            $('#nameOfOperatingPersonM').html('מזי כהן');
            $('#nameOfAddressOfCenterM').html('מכללת ספיר');
            $('#nameOfphoneNumM').html('077-9802237');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM').attr('href', 'mailto:youngs@sng.org.il');
            $('#linkToFacebookM').attr('href', 'https://www.facebook.com/tzeirimsng/');
        }
    });

    $('#exampleFormControlSelect3').on('change', function () {
        if ($(this).find("option:selected").attr("id") == "umElFahemM2") {
            $('#nameOfOrgM2').html("ريان مراكز تشغيل- ריאן חברה ערבית");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html('דועאא עזב');
            $('#nameOfAddressOfCenterM2').html("מרכז ריאן, שכונת אלדהר");
            $('#nameOfphoneNumM2').html('04-7703250, 052-7709775');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/FANAR.RAYAN/');
        }

        else if ($(this).find("option:selected").attr("id") == "eilatM2") {
            $('#nameOfOrgM2').html("מרכז צעירים אילת");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("אורלי מלכה");
            $('#nameOfAddressOfCenterM2').html("דרך יותם 4, אילת");
            $('#nameOfphoneNumM2').html('08-6367594');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/EilatYouthCenter/');
        }

        else if ($(this).find("option:selected").attr("id") == "efratM2") {
            $('#nameOfOrgM2').html("מטה צעירים אפרת");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("ליאורה ציון-תאיר");
            $('#nameOfAddressOfCenterM2').html("פיטום הקטורת 1 ב', אפרת");
            $('#nameOfphoneNumM2').html('02-9939453, 054-7230075');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:bodner@efrat.muni.il');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/%D7%9E%D7%98%D7%94-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A4%D7%A8%D7%AA-339371922889349/');
        }

        else if ($(this).find("option:selected").attr("id") == "beerShevaM2") {
            $('#nameOfOrgM2').html("סטארט אפ - הזדמנויות לצעירים");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("נועה פילד");
            $('#nameOfAddressOfCenterM2').html('השלום 16, באר שבע');
            $('#nameOfphoneNumM2').html('08-6650840, 050-8783870');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/MERKAZSTARTUP/');
        }

        else if ($(this).find("option:selected").attr("id") == "beitJanM2") {
            $('#nameOfOrgM2').html("מרכז הצעירים שלי");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("מיה קבלאן");
            $('#nameOfAddressOfCenterM2').html("בניין הרשות המקומית, בית ג'אן");
            $('#nameOfphoneNumM2').html('052-9252808, 052-3068888');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:samimas69@gmail.com');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/groups/1518355791796834/');
        }

        else if ($(this).find("option:selected").attr("id") == "bneiShimonM2") {
            $('#nameOfOrgM2').html("");
            $('#contactInfoM2').show();
        }

        else if ($(this).find("option:selected").attr("id") == "haderaM2") {
            $('#nameOfOrgM2').html("טורבינה מרכז צעירים חדרה");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("שירה לברון");
            $('#nameOfAddressOfCenterM2').html('הנשיא 15, חדרה');
            $('#nameOfphoneNumM2').html('04-6331787, 054-6565095');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:haderay@gmail.com');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/%D7%98%D7%95%D7%A8%D7%91%D7%99%D7%A0%D7%94-%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A8%D7%94-653718471351501/');
        }

        else if ($(this).find("option:selected").attr("id") == "holonM2") {
            $('#nameOfOrgM2').html("מרכז צעירים חולון");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("עדי קרספי");
            $('#nameOfAddressOfCenterM2').html('אליעזר בן יהודה 18, קומה 4, חולון');
            $('#nameOfphoneNumM2').html('03-6366090');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/tzeirim.holon/');
        }

        else if ($(this).find("option:selected").attr("id") == "tiratCarmelM2") {
            $('#nameOfOrgM2').html("מרכז צעירים והון אנושי-טירת כרמל");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("אביב ארם");
            $('#nameOfAddressOfCenterM2').html('עזרא לניאדו 1, טירת כרמל');
            $('#nameOfphoneNumM2').html('04-8581406, 04-8570271');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/tzeirimtiratcarmel/');
        }

        else if ($(this).find("option:selected").attr("id") == "yokneamM2") {
            $('#nameOfOrgM2').html("מרכז צעירים יקנעם");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("מיכל בירן זקצר");
            $('#nameOfAddressOfCenterM2').html('הצאלים 1, יקנעם');
            $('#nameOfphoneNumM2').html('04-9591236, 052-8753266');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/merkazyoqneam/');
        }

        else if ($(this).find("option:selected").attr("id") == "jerusalemM2") {
            $('#nameOfOrgM2').html("מרכז צעירים ירושלים");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("רייצ'ל ענקי");
            $('#nameOfAddressOfCenterM2').html('שבטי ישראל 22, ירושלים');
            $('#nameOfphoneNumM2').html('*8162, 052-6141419');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:maydale@young-jerusalem.org.il');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/youngJLM/');
        }

        else if ($(this).find("option:selected").attr("id") == "netanyaM2") {
            $('#nameOfOrgM2').html("הגג - בית הצעירים בנתניה");
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("הילה לוי קולטוצ'ניק");
            $('#nameOfAddressOfCenterM2').html('שטמפפר 4, נתניה');
            $('#nameOfphoneNumM2').html('09-9669987, 09-8321460');
            //$('#emailImg').show();
            $('#emailAddressM').show();
            $('#linkToEmailM2').attr('href', 'mailto:info@hagag.org');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/hagag.netanya/');
        }

        else if ($(this).find("option:selected").attr("id") == "acoM2") {
            $('#nameOfOrgM2').html('מרכז צעירים ולהב"ה עכו');
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html('שלומית יוסף');
            $('#nameOfAddressOfCenterM2').html('מרכז צעירים ולהב"ה, עכו');
            $('#nameOfphoneNumM2').html('04-9917477, 054-7384803');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:tzeirimacco@gmail.com');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/tzeirim.acco/');
        }

        else if ($(this).find("option:selected").attr("id") == "afulaM2") {
            $('#nameOfOrgM2').html('מרכז צעירים עפולה');
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html('רווית זהרי');
            $('#nameOfAddressOfCenterM2').html('דרך חטיבה תשע 15, עפולה');
            $('#nameOfphoneNumM2').html('04-6484284, 054-6386890');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:mazkirut@yaic.org.il');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/pages/%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%A2%D7%A4%D7%95%D7%9C%D7%94/1501851256720492');
        }

        else if ($(this).find("option:selected").attr("id") == "pardesHanaM2") {
            $('#nameOfOrgM2').html('"הפרדס" - מרכז הצעירים פרדס חנה כרכור');
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html("אלה דור-און");
            $('#nameOfAddressOfCenterM2').html("כורש 7, פרדס חנה-כרכור");
            $('#nameOfphoneNumM2').html('077-5524074, 053-7370659');
            //$('#emailImg').hide();
            $('#emailAddressM2').hide();
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/hapardes/');
        }

        else if ($(this).find("option:selected").attr("id") == "rlzM2") {
            $('#nameOfOrgM2').html('מרכז צעירים ראשון לציון');
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html('שירי דלל');
            $('#nameOfAddressOfCenterM2').html('יבניאלי 4, ראשון לציון');
            $('#nameOfphoneNumM2').html('03-6042598');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:merkazrishon@gmail.com');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/merkazrishon/');
        }

        else if ($(this).find("option:selected").attr("id") == "rehovotM2") {
            $('#nameOfOrgM2').html('הפלטפורמה');
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html('טובה יערי');
            $('#nameOfAddressOfCenterM2').html('רמז 80, רחובות');
            $('#nameOfphoneNumM2').html('08-9314806');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:info@haplatforma.org.il');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/HaplatformaRehovot/');
        }

        else if ($(this).find("option:selected").attr("id") == "shaarHanegevM2") {
            $('#nameOfOrgM2').html('מרכז צעירים שער הנגב');
            $('#contactInfoM2').show();

            $('#nameOfOperatingPersonM2').html('מזי כהן');
            $('#nameOfAddressOfCenterM2').html('מכללת ספיר');
            $('#nameOfphoneNumM2').html('077-9802237');
            //$('#emailImg').show();
            $('#emailAddressM2').show();
            $('#linkToEmailM2').attr('href', 'mailto:youngs@sng.org.il');
            $('#linkToFacebookM2').attr('href', 'https://www.facebook.com/tzeirimsng/');
        }
    });


    $('#careerNav').on('click', function () {
        $('#careerNav').css('opacity', '0');
        $('#careerSpan').css('font-weight', 'bold');
        $('#careerSpan').css('opacity', '1');

        $('#contactM2').hide();


        $('#friendshipSpan').css('opacity', '0.7');
        $('#familySpan').css('opacity', '0.7');
        $('#aboutSpan').css('opacity', '0.7');

        $('#aboutNav').css('opacity', '1');
        $('#aboutSpan').css('font-weight', 'normal');
        $('#familyNav').css('opacity', '1');
        $('#familySpan').css('font-weight', 'normal');
        $('#friendshipNav').css('opacity', '1');
        $('#friendshipSpan').css('font-weight', 'normal');

        $('.title').html("הקריירה שלנו");
        $('#aboutUsSection').hide();
        $('#aboutMobile').hide();
        $('#familySection').hide();
        $('#friendshipSection').hide();
        $('#careerSection').show();
        $('#careerMobile').show();

        $(".contactLinkInnerPages").css("height", "100px");

    });


    $('#friendshipNav').on('click', function () {
        $('#friendshipNav').css('opacity', '0');
        $('#friendshipSpan').css('font-weight', 'bold');
        $('#friendshipSpan').css('opacity', '1');

        $('#contactM2').hide();


        $('#careerSpan').css('opacity', '0.7');
        $('#familySpan').css('opacity', '0.7');
        $('#aboutSpan').css('opacity', '0.7');

        $('#careerNav').css('opacity', '1');
        $('#careerSpan').css('font-weight', 'normal');
        $('#familyNav').css('opacity', '1');
        $('#familySpan').css('font-weight', 'normal');
        $('#aboutNav').css('opacity', '1');
        $('#aboutSpan').css('font-weight', 'normal');

        $('.title').html("החברים מסביבנו");
        $('#careerSection').hide();
        $('#familySection').hide();
        $('#aboutUsSection').hide();
        $('#careerMobile').hide();
        $('#aboutMobile').hide();
        $('#friendshipSection').show();

        $(".contactLinkInnerPages").css("height", "200px");

    });

    $('#familyNav').on('click', function () {
        $('#familyNav').css('opacity', '0');
        $('#familySpan').css('font-weight', 'bold');
        $('#familySpan').css('opacity', '1');

        $('#contactM2').hide();

        $('#friendshipSpan').css('opacity', '0.7');
        $('#careerSpan').css('opacity', '0.7');
        $('#aboutSpan').css('opacity', '0.7');

        $('#careerNav').css('opacity', '1');
        $('#careerSpan').css('font-weight', 'normal');
        $('#friendshipNav').css('opacity', '1');
        $('#friendshipSpan').css('font-weight', 'normal');
        $('#aboutNav').css('opacity', '1');
        $('#aboutSpan').css('font-weight', 'normal');

        $('.title').html("המשפחה בחיינו");
        $('#careerSection').hide();
        $('#aboutUsSection').hide();
        $('#aboutMobile').hide();

        $('#friendshipSection').hide();
        $('#careerMobile').hide();
        $('#familySection').show();

        $(".contactLinkInnerPages").css("height", "200px");

    });

//    if ($(".title").html() == "קצת עלינו"){
//    $("#aboutNav").css("opacity", "0");
//}

//    if ($(".title").html() == "הקריירה שלנו") {
//        $("#careerNav").css("opacity", "0");
//    }

//    if ($(".title").html() == "המשפחה בחיינו") {
//        $("#familyNav").css("opacity", "0");
//    }

//    if ($(".title").html() == "החברים מסביבנו") {
//        $("#friendshipNav").css("opacity", "0");
//    }

    //$('#aboutNav').on('click', function () {
    //    $('#aboutNav').css('opacity', '0');
    //    $('#aboutSpan').css('font-weight', 'bold');
    //    $('#aboutSpan').css('opacity', '1');

    //    $('#friendshipSpan').css('opacity', '0.7');
    //    $('#familySpan').css('opacity', '0.7');
    //    $('#careerSpan').css('opacity', '0.7');

    //    $('#careerNav').css('opacity', '1');
    //    $('#careerSpan').css('font-weight', 'normal');
    //    $('#familyNav').css('opacity', '1');
    //    $('#familySpan').css('font-weight', 'normal');
    //    $('#friendshipNav').css('opacity', '1');
    //    $('#friendshipSpan').css('font-weight', 'normal');

    //    $('.title').html("קצת עלינו");
    //    $('#careerSection').hide();
    //    $('#familySection').hide();
    //    $('#friendshipSection').hide();
    //    $('#careerMobile').hide();
    //    $('#aboutUsSection').show();
    //    $('#aboutMobile').show();

        //if ($(window).width() < 765) {
        //    $("#contactContainer2").css("visibility","hidden");
        //}

        //else {
        //    $("#contactContainer2").css("display","block");

        //}

    //    $(".contactLinkInnerPages").css("height", "100px");


    $(".contactLinkInnerPages").click(function () {
        $(".contactLinkInnerPages").css("height", "100px");
    });

    $('#img1InnerNav2-1').on('click', function () {
        $('#img1InnerNav2-1').css("opacity", "0");
        $('#span1InnerNav-1').css("font-weight", "bold");
        $('#img1InnerNav2S-1').css("opacity", "1");

        $('#img2InnerNav2-1').css("opacity", "1");
        $('#span2InnerNav-1').css("font-weight", "normal");

    });

    $('#img2InnerNav2-1').on('click', function () {
        $('#img2InnerNav2-1').css("opacity", "0");
        $('#span2InnerNav-1').css("font-weight", "bold");
        $('#img2InnerNav2S-1').css("opacity", "1");

        $('#img1InnerNav2-1').css("opacity", "1");
        $('#span1InnerNav-1').css("font-weight", "normal");


    });

    $('#img1InnerNav2-2').on('click', function () {
        $('#img1InnerNav2-2').css("opacity", "0");
        $('#span1InnerNav-2').css("font-weight", "bold");
        $('#img1InnerNav2S-2').css("opacity", "1");

        $('#img2InnerNav2-2').css("opacity", "1");
        $('#span2InnerNav-2').css("font-weight", "normal");

    });

    $('#img2InnerNav2-2').on('click', function () {
        $('#img2InnerNav2-2').css("opacity", "0");
        $('#span2InnerNav-2').css("font-weight", "bold");
        $('#img2InnerNav2S-2').css("opacity", "1");

        $('#img1InnerNav2-2').css("opacity", "1");
        $('#span1InnerNav-2').css("font-weight", "normal");
    });

    $('#img1InnerNav2-3').on('click', function () {
        $('#img1InnerNav2-3').css("opacity", "0");
        $('#span1InnerNav-3').css("font-weight", "bold");
        $('#img1InnerNav2S-3').css("opacity", "1");

        $('#img2InnerNav2-3').css("opacity", "1");
        $('#span2InnerNav-3').css("font-weight", "normal");

    });

    $('#img2InnerNav2-3').on('click', function () {
        $('#img2InnerNav2-3').css("opacity", "0");
        $('#span2InnerNav-3').css("font-weight", "bold");
        $('#img2InnerNav2S-3').css("opacity", "1");

        $('#img1InnerNav2-3').css("opacity", "1");
        $('#span1InnerNav-3').css("font-weight", "normal");
    });

    $('#img1Nav2').on('click', function () {
        $('#img1Nav2').css("opacity", "0");
        $('#span1Nav2').css("font-weight", "bold");
        $('#img2Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img2Nav2').on('click', function () {
        $('#img2Nav2').css("opacity", "0");
        $('#span2Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img3Nav2').on('click', function () {
        $('#img3Nav2').css("opacity", "0");
        $('#span3Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img2Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img4Nav2').on('click', function () {
        $('#img4Nav2').css("opacity", "0");
        $('#span4Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img2Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img5Nav2').on('click', function () {
        $('#img5Nav2').css("opacity", "0");
        $('#span5Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img2Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
    });


  


    Element.prototype.hasClass = function (className) {
        return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);


    };
    var totalItems = $('.item').length;
    var currentIndex = $('div.active').index() + 1;

 

   


    $("#sortable").sortable({
        axis: "x"
    });

    $("#sortable").disableSelection();

    //var mySlider = $("#slider").slider({
    //    min: 1,
    //    max: 5,
    //    step: 1,
    //    value: 3,

    //});



});