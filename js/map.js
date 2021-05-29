let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.752240, 37.576469],
        zoom: 13,
        controls: []
    });

    const coords = [
        [55.740312, 37.588568],
        [55.752830, 37.571012],
        [55.750907, 37.608814],
        [55.769651, 37.605019]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#Image',
        iconImageHref: "./images/marker.png"
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);