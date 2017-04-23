	
	// ====================== //
	// === UTIL FUNCTIONS === //
	// ====================== //

	var U = {
		randomBoolean : function(){
			return Math.random() >= 0.5;
		}
	};


	// ================== //
	// === EXERCISE 1 === //
	// ================== //

	function Person(data){
		// TODO set public properties firstName, lastName, age and sex provided by the data (object) argument.
		// If not provided in data object, they should default to "John", "Doe", 18 and "male" respectively.
	}
	
	// initialize a new person


	// ================== //
	// === EXERCISE 2 === //
	// ================== //


	var randomData = function(){
		if( U.randomBoolean() ){
			return { work_experience : { company: { name: 'ACME', from: '15/03/2015' } } }
		} else {
			return { voluteering: { organization: { name: 'Mozilla', from: '21/04/2013', to: '24/04/2014' } } }
		}
	};

	var getCompanyName = function(personData){
		
		// TODO: Return the name of company or false value;

	};

	var candidates = {		
		mark : getCompanyName(randomData()),
		john : getCompanyName(randomData()),
		jenny : getCompanyName(randomData())
	}


	// ================== //
	// === EXERCISE 3 === //
	// ================== //

	function typeOf(value){
		var t = typeof value;
		
		// TODO: Handle the bad ones

	}


	// ================== //
	// === EXERCISE 4 === //
	// ================== //

	// Implement debounce function
	
	function debounce(fn, timeout){
		return function(){

		};
	}


	// ================== //
	// === EXERCISE 5 === //
	// ================== //

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
	};


	// ================== //
	// === EXERCISE 6 === //
	// ================== //

	// Uncomment last line and fix the error!

	function Programmer(options){
		this.name = options.name;
		this.level = options.name || 'junior';
		this.promote = function(level){
			this.level = level;
		}
		this.promoteLater = function(level, delay){
			this.level = level;
			setTimeout(function(){
				this.level = level;
			}, delay);
		}
	}

	var carmack = Programmer({name: "John Carmack", level: "demigod"});

	// Uncomment following line to see the error
	// carmack.promoteLater('god'); // error


	// ================== //
	// === EXERCISE 7 === //
	// ================== //

	function fahr2celc(val){		
		return Math.round((val - 32) * 5 / 9);
	}

	var fahrenheitData = [18, 33, 28, 31, 55, 60, 72, 88, 102, 93, 82, 90, 84, 79];

	var celciusData; // convert fahrenheit to celcius
	var aboveZero, belowZero; 

	// var dataAboveZero = {
	// 	totalDays : ??
	// 	averageTemp :  ?? (rounded value)
	// }

	// var dataBelowZero = {
	// 	totalDays : ??
	// 	averageTemp :  ?? (rounded value)
	// }


	// ================== //
	// === EXERCISE 8 === //
	// ================== //

	// Implement arrayMap function

	function arrayMap(fn, arr){
		// iterate array, skip undefined values
		// apply function to each array value
		// return results as new array	
	}


	// ================== //
	// === EXERCISE 9 === //
	// ================== //

	// Implement arrayReduce function

	function arrayReduce(fn, acc, arr){
		// iterate array, skip undefined values
		// apply function to each array value
		// assign result to accumulator
		// return accumulator
	}


	// =================== //
	// === EXERCISE 10 === //
	// =================== //

	// Implement arrayFilter function

	function arrayFilter(fn, arr){
		// iterate array, skip undefined values
		// apply function to each array value
		// if result is truthy append original value
		// to new array and return it
	}


	// =================== //
	// === EXERCISE 11 === //
	// =================== //

	// Implement objectCreate function

	function objectCreate(protoObj){
		// create empty function
		// assign prototype
		// instantiate new object and return it
	}


	// =================== //
	// === EXERCISE 12 === //
	// =================== //

	// Implement objectMap function

	function objectMap(fn, obj){
		// iterate object properties, skip inherited properties
		// apply function to each property key and value
		// return results as new object
	}


	// =================== //
	// === EXERCISE 13 === //
	// =================== //

	// Implement objectReduce function

	function objReduce(fn, acc, arr){
		// iterate object properties, skip inherited properties
		// apply function to each property key and value
		// assign result to accumulator
		// return accumulator
	}


	// =================== //
	// === EXERCISE 14 === //
	// =================== //


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



	// ====================== //
	// === EXERCISE MAYBE === //
	// ====================== //

	var O = function(v){
		// should have a public value property
		// public up method that increments the value ++ and cascades (returns this)
		// public down method that decrements the value -- and cascades
		// public low method logs the value property in the console
		// public add method that adds (+) number to the value and cascades
		// public low method logs the value property in the console
	};

	W = function(object){
		// create a function wrap that will take an object
		// when evaluated again it should take the first argument as method name
		// and execute than  method on the wrapped object, and pass the remaing
		// arguments to the method.

		// should return a named function 'R' with 'method' parameter
			// take all but the first argument of this function
			// access the method from the
	};



	// ====================== //
	// === EXERCISE MAYBE === //
	// ====================== //

	// Create a curried (Ramda) sum function x+y
	// Create a increment function by partially applying the function with 1
	
	// Create a curried modulus function 'mod'
	var mod;
	// create a isOdd function by partially appying the mod function
	var isOdd;
	// create a not function
	var not;
	// create is even function by composing/pipeing the 'isOdd' and 'not' functions 
	var isEven;
	// bonus: make the isOdd function by composing (or pipeing)
	var odd;
	
	// ====================== //
	// === EXERCISE NEVER === //
	// ====================== //

	// function Class(options){
	// 	options = options || {};
	// 	var constructor  = options.constructor || new Function;
	// 	var extends = options.extends;

	// 	var init = function init(){
	// 		if (this instanceof init){

	// 		}
	// 	}
	// }


	// function ImmutableMap(proto){
	// 	var value = Object.freeze(proto);
	// 	console.log(value);
	// 	var getter = function(prop){
	// 		if(arguments.length === 0){
	// 			return value;
	// 		}			
	// 		return value[prop];			
	// 	};
		
	// 	getter.update = function(fn){
	// 		var newObj = Object.create(value);
	// 		console.log(['new', newObj]);
	// 		return ImmutableMap(fn.call(newObj));
	// 	};
		
	// 	return getter;
	// }

	// var Module = function(name, fn){
		
	// 	return fn(import, export);
	// }

	app.Module('People', ['Utils'], function(_, U){
		
		_.Class('Person', {
			constructor : function(options){
				options = options || {};
				this.name = options.name || 'John Doe';
			}
		});

		var Programmer = _.Class('Programmer', {
			constructor : function(options){
				options = options || {};
				this.job = U.randomBoolean() ? 'programmer' : 'coder';
			},
			extends : 'Person'
		});
		
		return {
			_ : _,
			Programmer : Programmer,			
			progg : new Programmer({name: 'Jack Tammarat'}),
		};
	});

	global.Nothing = function Nothing(x){
		return new Proxy(x || {}, {
			get: function(data, prop, proxy){
				console.log('Nothing');
				return proxy;
			}
		})
	}

	global.Just = function Just(x){
		return new Proxy(x, {
			get: function(data, prop, proxy){
				var p = data[prop];
				console.log([data, prop, p]);
				return p ? Just(p) : Nothing(p);
			}
		})
	}

})(this);

