/**
 * Created by Anirban on 05-07-2017.
 */


function myMap() {
    var myCenter = new google.maps.LatLng(28.6934,77.1310);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 19};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter,animation: google.maps.Animation.BOUNCE});
    marker.setMap(map);
    google.maps.event.addListener(marker,'click',function() {
        var infowindow = new google.maps.InfoWindow({
            content:"My Location"
        });
        infowindow.open(map,marker);
    });
}



