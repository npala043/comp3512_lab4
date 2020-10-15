

document.addEventListener("DOMContentLoaded", function () {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';


   // first hide loaders and main element 
   document.querySelector("#loader1").style.display = "none";
   document.querySelector("#filters").style.display = "none";
   document.querySelector("#loader2").style.display = "none";
   document.querySelector("#results").style.display = "none";

   // then handle button click 
   document.querySelector("#fetchButton").addEventListener("click", function () {
      // When button is clicked, fetch data and populate select element 
      document.querySelector("main").style.display = "none";
      document.querySelector("#results").style.display = "none";
      document.querySelector("#loader1").style.display = "";
      document.querySelector("#results").innerHTML = "";
      fetch(countryAPI)
         .then(response => response.json())
         .then(data => {
            document.querySelector("main").style.display = "";
            document.querySelector("#loader1").style.display = "none";
            document.querySelector("#filters").style.display = "";
            popCountries(data);
         })
         .catch(err => console.error(err))
   });

   document.querySelector("#countries").addEventListener("change", function (e) {
      // When user selects, fetch data and display images
      document.querySelector("#results").style.display = "none";
      document.querySelector("#loader2").style.display = "";
      fetch(`${photoAPI}?iso=${e.target.value}`)
         .then(response => response.json())
         .then(data => {
            popPhotos(data);
            document.querySelector("#loader2").style.display = "none";
            document.querySelector("#results").style.display = "";
         })
         .catch(err => console.error(err))
   });

   function popPhotos(data) {
      const results = document.querySelector("#results");
      results.innerHTML = "";
      data.forEach(p => {
         const img = document.createElement("img");
         img.src = imageURL + p.filename;
         img.title = p.title;
         img.alt = p.title;
         results.appendChild(img);
      });
   }

   function popCountries(data) {
      const select = document.querySelector("#countries");
      select.innerHTML = "";
      data.forEach(c => {
         const opt = document.createElement("option");
         opt.value = c.iso;
         opt.textContent = c.name;
         select.appendChild(opt);
      });
   }

});