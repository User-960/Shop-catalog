class Products {
  constructor() {
    this.classNameActive = 'products__item-btn--active';
    this.labelAdd = 'Add to Basket';
    this.labelRemove = 'Remove from Basket';
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