class Shopping {
  handlerClear() {
    ROOT_SHOPPING.innerHTML = '';
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = ``;
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        // display as a table (1 line <tr>, 2 <td> are the name and price)
        htmlCatalog += `
          <tr>
            <td class="shopping__item-name"><i class="bi bi-tag-fill"></i> ${name}</td>
            <td class="shopping__item-price">${price.toLocaleString()} RUB</td>
          </tr>
        `;

        sumCatalog += price;
      }
    });

    const html = `
      <div class='container'>
        <div class="shopping__inner">
          <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
          <table>
            ${htmlCatalog}
            <tr>
              <td class="shopping__item-name"><i class="bi bi-cart-check-fill"></i> Total:</td>
              <td class="shopping__item-price">${sumCatalog.toLocaleString()} RUB</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    ROOT_SHOPPING.innerHTML = html;
  }
};

const shoppingPage = new Shopping();

// The Shopping component itself is not called directly. Called only when the cart is clicked.