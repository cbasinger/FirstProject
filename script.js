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

var exploreButton = document.getElementById("submitButton");
const fourSquareClientId = "BCEJY3NTBHJNIUQF5DSI01IRXSDGJMTBBQPSPIK4OFTMCOUM";// Required
const fourSquareClientSecret = "GGTZU3VGFAWCSA2H4HBL4A3HDJ1YTJWD3JAPMSE0BRLLXMDP";//Required
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
            for(i=0;i<1; i++){
                axios.get(`https://api.foursquare.com/v2/venues/` + fiveRestaurantIds[i]+ `?client_id=YRYBPL3XX1AQMOAQF3EBE1Z2MWBGYWMH3F5U4XQKWWJ2ZUO3&client_secret=DAHBINRS4RAPF55R30CJUOXLHHRHS3XISOAI1C35BXAP4IIF&v=20180323`)
                .then(function(data) {
                    informationPath = data.data.response.venue;
                    var newObject = {};
                    newObject.name = informationPath.name; 
                    newObject.url = data.data.response.venue.url;
                    newObject.rating = data.data.response.venue.rating;
                    newObject.priceTier = data.data.response.venue.price.tier;
                    newObject.photo = data.data.response.venue.bestPhoto.prefix + "original" + data.data.response.venue.bestPhoto.suffix;
                    fiveRestaurants.push(newObject);
                })
                .catch(function(error) {
                    console.log(error)
                     //Code for handling errors
                });
            }
                console.log(fiveRestaurants);
        })
        .catch(function(error) {
            console.log(error)
            // Code for handling errors
        });
}

exploreButton.onclick = function () {
    //add below code when it is working to type in a location
    //if(locationSearchElement.value && locationSearch.value !== "" ){
    //   currentLocation = locationSearchElement.value;
    //}
    getVenueByLocation();
}

var exploreButton = document.getElementById("explore");
var container = document.getElementById("container");
var fiveRestaurants = [];
var fiveBars = [];
var fiveParks = [];
var fiveEvents = [];

    const clientId = "YRYBPL3XX1AQMOAQF3EBE1Z2MWBGYWMH3F5U4XQKWWJ2ZUO3";// Required
    const clientSecret = "DAHBINRS4RAPF55R30CJUOXLHHRHS3XISOAI1C35BXAP4IIF";//Required
    var endPoints = {
//         'getVenueDetailById': 'https://api.foursquare.com/v2/venues/',
//         'getVenueCategories': 'https://api.foursquare.com/v2/venues/categories',
            'getPopularVenues': 'https://api.foursquare.com/v2/venues/explore',
            'searchVenues': 'https://api.foursquare.com/v2/venues/search',
//         'getTrendingVenues': 'https://api.foursquare.com/v2/venues/trending',
    }
function inputFunction() {
    var zipInput= document.getElementById("zipcodeInput").value;
    
    //bars    
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=4bf58dd8d48988d116941735&near=${zipInput}&client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=5`)
    .then (data => console.log(data))
    .catch(err => console.log(err))  

    //restaurants
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06374d81259&near=${zipInput}&client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=5`)        
    .then (data => console.log(data))
    .catch(err => console.log(err))    

    //parks
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=4bf58dd8d48988d163941735&near=${zipInput}&client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=5`)
    .then (data => console.log(data))
    .catch(err => console.log(err))   
    
    //events
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06373d81259&near=${zipInput}&client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=5`)
    .then (data => console.log(data))
    .catch(err => console.log(err))  

}

function cardBody(){
    document.getElementById("card-body").getClass="card-body-style";
    }
    
    function cardText(){
        document.getElementById("cardText").getClass="cardText-style";
    }
    
    function listGroupItem(){
        document.getElementById("list-group=item").getClass="groupItem-style";
    }
    function cardLink(){
        document.getElementById("card-link").getClass="cardLink-style";
    }