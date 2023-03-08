function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
};

spinnerPage.render();

let CATALOG = [];

fetch('https://gist.githubusercontent.com/User-960/be3152f2020d8b4c9b4c946e7e3a9e30/raw/90e888064e91243e577d216bb817dd717d7eb102/catalog.json')
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