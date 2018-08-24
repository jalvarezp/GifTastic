

var topics = ["iron man", "hulk", "thor", "capitan america", "spider man", "wolverine", "loki", "thanos"];

function buttonMaker() {

	$("#mcu-buttons").empty();
	for (var i = 0; i < topics.length; i++) {
		$("#mcu-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
	};
};

buttonMaker();

$("#additional").on("click", function (event) {
	event.preventDefault();
	var userInput = $("#mcu-input").val().trim();

	if (!userInput == " ") {
		topics.push(userInput);
		buttonMaker();
		console.log(topics);
		userInput = $("#mcu-input").val(" ");
	}
});

$(document).on("click", ".topic-button", function () {
	$("#mcu-gif").empty();

	var apiKey = "Sb2EdcUSjXUbEGQWsY64ShlHxWxVvdsv";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {
		console.log(response.data);

		var results = response.data;

		for (var j = 0; j < results.length; j++) {
			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
			newImage.attr("id", "new-gif" + j);

			$("#mcu-gif").append(newImage);
		}

		var Moving0 = false;
		$(document).on("click", "#new-gif0", function () {

			if (!Moving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url);
				Moving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url);
				Moving0 = false;
			}
		});

		var Moving1 = false;
		$(document).on("click", "#new-gif1", function () {

			if (!Moving1) {
				$("#new-gif1").attr("src", results[1].images.fixed_height.url);
				Moving1 = true;
			} else {
				$("#new-gif1").attr("src", results[1].images.fixed_height_still.url);
				Moving1 = false;
			}
		});

		var Moving2 = false;
		$(document).on("click", "#new-gif2", function () {

			if (!Moving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url);
				Moving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url);
				Moving2 = false;
			}
		});

		var Moving3 = false;
		$(document).on("click", "#new-gif3", function () {

			if (!Moving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url);
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url);
				Moving3 = false;
			}
		});

		var Moving4 = false;
		$(document).on("click", "#new-gif4", function () {

			if (!Moving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url);
				Moving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url);
				Moving4 = false;
			}
		});

		var Moving5 = false;
		$(document).on("click", "#new-gif5", function () {

			if (!Moving5) {
				$("#new-gif5").attr("src", results[5].images.fixed_height.url);
				Moving5 = true;
			} else {
				$("#new-gif5").attr("src", results[5].images.fixed_height_still.url);
				Moving5 = false;
			}

		});
		var Moving6 = false;
		$(document).on("click", "#new-gif5", function () {

			if (!Moving6) {
				$("#new-gif6").attr("src", results[6].images.fixed_height.url); 
				Moving6 = true;
			} else {
				$("#new-gif6").attr("src", results[6].images.fixed_height_still.url); 
				Moving6 = false;
			}
		});

		var Moving7 = false;
		$(document).on("click", "#new-gif7", function () {

			if (!Moving7) {
				$("#new-gif7").attr("src", results[7].images.fixed_height.url); 
				Moving7 = true;
			} else {
				$("#new-gif7").attr("src", results[7].images.fixed_height_still.url); 
				Moving7 = false;
			}
		});

		var Moving8 = false;
		$(document).on("click", "#new-gif8", function () {

			if (!Moving8) {
				$("#new-gif8").attr("src", results[8].images.fixed_height.url); 
				Moving8 = true;
			} else {
				$("#new-gif8").attr("src", results[8].images.fixed_height_still.url); 
				Moving8 = false;
			}
		});

		var Moving9 = false;
		$(document).on("click", "#new-gif9", function () {

			if (!Moving9) {
				$("#new-gif9").attr("src", results[9].images.fixed_height.url);
				Moving8 = true;
			} else {
				$("#new-gif9").attr("src", results[9].images.fixed_height_still.url);
				Moving9 = false;
			}
		});

	});
})
