
const searchBar = document.querySelector('#search-bar');
const navLinks = document.querySelector('.links');
const inicio = document.querySelector('#inicio');
const gridImages = document.querySelector('.grid-container');
const inicioDiv = document.querySelector('.section-inicio');
const contactDiv = document.querySelector('.contact-section');
// let products = [];

searchBar.addEventListener('keyup', e => {
  const searchString = e.target.value.toLowerCase();
  const products = document.querySelectorAll('.grid-container img');
  for (let product of products) {
    if (product.alt.toLowerCase().includes(searchString)) {
      product.parentNode.style.display = 'inherit';
    } else {
      product.parentNode.style.display = 'none';
    }
  }
});

/* Show links */
navLinks.addEventListener('click', e => {
  if (e.target.id == "inicio") {
    inicioDiv.style.display = '';
    gridImages.style.display = 'none';
    contactDiv.style.display = 'none';
    searchBar.style.display = 'none';
    // const divs = gridImages.children;
    // for (div of divs) {
    //   div.style.transition = "all 2s ease-in-out";
    //   div.style.height = "0px";
    // }
  } else if (e.target.id == "catalog") {
    gridImages.style.display = '';
    searchBar.style.display = '';
    inicioDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    // gridImages.style.transition = "all 2s ease-in-out";
    // gridImages.style.height = "100px";
  } else if (e.target.id == "contact") {
    contactDiv.style.display = '';
    inicioDiv.style.display = 'none';
    gridImages.style.display = "none";
    searchBar.style.display = 'none';
  }
  // console.log(e.target.id)
  // console.log(gridImages.children);
});

inicioDiv.style.display = 'none';
contactDiv.style.display = 'none';




// const displayFiltered = products => {
//   products.map(product => product.style.display = 'none');
//
// }

// searchBar.addEventListener('keyup', e => {
//   const searchString = e.target.value.toLowerCase();
//   const filteredProducts = products.alt.filter( product => product.includes(searchString));
//   // displayFiltered(filteredProducts);
// });


// searchBar.addEventListener('keyup', e => {
//   const searchString = e.target.value.toLowerCase();
//   const products = document.querySelectorAll('.grid img');
//   const filtered = products.filter( product => product.includes(searchString));
//   filtered.style.display = 'none';
// });
