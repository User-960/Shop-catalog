function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
};

let CATALOG = [];

fetch('server/catalog.json')
  .then(result => result.json())
  .then(data => {
    CATALOG = data;
    console.log(CATALOG)

    setTimeout(() => {
      render();
    }, 1000);

  })
  .catch(error => {
    // errorPage.render();
    console.log('Error');
  });