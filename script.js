var exploreButton = document.getElementById("explore");
const fourSquareClientId = "BCEJY3NTBHJNIUQF5DSI01IRXSDGJMTBBQPSPIK4OFTMCOUM";// Required
const fourSquareClientSecret = "O1CAYJY0HSXZ45GATTKELQPTKAQXDWSI5KNW5A4MCEM2NPKF";//Required
var locationSearchElement = document.getElementById("locationSearch");
var cardContainer = document.getElementById("cardContainer");
var currentLocation = "33.853510, -84.368667";
var fiveRestaurants = [];
var isFinished = 0;


$(document).ready(function() {
    $(".card_1").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_1_div").offset().top},
            'slow');
    });

    $(".card_2").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_2_div").offset().top},
            'slow');
    });

    $(".card_3").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_3_div").offset().top},
            'slow');
    });

    $(".card_4").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_4_div").offset().top},
            'slow');
    });

    $(".card_5").click(function() {
        $('html,body').animate({
            scrollTop: $(".card_5_div").offset().top},
            'slow');
    });
})

var createRestaurantCards = function(){
    for (i=0; i<5; i++){
        var newCardContainer = document.createElement("div");
        newCardContainer.className ="card card_"+i+"_div";
        var newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style = "width: 25rem;";
        var newCardImage = document.createElement("img");
        newCardImage.className = "card-img-top";
        newCardImage.src = fiveRestaurants[i].photo;
        newCardImage.alt = "...";
        var newCardBody = document.createElement("div");
        newCardBody.className = "card-body";
        var newCardTitle = document.createElement("h5");
        newCardTitle.className = "card-title";
        newCardTitle.innerHTML = fiveRestaurants[i].name;
        var newCardInfo = document.createElement("p");
        newCardInfo.className = "card-text";

        var dollars = "";
        if(fiveRestaurants[i].priceTier == 1){dollars = "$";}
        if(fiveRestaurants[i].priceTier == 2){dollars = "$$";}
        if(fiveRestaurants[i].priceTier == 3){dollars = "$$$";}
        if(fiveRestaurants[i].priceTier == 4){dollars = "$$$$";}
        if(fiveRestaurants[i].priceTier == 5){dollars = "$$$$$";}

        newCardInfo.innerHTML = "rating: " + fiveRestaurants[i].rating + ", price: " + dollars;

        newCardLink = document.createElement("a");
        newCardLink.className = "card-link";
        newCardLink.href = fiveRestaurants[1].url;
        newCardLink.target = "_blank";
        newCardLink.innerHTML = "take me there!";

        
        newCardBody.appendChild(newCardTitle);
        newCardBody.appendChild(newCardInfo);
        newCardBody.appendChild(newCardLink);
        
        newCard.appendChild(newCardImage);
        newCard.appendChild(newCardBody);
        newCardContainer.appendChild(newCard);
        cardContainer.appendChild(newCardContainer);
    }
}


var getVenueByLocation = function () {
    axios.get(`https://api.foursquare.com/v2/venues/explore?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323&ll=${currentLocation}&query=restaurant`)
        .then(function(data) {
            console.log('1');
            var informationPath = data.data.response.groups[0].items;
            var fiveRestaurantIds = [];
            for(i=0; i<5; i++) {
                fiveRestaurantIds.push(informationPath[i].venue.id);
                console.log(fiveRestaurantIds);
            }
            
            axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[0]+ `?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323`)
            .then(function(data) {
                console.log("0");
                informationPath = data.data.response.venue;
                var newObject = {};
                newObject.name = informationPath.name; 
                newObject.url = data.data.response.venue.url;
                newObject.rating = data.data.response.venue.rating;
                newObject.priceTier = data.data.response.venue.price.tier;
                newObject.photo = data.data.response.venue.bestPhoto.prefix + "original" + data.data.response.venue.bestPhoto.suffix;
                fiveRestaurants.push(newObject);
                isFinished += 1;
            })
            .catch(function(error) {
                console.log(error)
                //Code for handling errors
            });

            axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[1]+ `?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323`)
            .then(function(data) {
                console.log("1");
                informationPath = data.data.response.venue;
                var newObject = {};
                newObject.name = informationPath.name; 
                newObject.url = data.data.response.venue.url;
                newObject.rating = data.data.response.venue.rating;
                newObject.priceTier = data.data.response.venue.price.tier;
                newObject.photo = data.data.response.venue.bestPhoto.prefix + "original" + data.data.response.venue.bestPhoto.suffix;
                fiveRestaurants.push(newObject);
                isFinished += 1;
            })
            .catch(function(error) {
                console.log(error)
                //Code for handling errors
            });

            axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[2]+ `?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323`)
            .then(function(data) {
                console.log("2");
                informationPath = data.data.response.venue;
                var newObject = {};
                newObject.name = informationPath.name; 
                newObject.url = data.data.response.venue.url;
                newObject.rating = data.data.response.venue.rating;
                newObject.priceTier = data.data.response.venue.price.tier;
                newObject.photo = data.data.response.venue.bestPhoto.prefix + "original" + data.data.response.venue.bestPhoto.suffix;
                fiveRestaurants.push(newObject);
                isFinished += 1;
            })
            .catch(function(error) {
                console.log(error)
                //Code for handling errors
            });

            axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[3]+ `?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323`)
            .then(function(data) {
                console.log("3");
                informationPath = data.data.response.venue;
                var newObject = {};
                newObject.name = informationPath.name; 
                newObject.url = data.data.response.venue.url;
                newObject.rating = data.data.response.venue.rating;
                newObject.priceTier = data.data.response.venue.price.tier;
                newObject.photo = data.data.response.venue.bestPhoto.prefix + "original" + data.data.response.venue.bestPhoto.suffix;
                fiveRestaurants.push(newObject);
                isFinished += 1;
            })
            .catch(function(error) {
                console.log(error)
                //Code for handling errors
            });

            axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[4]+ `?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323`)
            .then(function(data) {
                console.log("4");
                informationPath = data.data.response.venue;
                var newObject = {};
                newObject.name = informationPath.name; 
                newObject.url = data.data.response.venue.url;
                newObject.rating = data.data.response.venue.rating;
                newObject.priceTier = data.data.response.venue.price.tier;
                newObject.photo = data.data.response.venue.bestPhoto.prefix + "original" + data.data.response.venue.bestPhoto.suffix;
                fiveRestaurants.push(newObject);
                isFinished += 1;
            })
            .catch(function(error) {
                console.log(error)
                //Code for handling errors
            });

            console.log(fiveRestaurants);          
        })
        
        .catch(function(error) {
            console.log(error)
            // Code for handling errors
        });
}


exploreButton.onclick = function () {
    console.log('hello');
    // add below code when it is working to type in a location
    // if(locationSearchElement.value && locationSearch.value !== "" ){
    //   currentLocation = locationSearchElement.value;
    // }
    cardContainer.innerHTML = "";
    getVenueByLocation();
    setTimeout(function(){ 
        createRestaurantCards();
    }, 3000);
}