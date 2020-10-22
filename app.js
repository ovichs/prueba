const searchBar = document.querySelector('#search-bar');
// let products = [];

// const displayFiltered = products => {
//   products.map(product => product.style.display = 'none');
//
// }

// searchBar.addEventListener('keyup', e => {
//   const searchString = e.target.value.toLowerCase();
//   const filteredProducts = products.alt.filter( product => product.includes(searchString));
//   // displayFiltered(filteredProducts);
// });

searchBar.addEventListener('keyup', e => {
  const searchString = e.target.value.toLowerCase();
  const products = document.querySelectorAll('.grid img');
  for (let product of products) {
    if (product.alt.toLowerCase().includes(searchString)) {
      product.style.display = 'inherit';
    } else {
      product.style.display = 'none';
    }
  }
});
