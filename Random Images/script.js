"use strict";

function getRandomImage(searchQuery) {
    let endpoint = 'https://source.unsplash.com/random';
  
    if (searchQuery) {
      endpoint += '/?' + searchQuery;
    }
  
    fetch(endpoint)
      .then(function (response) {
        let imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '<img src="' + response.url + '" alt="Random">';
      })
      .catch(function (error) {
        console.log('Error:', error);
      });
  }
  
  let randomImageButton = document.getElementById('randomImageButton');
  randomImageButton.addEventListener('click', function () {
    let searchQuery = document.getElementById('searchInput').value;
    getRandomImage(searchQuery);
  });
  