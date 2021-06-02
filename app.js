$(document).ready(function() {
    console.log("DOM Loaded");

    $("form").on("submit", function(e) {
        e.preventDefault();
        let inputVal = $("input[name='text-field']").val();
        // alert(inputVal);

        // let newH2 = $(`<h2>${inputVal}</h2>`);
        // newH2.mouseover(function () {
        //     newH2.css({
        //         "background-color": "blue",
        //         "border-radius": "6px",
        //     });
        // });
        // $("#h2Box").append(newH2);

        let newListItem = $(`<li>${inputVal}</li>`);

        newListItem.click(function() {
            let newRandomColorHex = getRandomColor(); // #000fff
            newListItem.css("color", newRandomColorHex);
        });

        newListItem.dblclick(function() {
            this.remove();
        });

        $("ul").append(newListItem);
    });

    // $("#btnSubmit").on("click", function () {
    //     alert("Submit");
    // });

    $("input[name='text-field']").keyup(function(e) {
        if ($("input[name='text-field']").val() == "") {
            $("#btnSubmit").attr("disabled", true);
        } else {
            $("#btnSubmit").attr("disabled", false);
        }
    });

    $("body").append($("<div id='h2Box'></div>"));
    $("body").append($("<ul></ul>"));

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});