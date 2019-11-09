var exploreButton = document.getElementById("explore");
var container = document.getElementById("container");
var fiveRestaurants = [];

var googleAPIKey = "AIzaSyA_GPOFfKyGMHgDf7NT1V9_OOVAy-Z1hgM";
var input = "Atlanta Tech Village";


axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${googleAPIKey}&input=${input}&inputtype=textquery`)
.then((res) => {
  console.log(res)
 })
 .catch((err) => {
  console.log ('error')
 })

 