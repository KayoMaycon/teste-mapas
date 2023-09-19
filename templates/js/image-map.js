var map;

function initMap() {
    var mapOptions = {
        center: {lat: -3.716816, lng: -38.519115},
        zoom: 8,
        mapTypeControlOptions: {
            mapTypeIds: ['osm', 'terrain']
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // ImageMapType
    var imageMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256, 256),
        getTileUrl: function(coord, zoom) {
            return 'http://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
        },
        maxZoom: 18,
        name: 'Open Street'
    });

    map.mapTypes.set('osm', imageMapType);
    map.setMapTypeId('osm');
}