var topics = ['cat', 'dog', 'raccoon', 'monkey', 'kangaroo', 'horse', 'bear', 'whale', 'wolf', 'fox', 'squirrel'];

$(document).ready(function() {

    function displayButton() {
       $("#btnDisplay").empty();
        for(var i = 0; i < topics.length; i++) {
            var button = $("<button>").text(topics[i]);          
            button.addClass("btn");
            button.attr("buttonName", topics[i]);
            $("#btnDisplay").append(button);
         }
    }
    
    function displayJSONInfo() {
        $("div.grid").empty();
        var clickedButton = $(this).attr("buttonName");
        var queryURL= 'https://api.giphy.com/v1/gifs/search?q=' + clickedButton + '&limit=10&api_key=T7UM5piMlZQ0Rbel0hiKm2HJvT7IpxrY';
        $.ajax({
            url: queryURL,
            method:'GET'
        }).then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                var imgContainer = $('<div>');
                var img = $("<img>");
                var imgText = $("<p>Rating: " + response.data[i].rating + "</p>");

                imgContainer.addClass('imgContainers');
                imgText.addClass("text");
                img.addClass("img");
                img.attr('src', response.data[i].images.fixed_height_still.url);
                img.attr('still', response.data[i].images.fixed_height_still.url);
                img.attr('animated', response.data[i].images.original.url );
                img.attr('state', 'still');
                img.attr("alt", response.data[i].title);
                imgContainer.prepend(imgText, img);
                $("div.grid").prepend(imgContainer);
            }

            $('.img').on('click', function () {
                if ($(this).attr('state') === 'still') {
                    $(this).attr('state', 'animated');
                    $(this).attr('src', $(this).attr('animated'));
                } else {
                    $(this).attr('state', 'still');
                   $(this).attr('src', $(this).attr('still'));
                }
            })           
        })
    }

    $("#submitInput").on("click", function(event) {
        event.preventDefault();
        var inputName = $("#userInput").val();
        topics.push(inputName);
        displayButton();  
    });

    displayButton();

    $("#btnDisplay").on('click', '.btn', displayJSONInfo);

});