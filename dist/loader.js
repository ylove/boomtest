!function() {
	var d = document;
	var s = d.createElement('script');
	if( !!window.fetch ){        
		s.src = '/dist/main.js';		        
	} else {
		s.src = '/dist/old_client.js';
	}
		d.head.appendChild(s);
}();