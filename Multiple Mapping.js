/**
 * Created by Anirban on 06-07-2017.
 */


var locations = [
    ['APJ School', 28.6901, 77.1211,4],
    ['St.Stephas Senior Secondary', 28.7101,77.1407, 5],
    ['Simple For All NGO', 28.7043,77.1384, 3],
    ['Sparsh NGO', 28.6979, 77.1444, 2],
    ['My Location', 28.6934,77.1310, 1]
];

var map = new google.maps.Map(document.getElementById('Map'), {
    zoom: 13,
    center: new google.maps.LatLng(28.6980,77.1350),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}