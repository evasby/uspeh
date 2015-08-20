ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("yamap", {
        center: [53.9056, 27.4501],
        zoom: 17
    });
}