// init = computed['dane'].call(sniffer, computed['dane']);
// run = computed["dane"].call(data);

// var Asd = Class('Asd', {
// 	constructor : function(){
// 		this.asd = 1111;
// 	},
// 	methods : {}
// });

// var Bsd = Class('Bsd', {
// 	constructor : function(){
// 		this.bsd = 2222;
// 	},
// 	extends : Asd,
// 	methods : {}
// });

// var bsd = new Bsd;

app.Module('Game', [], function(_){

	var map = [];
	var moves = {
		up : [0 , 1],
		down : [0, -1],
		left : [-1, 0],
		right : [1, 0]
	};
	var getFieldById = (map)=>(id)=>map[id](map);
	var getFieldId = (width, height)=>(x,y)=>x+y*10;
	var sumPairs = (a,b)=>objectMap((k,v)=>v+b[k],a);

	var field = (x,y) => ({
		coordinates : [x, y],
		moves : objectMap((k,v)=>{R.pipe(sumPairs, getFieldId, getFieldById)(v)},[moves, [x,y]])
	});

	var genMap;

});



var appData = {
	data: {
		x: 1,
		y: 2
	},
	computed : {
		sum : function(){			
			return this.x + this.y;
		}
	}
};
// var data = Data(appData.data, appData.computed);



// var o = {};
// Object.defineProperty(o, 'b', { set: console.log });

var mac = app.Module('Matz', [], function(_){
	var Dane = _.Class('Dane', {});
	return {
		Dane : Dane,
		dane : new Dane
	};
})


app.Module('asdeee', [], function(_){
	return {Dane : _.Class('Dane', {constructor: function(){}, extends: Function })}
})



var Class = (function(){

	var doNothing = new Function;
	
	var n = Object.freeze({
		extends : doNothing,
		methods : doNothing,
		constructor : doNothing
	});

	var _ = Object.freeze({
		extends : function(extends){
			this.__extends = extends;
		},
		methods : function(methods){
			var scope = this;
			objectMap(methods, function(name, method){
				scope[name] = method;
			});
		},
		constructor : function(constructor){
			this.__constructor = constructor;
		}
	});
		
	var instantiate = R.curry(function(__class, __){
		return function(){
			var o = new __class;
			__extends && __extends.apply(o, arguments);
			__constructor && __constructor.apply(o, arguments);
			return o;
		};
	});

	return function(classFn){
		var _ = Object.create(_); 
		classFn.call(classFn, _);

		return instantiate;
	}
});


Class(function Goxi(_){
	_.extends(Programmer);
	_.constructor(function(){

	});
	_.methods({
		run: function(){
			console.log('Go run!')
		}
	});
});


var module = (function(){
	var modules = {};
	var getModules = function(mArr){
		var m = [];
		mArr.keys().forEach(function(name){
			modules[name] && m.push(modules[name])
		});
		return m;
	};
	return funcion(name, deps, module){
		modules[name] = module.call(null, getModules(deps));
	}
})();