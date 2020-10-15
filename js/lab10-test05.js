function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.0447, lng: -114.0719 },
        mapTypeId: 'satellite',
        zoom: 18
    });
}

function updateMap(lati, long) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lati, lng: long },
        mapTypeId: 'satellite',
        zoom: 18
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const endpoint = 'https://gist.githubusercontent.com/rconnolly/a0ad7768d65b6fa46f4e007a1cf27193/raw/38696e5b84cd6b66667a6b87c66c058ab2606ba2/galleries.json';
    const a = document.querySelector(".a");
    const b = document.querySelector(".b");
    const c = document.querySelector(".c");
    const d = document.querySelector(".d");

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            displayGalleries(data);
            applyGalleryEventHandlers(data);
            document.querySelector(".b section").style.display = "block";
        })
        .catch(err => console.error(err));

    // v------------------------v Helper Functions v------------------------v //

    function applyGalleryEventHandlers(data) {
        const lis = document.querySelectorAll("#galleryList li");
        lis.forEach(li => {
            li.addEventListener("click", function (e) {
                const gallery = data.find(gallery => gallery.nameEn == e.target.innerHTML);

                displayGalleryInfo(gallery);
                document.querySelector(".a section").style.display = "grid";

                displayPaintings(gallery.paintings)
                document.querySelector(".c section").style.display = "block";

                updateMap(gallery.location.latitude, gallery.location.longitude);
            });
        });
    }

    function displayPaintings(data) {
        document.querySelector("#paintingList").innerHTML = "";
        data.forEach(p => {
            const li = document.createElement("li");
            li.innerHTML = `${p.title}`;
            document.querySelector("#paintingList").appendChild(li);
        });
    }

    function displayGalleryInfo(data) {
        document.querySelector("#galleryName").innerHTML = `${data.nameEn}`;
        document.querySelector("#galleryNative").innerHTML = `${data.nameNative}`;
        document.querySelector("#galleryCity").innerHTML = `${data.location.city}`;
        document.querySelector("#galleryAddress").innerHTML = `${data.location.address}`;
        document.querySelector("#galleryCountry").innerHTML = `${data.location.country}`;
        document.querySelector("#galleryHome").href = `${data.link}`;
        document.querySelector("#galleryHome").innerHTML = `${data.link}`;
    }

    function displayGalleries(data) {
        let ul = document.createElement("ul");
        ul.id = "galleryList";
        data.forEach(g => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`${g.nameEn}`));
            ul.appendChild(li);
        });
        b.appendChild(ul);
    }

});

