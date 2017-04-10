var Data = function(){
	var data = {};
	return function(key, value){
		if (arguments.length === 0){
			return data;
		} else if( arguments.length === 1){
			return data[key];
		} else {
			data[key] = value;
		}
	};
}


function fahr2celc(val){		
	return Math.round((val - 32) * 5 / 9);
}

var fahrenheitData = [18, 33, 28, 31, 55, 60, 72, 88, 102, 93, 82, 90, 84, 79];

var celciusData; // convert fahrenheit to celcius
var aboveZero, belowZero; 

function unitConvertor(unitName, factor, offset){
	// make offset default to zero
	return function(value){
		// formula is:
 		// value * factor + offset
 		// check if it's constructor 
 		// true:  return object {value, unit}
 		// false: return number
	}
}
	// Use partially apply function to create the following convertors:
	// fahr2celc ( name : celc, fact : 5/9 , off: 32 )
	// pounds2kg ( name : kg, fact : 0.45460 )
	// miles2km ( name : km, fact : 1.60936 )



// var dataAboveZero = {
// 	totalDays : ??
// 	averageTemp :  ?? (rounded value)
// }

// var dataBelowZero = {
// 	totalDays : ??
// 	averageTemp :  ?? (rounded value)
// }

// (function($){
	
// 	window.run = function(ex){
// 		return ex.run();
// 	};


// 	// ====================== //
// 	// === UTIL FUNCTIONS === //
// 	// ====================== //

// 	var U = {
// 		randomBoolean : function(){
// 			return Math.random() >= 0.5;
// 		}
// 	};


// 	window.EX1 = function(){

// 	// ================== //
// 	// === EXERCISE 1 === //
// 	// ================== //

// 		function Person(data){
// 			// TODO set public properties firstName, lastName, age and sex provided by the data (object) argument.
// 			// If not provided in data object, they should default to "John", "Doe", 18 and "male" respectively.
// 		}

// 		function run(){
// 			// initalize a person object and return it.
// 		}
		
// 	// === END === //

// 		return {
// 			run : run
// 		};
		
// 	}();


// 	window.EX2 = (function(){
		
// 		var randomData = function(){
// 			if( U.randomBoolean() ){
// 				return { work_experience : { company: { name: 'ACME', from: '15/03/2015' } } }
// 			} else {
// 				return { voluteering: { organization: { name: 'Mozilla', from: '21/04/2013', to: '24/04/2014' } } }
// 			}
// 		};

// 	// ================== //
// 	// === EXERCISE 2 === //
// 	// ================== //

// 		var getCompanyName = function(personData){
			
// 			// TODO: Return the name of company or false value;

// 		};
		
// 	// === END === //

// 		var run = function(){
// 			return { 
// 				mark : getCompanyName(randomData()),
// 				john : getCompanyName(randomData()),
// 				jenny : getCompanyName(randomData())
// 			}
// 		};

// 		return {
// 			run : run
// 		};
// 	})();



// 	// ================== //
// 	// === EXERCISE 3 === //
// 	// ================== //

// 	window.typeOf = function(value){
// 		var t = typeof value;
		
// 		// TODO: Handle the bad ones

// 	}();

// 	// === END === //

// 	function Programmer(options){
// 		this.name = options.name;
// 		this.level = options.name || 'junior';
// 		this.promote = function(level){
// 			this.level = level;
// 		}
// 		this.promoteLater = function(level, delay){
// 			this.level = level;
// 			setTimeout(function(){
// 				this.level = level;
// 			}, delay);
// 		}
// 	}

// 	// function ImmutableMap(proto){
// 	// 	var value = Object.freeze(proto);
// 	// 	console.log(value);
// 	// 	var getter = function(prop){
// 	// 		if(arguments.length === 0){
// 	// 			return value;
// 	// 		}			
// 	// 		return value[prop];			
// 	// 	};
		
// 	// 	getter.update = function(fn){
// 	// 		var newObj = Object.create(value);
// 	// 		console.log(['new', newObj]);
// 	// 		return ImmutableMap(fn.call(newObj));
// 	// 	};
		
// 	// 	return getter;
// 	// }

// 	// window.ImmutableMap = ImmutableMap;
	
// 	function fahr2celc(val){		
// 		return Math.round((val - 32) * 5 / 9)
// 	}
	
// 	var fahrenheitData = [0, 32, 45, 50, 75, 80, 99, 120];

// 	var celciusData; // convert fahrenheit to celcius
// 	var aboveZero, belowZero; 
	
// 	// var dataAboveZero = {
// 	// 	totalDays : ??
// 	// 	averageTemp :  ??
// 	// }

// 	// var dataBelowZero = {
// 	// 	totalDays : ??
// 	// 	averageTemp :  ??
// 	// }



// 	// ================== //
// 	// === EXERCISE 4 === //
// 	// ================== //

// 	// Implement debounce function
	
// 	function debounce(fn, timeout){
// 		return function(){}
// 	}


// 	// ================== //
// 	// === EXERCISE 5 === //
// 	// ================== //

// 	// Implement arrayMap function

// 	function arrayMap(fn, arr){
// 		// iterate array, skip undefined values
// 		// apply function to each array value
// 		// return results as new array	
// 	}

// 	// ================== //
// 	// === EXERCISE 6 === //
// 	// ================== //

// 	// Implement arrayReduce function

// 	function arrayReduce(fn, acc, arr){
// 		// iterate array, skip undefined values
// 		// apply function to each array value
// 		// assign result to accumulator
// 		// return accumulator
// 	}

// 	// ================== //
// 	// === EXERCISE 7 === //
// 	// ================== //

// 	// Implement arrayFilter function

// 	function arrayFilter(fn, arr){
// 		// iterate array, skip undefined values
// 		// apply function to each array value
// 		// if result is truthy append original value
// 		// to new array and return it

// 	// ================== //
// 	// === EXERCISE 8 === //
// 	// ================== //

// 	// Implement objectMap function

// 	function objectMap(fn, obj){
// 		// iterate object properties, skip inherited properties
// 		// apply function to each property key and value
// 		// return results as new object
// 	}

// 	// ================== //
// 	// === EXERCISE 9 === //
// 	// ================== //

// 	// Implement objectReduce function

// 	function objReduce(fn, acc, arr){
// 		// iterate object properties, skip inherited properties
// 		// apply function to each property key and value
// 		// assign result to accumulator
// 		// return accumulator
// 	}

// 	// function Class(options){
// 	// 	options = options || {};
// 	// 	var constructor  = options.constructor || new Function;
// 	// 	var extends = options.extends;

// 	// 	var init = function init(){
// 	// 		if (this instanceof init){

// 	// 		}
// 	// 	}
// 	// }



// })(jQuery);