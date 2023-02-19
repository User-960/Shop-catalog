class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  };

  render(count) {
    const html = `
      <div class="container">
        <div class="header__inner">
          <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
            <i class="bi bi-basket2"></i>
            <span class="header-counter__number">${count}</span>
          </div>
        </div>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  };
};

const headerPage = new Header();