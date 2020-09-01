let progressBar = $("#ProgressBarTotal");
let width = 0;

$(".btn-1").click(function(){
    width = width + 1;
    console.log("currentProgress", width);
    progressBar.width(width + "%")
});

$(".btn-3").click(function(){
    width = width + 3;
    console.log("currentProgress", width);
    progressBar.width(width + "%")
});

$(".btn-7").click(function(){
    width = width + 7;
    console.log("currentProgress", width);
    progressBar.width(width + "%")
});