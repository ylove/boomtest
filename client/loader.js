!function() {
	var d = document;
	var s = d.createElement('script');
	if( !!window.fetch ){        
		s.src = '/client/main.js';		        
	} else {
		s.src = '/dist/client.js';
	}
		d.head.appendChild(s);
}();