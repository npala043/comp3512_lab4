// before you start, view this url in the browser to see its sructure
const url = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';

document.addEventListener("DOMContentLoaded", function () {

    // fetch the continents from the api in url

    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            displayContinents(data);
            addAlerts();
        })
        .catch(error => console.error(error));

    function displayContinents(continents) {
        const list = document.querySelector('.box ul');
        for (let c of continents) {
            const item = document.createElement('li');
            item.textContent = c.name;
            list.appendChild(item);
        }
    }

    function addAlerts() {
        const items = document.querySelectorAll('.box ul li');
        console.log(items);
        for (let li of items) {
            li.addEventListener('click', (e) => {
                alert(e.target.textContent);
            })
        }
    }

});