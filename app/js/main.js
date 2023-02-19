/* Root elements */
const ROOT_HEADER = document.querySelector('.header');
const ROOT_PRODUCTS = document.querySelector('.products');
const ROOT_SHOPPING = document.querySelector('.shopping');
const ROOT_SPINNER = document.querySelector('.spinner');
const ROOT_ERROR = document.querySelector('.error');
const ROOT_FOOTER = document.querySelector('.footer');

function render() {
  headerPage.render();
  // productsPage.render();
};

let CATALOG = [];

fetch('server/catalog.json')
  .then(result => result.json())
  .then(data => {
    CATALOG = data;

    setTimeout(() => {
      render();
    }, 1000);

  })
  .catch(error => {
    // errorPage.render();
    console.log('Error');
  });