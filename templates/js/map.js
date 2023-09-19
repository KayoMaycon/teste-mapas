var map;
function initMap() {
    var mapOptions = {
        center: {lat: -3.716816, lng: -38.519115},
        zoom: 4,
        styles: [
            {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke', //alterar borda do pais
                stylers: [
                    {color: '#ff0000'}
                ]
            },

            {
                featureType: 'administrative.country', //caracteristicas geograficas do mapa >> cor do mar/estrada
                elementType: 'geometry.fill', //subdivide as informações -- ex: modificar os textos de uma estrada local aí coloca 'labels'
                stylers: [ //definir que tipo de estilo será aplicado // os outros só selecionam 
                    {lightness: -20} //aumentou a escuridão do conteúdo dos paises
                ]
            },

            {
                featureType: 'administrative.locality', 
                elementType: 'labels.text.fill', 
                stylers: [ 
                    {color: '#0000ff'} 
                ]
            },

            {
                featureType: 'road', 
                stylers: [ 
                    {lightness: -40} 
                ]
            },

            {
                featureType: 'poi', //pontos de interesse sem visibilidade
                stylers: [ 
                    {visibility: 'off'} 
                ]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}