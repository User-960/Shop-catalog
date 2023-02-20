class LocalStorageUtil {
  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    // Do a check. If there is something in the local storage, then a string will be returned otherwise null will be returned
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;

    // check if items in local storage matched
    // index shows what position id occupies
    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return {pushProduct, products};
  }
};

const localStorageUtil = new LocalStorageUtil();