jQuery( function() {
    if( jQuery('div','.text').hasClass('google_map') ){

        //setting
		var myOptions = {
			center: new google.maps.LatLng(37.511195, 127.053893),
			zoom: 18,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

		//marker
		var marker;
		var latlng = new google.maps.LatLng(37.511195, 127.053893);
		marker = new google.maps.Marker({ 
			position: latlng, 
			map: map,
			title: '(주) 얼티온'
		});

		//event
		var text =  '<div class="googlemap-opendiv">'+
		'<div id="googlemap-title">'+
			'<div id="googlemap-text">'+
				'주소: 서울특별시 강남구 삼성동 120-7<br/>'+
				'전화: 02-539-5961<br/>'+
			'</div>'+
			'<br/><a href="http://www.ultion.co.kr" linkType="external" target="_blank" title="IT 통합 솔루션 구축, 얼티온 사이트에 오신것을 환영합니다."></a>'+
		'</div>'
		
		var infowindow = new google.maps.InfoWindow({ 
			content: text
			//maxWidth: 500
			//Size: new google.maps.Size(600,600)
		});
		//https://developers.google.com/maps/documentation/javascript/reference?hl=ko
		google.maps.event.addListener(marker, 'mouseover', function() { 
			infowindow.open(map, marker);
		});
		

		

		//address
	//	geocoder = new google.maps.Geocoder();
	//	geocoder.geocode({'latLng': latlng}, function(results, status) {
	//      if (status == google.maps.GeocoderStatus.OK) {
	//		if (results[0]) {
	//			var address_nm = results[0].formatted_address;
	//			document.getElementById('map_addr').innerHTML = address_nm;
	//		}
	//      } 
	//	});

		//load
		google.maps.event.addDomListener(window, 'load', infowindow.open(map, marker));
		
		

		
		
		
		
	}
});     