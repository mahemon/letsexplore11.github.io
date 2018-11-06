document["addEventListener"]("DOMContentLoaded", function() {
    $(".preloader-background")["delay"](2000)["fadeOut"]("slow");
    $(".preloader-wrapper")["delay"](2000)["fadeOut"]()
});

function toggleFullScreen() {
    if ((document["fullScreenElement"] && document["fullScreenElement"] !== null) || (!document["mozFullScreen"] && !document["webkitIsFullScreen"])) {
        if (document["documentElement"]["requestFullScreen"]) {
            document["documentElement"]["requestFullScreen"]()
        } else {
            if (document["documentElement"]["mozRequestFullScreen"]) {
                document["documentElement"]["mozRequestFullScreen"]()
            } else {
                if (document["documentElement"]["webkitRequestFullScreen"]) {
                    document["documentElement"]["webkitRequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT)
                }
            }
        }
    } else {
        if (document["cancelFullScreen"]) {
            document["cancelFullScreen"]()
        } else {
            if (document["mozCancelFullScreen"]) {
                document["mozCancelFullScreen"]()
            } else {
                if (document["webkitCancelFullScreen"]) {
                    document["webkitCancelFullScreen"]()
                }
            }
        }
    }
}
$(document)["ready"](function() {
    $(".carousel")["carousel"]();
    $(".modal")["modal"]();
    $(".button-collapse")["sideNav"]();
    $(".collapsible")["collapsible"]();
    $(".toggle-fullscreen")["click"](function() {
        toggleFullScreen()
    });
    $(".parallax")["parallax"]();
    $("#target1, #target2, #target3, #target4")["css"]("color", "black");
    $("#cardOne, #cardTwo, #cardThree, #cardFour")["addClass"]("animated slideInUp");
    var variable_0 = [{
        selector: "#staggered-test",
        offset: 100,
        callback: function(variable_1) {
            Materialize["showStaggeredList"]($(variable_1))
        }
    }, {
        selector: "#staggered-test",
        offset: 100,
        callback: function(variable_1) {
            Materialize["fadeInImage"]($(variable_1))
        }
    }];
    Materialize["scrollFire"](variable_0)
});
$("#scrolly")["click"](function() {
    $["scrollTo"]("#target1")
});
let filterInput = document["getElementById"]("filterInput");
filterInput["addEventListener"]("keyup", filterNames);

function filterNames() {
    let variable_2 = document["getElementById"]("filterInput")["value"]["toUpperCase"]();
    let variable_3 = document["getElementById"]("courses");
    let variable_4 = variable_3["querySelectorAll"]("li.collection-item");
    for (let variable_5 = 0; variable_5 < variable_4["length"]; variable_5++) {
        let variable_6 = variable_4[variable_5]["getElementsByTagName"]("a")[0];
        if (variable_6["innerHTML"]["toUpperCase"]()["indexOf"](variable_2) > -1) {
            variable_4[variable_5]["style"]["display"] = ""
        } else {
            variable_4[variable_5]["style"]["display"] = "none"
        }
    }
}