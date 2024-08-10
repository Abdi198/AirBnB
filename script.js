function filterByCity(targetCity, listingCityArray) {
let matchedCities = [];
  // This function should return an array with each index from listingCityArray where the city matches targetCity ignoring capitalization/case.
  const lowerCaseTargetCity = targetCity.toLowerCase();


  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase().includes(lowerCaseTargetCity)){
      matchedCities.push(i)
      console.log(matchedCities);
    }
  }
  return matchedCities;
}


function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  matchingPrice = [];
  // Note: Comment out the following line when you start working on this function!
  // return [...listingPriceArray.keys()]
  
  for (let i = 0; i < listingPriceArray.length; i++) {
    if(listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      matchingPrice.push(i);
      console.log(matchingPrice);
    }    
  }
  return matchingPrice;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let listingTypeAny = [];


  // Note: Comment out the following line when you attempt the LevelUp!
  // return [...listingTypeArray.keys()]
  // This function should return an array with each index from listingTypeArray where the type of listing matches ANY of the targetTypes.
  for (let i = 0; i < listingTypeArray.length; i++) {
    if (targetTypes.includes(listingTypeArray[i])) {
      listingTypeAny.push(i)
      console.log(listingTypeAny);
    }
  }
  return listingTypeAny;
}