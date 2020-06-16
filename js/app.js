'use strict'
var workingTimes = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var places ={
   Seattle : {
     location:'seattle',
    minHourCustomers : 23 ,
    maxHourCustomers : 65	,
    averageCookiesPerCustomer : 6.3,
    cookiesPurchedPerHour :[],
    numberOfCustomerPerHour: [],
  },
   Tokyo : {
     location :'Tokyo',
    minHourCustomers:3 ,
    maxHourCustomers :24,
    averageCookiesPerCustomer : 1.2,
    cookiesPurchedPerHour :[], 
    numberOfCustomerPerHour: [],
  },
  
   Dubai :{
     location : 'Dubai',
    minHourCustomers : 11,
    maxHourCustomers :38,
    averageCookiesPerCustomer : 3.7,
    cookiesPurchedPerHour :[],
    numberOfCustomerPerHour: [],
  },
  
   Paris : {
     location : 'paris',
    minHourCustomers : 20 ,
    maxHourCustomers : 38 ,
    averageCookiesPerCustomer : 2.3,
    cookiesPurchedPerHour :[],
    numberOfCustomerPerHour: [],
  
  },
  
   Lima :{
    location : 'lima',
    minHourCustomers :2 ,
    maxHourCustomers : 16 ,
    averageCookiesPerCustomer : 4.6,
    cookiesPurchedPerHour :[],
    numberOfCustomerPerHour: [],
  }

}

// get random- custmers per hour 
function randomHourlyCustomers(max , min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var key in places){
  var amountsOfCookies = 0;
  var locationObject = places[key];
  var locationName = document.createElement("section"); 
  locationName.innerHTML = places[key].location;
  document.getElementById("location-name").appendChild(locationName);

  var citySold = document.createElement("ul"); 
  locationName.appendChild(citySold);
  for ( var i = 0; i < workingTimes.length; i++) {
    places[key].numberOfCustomerPerHour[i] = randomHourlyCustomers(places[key].minHourCustomers,places[key].maxHourCustomers);
    places[key].cookiesPurchedPerHour[i] = Math.round(places[key].numberOfCustomerPerHour[i] * places[key].averageCookiesPerCustomer);
    var salesPerHour = document.createElement("li"); 
    salesPerHour.innerHTML = workingTimes[i] + ': ' + places[key].cookiesPurchedPerHour[i] + ' cookies';
    citySold.appendChild(salesPerHour);
    amountsOfCookies += places[key].cookiesPurchedPerHour[i];
    if (i == workingTimes.length - 1) {
      var totalOfCookies = document.createElement("li");
      totalOfCookies.innerHTML = 'Total: ' + amountsOfCookies + ' cookies';
      salesPerHour.appendChild(totalOfCookies);
    }
  }
}


