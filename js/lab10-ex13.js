

/*
    Creates map
*/
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.89474, lng: 12.4839 },
        zoom: 6
    });
    createMarker(map, 41.89474, 12.4839, "Rome");
}

function createMarker(map, latitude, longitude, city) {
    let imageLatLong = { lat: latitude, lng: longitude };
    let marker = new google.maps.Marker({
        position: imageLatLong,
        title: city,
        map: map
    });
}

// map.setTilt(45);

/*
    Creates marker and info window using the passed information
*/


/*
  Now consume web service and add markers to map
*/
document.addEventListener("DOMContentLoaded", function () {

    const endpoint = 'https://gist.githubusercontent.com/rconnolly/13a1f9394ca609f02b7aa00325f011e1/raw/20a9cffa8bf73a10bbaa245a2670fbd4e3be4bc0/cities-it.json';
    // to simplify no error handling for initial response
    fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            // data received, now add cities to map
            data.forEach(city => {
                createMarker(map, city.Latitude,
                    city.Longitude,
                    city.AsciiName);
            });
        })
        .catch(error => console.log(error));
});

