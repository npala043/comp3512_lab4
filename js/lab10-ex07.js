import { getPaintingData }  from "./paintings.js";

const main = document.querySelector('main');
const paintings = getPaintingData();
paintings.forEach( (p) => {
   main.appendChild( p.render() );
});
const url = "https://www.randyconnolly.com/funwebdev/3rd/async-post.php";

// set up button handlers here using event delegation
document.querySelector('main').addEventListener('click', (e) => {

});