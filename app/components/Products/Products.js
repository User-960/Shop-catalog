class Products {
  constructor() {
    this.classNameActive = 'products__item-btn--active';
    this.labelAdd = 'Add to Basket';
    this.labelRemove = 'Remove from Basket';
  }

  handlerSetLocationStorage(element, id) {
    console.log(element, id)
    
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    // display the number of items in the cart
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach(({id, name, img, price}) => {
      let activeClass = '';
      let activeText = '';

      // checking to compare product id with those in local storage and make changes
      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class="products__item">
          <span class="products__item-name">${name}</span>
          <img class="products__item-img" src="${img}" alt="guitar ${id}"/>
          <span class="products__item-price">
            <i class="bi bi-tag-fill"></i>
             ${price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})} RUB
          </span>
          <button class="products__item-btn${activeClass}" onclick="productsPage.handlerSetLocationStorage(this, '${id}');">
            ${activeText}
          </button>
        </li>
      `;
    });

    const html = `
      <div class='container'>
        <ul class="products__list">
          ${htmlCatalog}
        </ul>
      </div>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
};

const productsPage = new Products();