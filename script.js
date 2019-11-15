



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

    
    

    
// var getVenueByLocation = function () {
//        axios.get(`${endPoints.getPopularVenues}?client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
//            .then(function(data) {
//                console.log(data)
                // Code for handling API response
//            })
//            .catch(function(error) {
//                console.log(error)
                // Code for handling errors
//        });
//    }
//    getVenueByLocation();