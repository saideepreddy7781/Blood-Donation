/**
 * Created by Anirban on 06-07-2017.
 */
<script>
function myMap() {
    var mapOptions1 = {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom:9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapOptions2 = {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom:9,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var mapOptions3 = {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom:9,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var mapOptions4 = {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom:9,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map1 = new google.maps.Map(document.getElementById("googleMap1"),mapOptions1);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapOptions2);
    var map3 = new google.maps.Map(document.getElementById("googleMap3"),mapOptions3);
    var map4 = new google.maps.Map(document.getElementById("googleMap4"),mapOptions4);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>

    </body>
    </html>
