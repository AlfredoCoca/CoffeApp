// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Diseño Web II',
	dialog: {
		title: 'Diseño Web II',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnComprar').on('click', function () {
  app.dialog.alert('!Tu compra fue realizada correctamente!');
});

$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Desea procesar su compra?', function () {
    app.dialog.alert('!Tu compra fue realizada correctamente!');
  });
});



 

