(function(){
	var offCanvas = Froffcanvas();
	offCanvas.init();

	var menu = $('#menu-open');
	menu.on('click', function(){
		$(this).toggleClass('open');
	});

})();

(function(Vue){
	// register
	var shared = {contents : []};
	
	Vue.component('content-title', {
	   	render: function (createElement) {
		    return createElement(
		    	'h' + this.level,   // tag name
		    	this.$slots.default // array of children
		    )
		},
	  	props: {
	  		level: {
	  			type: Number,
	  			required: true
	  		}
	  	}
	});

	Vue.component('content-section', {
	  	template: '<section v-bind:id="id"><content-title v-bind:level="level">{{title}}</content-title><slot></slot></section>',
		props: {  	
  			title: {
	  			type: String,
	  			required: true
		  	},
	  		level: {
	  			type: Number,
	  			required: true
	  		}		  	
	  	},
	  	data: function(){
	  		var data = {
	  			level : this.level,
	  			title : this.title,
				id : (()=>String(this.title)
						.toLowerCase()
					    .replace(/\s+/g, '-')
					    .replace(/[^\w\-]+/g, '')
					    .replace(/\-\-+/g, '-')
					    .replace(/^-+/, '')
					    .replace(/-+$/, '')
				)()
				
	  		};
	  		data.link = '#'+data.id;
	  		shared.contents.push(data);
	  		return data;
		}
	});

	Vue.component('table-of-contents', {
		template: '<ul><li v-for="section in contents"><a v-bind:href="section.link"><content-title :level="section.level">{{section.title}}</a></li></ul>',
		data: function(){
			return shared;
		}
	})

	var main = new Vue({
		el: '#main',
		data: {
		    init: false,
		},
		mounted: function () {
	   		this.init = true;
	  	},
	  	computed: {
	  		ready : function(){
	  			return this.init ? "ready" : "";
	  		}
	  	}
	});

	var navigation = new Vue({
		el: '#navigation',
		data : shared
	});


})(Vue);