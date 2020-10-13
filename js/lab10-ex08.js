document.addEventListener("DOMContentLoaded", function() {
    
   // the URL for our data
   const endpoint = 'https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=ALL';

   // begin with an empty movies array
   const movies = [];

   // hide form and display loading animation

    

   // fetch from API will populate this empty array using spread operator
   fetch(endpoint)
     .then(response => response.json())
     .then(data => {
         // show form and hide animation
       
         movies.push(...data);

     } )
     .catch(error => console.error(error));


   
   

    // now set up keyboard event handlers
    const searchBox = document.querySelector('.search');
    const suggestions = document.querySelector('#filterList');
    searchBox.addEventListener('keyup', displayMatches);

    // handler for keyboard input
    function displayMatches() {
        // don't start matching until user has typed in two letters
        if (this.value.length >= 2) {
          const matches = findMatches(this.value, movies);

          // first remove all existing options from list
          suggestions.innerHTML = "";

          // now add current suggestions to <datalist>
          matches.forEach( m => {
            var option = document.createElement('option');
            option.textContent = m.title;
            suggestions.appendChild(option);
          })

      }
    }

    // uses filter and regular expression to create list of matching movies
    function findMatches(wordToMatch, movies) {
      return movies.filter(obj => {
          const regex = new RegExp(wordToMatch, 'gi');
          return obj.title.match(regex);
        });
    }

});