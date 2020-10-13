document.addEventListener("DOMContentLoaded", function() {
   console.log('Testing Promises');
   document.querySelector('#catButton').addEventListener('click', () => {
      simplePromise('cats.jpg');
   });
   document.querySelector('#farmButton').addEventListener('click', () => {
      simplePromise('farm.jpg');
   });
   document.querySelector('#mistakeButton').addEventListener('click', () => {
      simplePromise('mistake.jpg');
   });      
   document.querySelector('#completeButton').addEventListener('click', () => {
      chainedPromises('cats.jpg');
   }); 
   document.querySelector('#simultaneousButton').addEventListener('click', () => {
      simultaneousPromises('afewdogs.jpg');
   });       

});


function simplePromise(filename) {
      
}


function chainedPromises(filename) {

}

function simultaneousPromises(filename) {

}




    