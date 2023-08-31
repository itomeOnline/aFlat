function mapWidget () {
   

    if (document.querySelector('#locationMap')) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('locationMap', {
                center: [43.096046, 131.862389],
                zoom: 16,
                controls: ['zoomControl']
            }),
        
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {},);
        
            myMap.geoObjects.add(myPlacemark)
        });
    }
}

export default mapWidget;