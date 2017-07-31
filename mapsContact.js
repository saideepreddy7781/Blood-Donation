/**
 * Created by Anirban on 03-07-2017.
 */

function myMap() {
    var myCenter = new google.maps.LatLng(28.6995,77.1384);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 19};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    google.maps.event.addListener(marker,'click',function() {
        var infowindow = new google.maps.InfoWindow({
            content:"16/70, Rd Number 70 " +
                       " Pitampura " +
                        ",Delhi, 110026"

    });
        infowindow.open(map,marker);
    });
}