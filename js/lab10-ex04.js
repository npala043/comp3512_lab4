document.addEventListener("DOMContentLoaded", function () {
    let url = 'https://api.github.com/orgs/funwebdev-2nd-ed/repos';

    // use fetch to request data from an API

    // let foo = fetch(url);
    // let bar = foo.then(response => { console.dir(response) });
    // console.dir(foo);

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                });
            }
        })
        .then(data => console.dir(data))
        .catch(err => console.log(err));
    console.log('after the fetch');

});