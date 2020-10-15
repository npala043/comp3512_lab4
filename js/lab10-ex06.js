document.addEventListener("DOMContentLoaded", function () {

    // the URL for our data
    const endpoint = 'https://gist.githubusercontent.com/rconnolly/32fbb9d76141dac1d48b457682b3289b/raw/9e6f381feb3186aeaeb8f0adbafb42829bf98399/universities.json';

    // begin with an empty universities array
    const universities = [];

    // fetch from API will populate this empty array using spread operator
    fetch(endpoint)
        .then(response => response.json())
        .then(data => universities.push(...data))
        .catch(err => console.error(err));

    const searchBox = document.querySelector('.search');
    const suggestions = document.querySelector('#filterList');
    searchBox.addEventListener('keyup', displayMatches);

    // handler for keyboard input
    function displayMatches() {
        // don't start matching until user has typed in two letters
        if (this.value.length >= 2) {
            const matches = findMatches(this.value, universities);
            // first remove all existing options from list
            suggestions.innerHTML = "";
            // now add current suggestions to <datalist>
            matches.forEach(univ => {
                var option = document.createElement('option');
                option.textContent = univ.name + ', ' + univ.city;
                suggestions.appendChild(option);
            });
        }
    }

    // uses filter and regular expression to create list of matching
    universities
    function findMatches(wordToMatch, universities) {
        return universities.filter(obj => {
            const regex = new RegExp(wordToMatch, 'gi');
            return obj.name.match(regex);
        });
    }
});