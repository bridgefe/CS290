
// I researched Object.keys and hasOwnProperty implimentation on mozilla develeoper site

var deepEqual = function (x, y) {
	//makes sure its an actual object, not null object
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
  	//if objects have unequal length.. return false
    if (Object.keys(x).length != Object.keys(y).length)
      return false;
  	// loops through properties of object x
  	//checks if obj y has the same props as x
    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
      	//checks deep equal of contents of properties
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else if (x == y)
    return true;
  else
    return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true