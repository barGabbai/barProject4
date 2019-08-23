$(document).ready(function () {

    $('#startBtn').hide();

    $("#introForMe").click(function () {
        $('.titleIntro').html("מצויין!");
        $('.introCol').hide();
        $('#qInstQ').html("יצרנו עבורך שאלון קצר על מנת שנוכל להכווין אותך בצורה הטובה ביותר! <br/> ככל שתענה על השאלות בצורה כנה יותר, כך תיחשף לתוכן הרלוונטי ביותר עבורך!");
        $('#startBtn').show();

    });
});