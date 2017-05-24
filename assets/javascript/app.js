

var buttons = ["bird", "lion"];

function displayAnimalInfo() {
  $("#giphy-view").empty();
  var animal = $(this).attr("data-name");
  console.log(animal);
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      console.log(queryURL);
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#giphy-view").prepend(animalDiv);
      }
	});
}

function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < buttons.length; i++) {
          var a = $("<button>");
          a.addClass("button");
          a.addClass("btn btn-default");
          a.attr("data-name", buttons[i]);
          a.text(buttons[i]);
          $("#buttons-view").append(a);
        }
      }

$("#add-giphy").on("click", function(event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        buttons.push(animal);
        renderButtons();
      });
      $(document).on("click", ".button", displayAnimalInfo);
      renderButtons();







