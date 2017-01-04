// Страница Проекты - Карта
var map;
function initMap() {
	var myLatLng = {lat: 53.311315, lng: 50.528891};
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 9,
		scrollwheel: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
		styles: [
		{
			'featureType': 'administrative',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#0080ff'
			},
			{
				'saturation': 29
			},
			{
				'lightness': -52
			},
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'administrative',
			'elementType': 'labels.text',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'administrative',
			'elementType': 'labels.text.stroke',
			'stylers': [
			{
				'visibility': 'off'
			}
			]
		},
		{
			'featureType': 'administrative.locality',
			'elementType': 'geometry',
			'stylers': [
			{
				'hue': '#ffffff'
			},
			{
				'lightness': 100
			},
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'landscape',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#ffffff'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 100
			},
			{
				'visibility': 'simplified'
			}
			]
		},
		{
			'featureType': 'landscape.man_made',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#ffffff'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 100
			},
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'landscape.natural',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#ffffff'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 100
			},
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#999999'
			},
			{
				'saturation': -100
			},
			{
				'lightness': -23
			},
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'poi.park',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#ffffff'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 100
			},
			{
				'visibility': 'off'
			}
			]
		},
		{
			'featureType': 'poi.school',
			'elementType': 'labels',
			'stylers': [
			{
				'hue': '#999999'
			},
			{
				'saturation': -100
			},
			{
				'lightness': -28
			},
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#00559B'
			},
			{
				'saturation': 100
			},
			{
				'lightness': -53
			},
			{
				'visibility': 'simplified'
			}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'all',
			'stylers': [
			{
				'saturation': 100
			},
			{
				'lightness': -60
			},
			{
				'visibility': 'simplified'
			},
			{
				'color': '#c9deff'
			}
			]
		}
		]
	});

	/*var image = '../images/map.svg';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		//icon: image,
		title: 'маркер 3'
	});

	var marker_2 = new google.maps.Marker({
		position: {lat: 53.317664, lng: 50.417892},
		map: map,
		//icon: image,
		title: 'маркер 2'
	});

	map.addListener('center_changed', function() {
		window.setTimeout(function() {
			map.panTo(marker.getPosition());
		}, 3000);
	});

	marker.addListener('click', function() {
		map.setZoom(9);
		map.setCenter(marker.getPosition());
	});*/

	//var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var markers = locations.map(function(location, i) {
		return new google.maps.Marker({
			position: location,
			//label: labels[i % labels.length],
			icon: './images/m2.png'
		});
	});

	for (var k = 0; k < markers.length; k++) {
		(function (k) {
			google.maps.event.addListener(markers[k], 'click', function() {
				$('#map-section').find('[data-marker-index=\'' + k + '\']').fadeToggle(300)
				.siblings().hide();
			});
		})(k);
	};
	

	var mcOptions = {
		//imagePath: '../images/m',
		styles:[{
			url: './images/m1.png',
			width: 53,
			height:53,
			fontFamily:'roboto',
			textSize:30,
			textColor:'#fefefe'
		}]
	};

	var markerCluster = new MarkerClusterer(map, markers, mcOptions
		//{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
		);

};
//Координаты маркеров
var locations = [
{lat: 53.419851, lng: 49.745346},
{lat: 52.945133, lng: 49.416543},
{lat: 53.337532, lng: 49.872730},
{lat: 53.672330, lng: 51.682803},
{lat: 53.224292, lng: 50.155740},
{lat: 53.245185, lng: 50.286637},
{lat: 53.193766, lng: 50.225353},
{lat: 53.639176, lng: 49.493300}
];
//Конец страницы Проекты - Карта