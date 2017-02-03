
/***************************************
** Erik Bridgeford
** February 3, 2017
*****************************************/
function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
  var sortedArray = array;  
    var min; var temp;
    for(var i = 0; i < sortedArray.length-1; i++)
         {
            min = i;
            for(var j = i+1; j < sortedArray.length; j++){
                var compare = comparator(sortedArray[j],
                sortedArray[min]);
                if(compare)
                        min = j;
            }
            if(min != i){
                  temp = sortedArray[i];
                  sortedArray[i] = sortedArray[min];
                  sortedArray[min] = temp;
            }
    }
    
    return sortedArray;
   }


/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
     if (auto1.year > auto2.year)
    {
        return true;
    } else 
    {
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    //shifts all to lowercase before compare.(case insensitive)
    //puts them in descending alphabetical order.
    var make1 = auto1.make.toLowerCase();
    var make2 = auto2.make.toLowerCase();;
    if (make1 < make2)
    {
        return true;
    } else {
        return false;
    }  
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
     //to lowercase for case insensitivity 
    var type1 = auto1.type.toLowerCase();
    var type2 = auto2.type.toLowerCase();
    if(type1 == type2){ //checks if both same car
        if(auto1.year > auto2.year)//if so, compares age to arrange them
            return true;
        else
            return false;
    } //checks all cars against !roadsters. roadsters are put on top of the list
    else if(type1 == 'roadster' && type2 != 'roadster')
        return true;
    else if(type1 == 'pickup' && type2 != 'roadster')
        return true;
    else if(type1 == 'suv' && type2 != 'roadster' && type2 != 'pickup')
        return true;
    else if(type1 == 'wagon' && type2 != 'suv' && type2 != 'roadster' && type2 != 'pickup')
        return true;
    else
        return false;
     }
   

function printArray(array1)
{
    for(var i = 0; i < array1.length; i++)
    {
        var car1 = array1[i];
        console.log(car1.year + ' ' + car1.make + ' ' +
        car1.model + ' ' + car1.type);   
    }
}

//outputs ordered results to console

console.log('CARS SORTED BY YEAR:');
var yearSort = sortArr(yearComparator, automobiles);
printArray(yearSort);
console.log('');

 
console.log('CARS SORTED BY MAKE:');
var makeSort = sortArr(makeComparator, automobiles);
printArray(makeSort);
console.log('');


console.log('CARS SORTED BY TYPE:');
var typeSort = sortArr(typeComparator, automobiles);
printArray(typeSort);
console.log('');
