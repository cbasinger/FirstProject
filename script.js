var exploreButton = document.getElementById("explore");
const fourSquareClientId = "YRYBPL3XX1AQMOAQF3EBE1Z2MWBGYWMH3F5U4XQKWWJ2ZUO3";// Required
const fourSquareClientSecret = "DAHBINRS4RAPF55R30CJUOXLHHRHS3XISOAI1C35BXAP4IIF";//Required
var locationSearchElement = document.getElementById("locationSearch");
var container = document.getElementById("container");
var currentLocation = "33.853510, -84.368667";
var fiveRestaurants = [];

//name, photo, rating, link

var getVenueByLocation = function () {
    axios.get(`https://api.foursquare.com/v2/venues/explore?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&v=20180323&ll=${currentLocation}&query=restaurant`)
        .then(function(data) {
            var informationPath = data.data.response.groups[0].items;
            var fiveRestaurantIds = [];
            for(i=0; i<5; i++) {
                fiveRestaurantIds.push(informationPath[i].venue.id);
            }
            console.log(fiveRestaurantIds);
            for(i=0;i<5; i++){
                axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[i]+ `?client_id=YRYBPL3XX1AQMOAQF3EBE1Z2MWBGYWMH3F5U4XQKWWJ2ZUO3&client_secret=DAHBINRS4RAPF55R30CJUOXLHHRHS3XISOAI1C35BXAP4IIF&v=20180323`)
                .then(function(data) {
                    var newObject = {};
                    console.log(data.data.response.venue);
                    newObject.name = data.data.response.venue.name; 
                    newObject.url = data.data.response.venue.url;
                    newObject.rating = data.data.response.venue.rating;
                    newObject.priceTier = data.data.response.venue.price.tier;
                    newObject.photo = data.data.response.venue.bestPhoto.prefix + "/original/" + data.data.response.venue.bestPhoto.suffix;
                    fiveRestaurants[i] = newObject;
                })
                .catch(function(error) {
                    console.log(error)
                     //Code for handling errors
                });
            }
        })
        .catch(function(error) {
            console.log(error)
            // Code for handling errors
        });
}

getVenueByLocation();

exploreButton.onclick = function () {
    //add below code when it is working to type in a location
    if(locationSearchElement.value && locationSearch.value !== "" ){
       currentLocation = locationSearchElement.value;
    }
    getVenueByLocation();
}