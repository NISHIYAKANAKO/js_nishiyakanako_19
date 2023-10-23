var ui = $("#gameUI");
var uiIntro = $("gameIntro");
var uiStats = $("gamestats");
var uiComplete = $("#gameComplete");
var uiPlay = $("#gamePlay");
var uiReset = $(".gameReset");
var uiScore = $(".gameScore");
var uiTable = $("#table");
var uiTime = $("#showtime");
var uiBack = $("#gameBack");
var uiStart = $("#start");
var uiClear = $("#clearmain");
var example = $("#example");

function init() {
uiStats.hide();
uiTable.hide();
uiTime.hide();
uiBack.hide();
uiStart.hide();
uiClear.hide();
example.hide();}

uiPlay.click(function(e) {
e.preventDefault();
uiIntro.hide();
example.show();
uiBack.show();
uiStart.show();
});


uiStart.click(function(e) {
    example.hide();
    uiTable.show();
    uiTime.show();
    });

    uiBack.click(function(e) {
        location.reload();
        });

        uiComplete.click(function(e) {
            uiBack.hide();
            uiStart.hide();
            uiTable.hide();
            uiTime.hide();
            uiClear.show();
            });