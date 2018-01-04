var countryCode = function(countryName){
  var code;
  switch (countryName) {
    case 'Australia': code = 43; break;
    case 'Argentina': code = 54; break;
    case 'Algeria': code = 213; break;
    case 'France': code = 86; break;
    case 'China': code = 55; break;
    case 'Egypt': code = 21; break;
    default: code = 0;
  }
  return code;
}

module.exports.countryCode = countryCode;
