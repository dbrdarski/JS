(function($){
	
	window.run = function(ex){
		return ex.run();
	};


	// ====================== //
	// === UTIL FUNCTIONS === //
	// ====================== //

	var U = {
		randomBoolean : function(){
			return Math.random() >= 0.5;
		}
	};


	window.EX1 = function(){

	// ================== //
	// === EXERCISE 1 === //
	// ================== //

		function Person(data){
			// TODO set public properties firstName, lastName, age and sex provided by the data (object) argument.
			// If not provided in data object, they should default to "John", "Doe", 18 and "male" respectively.
		}

		function run(){
			// initalize a person object and return it.
		}
		
	// === END === //

		return {
			run : run
		};
		
	}();


	window.EX2 = (function(){
		
		var randomData = function(){
			if( U.randomBoolean() ){
				return { work_experience : { company: { name: 'ACME', from: '15/03/2015' } } }
			} else {
				return { voluteering: { organization: { name: 'Mozilla', from: '21/04/2013', to: '24/04/2014' } } }
			}
		};

	// ================== //
	// === EXERCISE 2 === //
	// ================== //

		var getCompanyName = function(personData){
			
			// TODO: Return the name of company or false value;

		};
		
	// === END === //

		var run = function(){
			return { 
				mark : getCompanyName(randomData()),
				john : getCompanyName(randomData()),
				jenny : getCompanyName(randomData())
			}
		};

		return {
			run : run
		};
	})();



	// ================== //
	// === EXERCISE 3 === //
	// ================== //

	window.typeOf = function(value){
		var t = typeof value;
		
		// TODO: Handle the bad ones

	}();

	// === END === //

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

	// window.ImmutableMap = ImmutableMap;

	// ================== //
	// === EXERCISE 5 === //
	// ================== //

	// Implement arrayReduce function

	// ================== //
	// === EXERCISE 6 === //
	// ================== //

	// Implement arrayMap function

	// ================== //
	// === EXERCISE 7 === //
	// ================== //

	// Implement arrayFilter function

	// ================== //
	// === EXERCISE 8 === //
	// ================== //

	// Implement objectMap function

	// ================== //
	// === EXERCISE 9 === //
	// ================== //

	// Implement objectReduce function



})(jQuery);