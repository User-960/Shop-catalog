function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
};

spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json')
  .then(result => result.json())
  .then(data => {
    CATALOG = data;

    setTimeout(() => {
      spinnerPage.handlerClear();
      render();
    }, 1000);

  })
  .catch(error => {
    spinnerPage.handlerClear();
    errorPage.render();
  });