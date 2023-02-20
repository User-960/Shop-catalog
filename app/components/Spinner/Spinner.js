class Spinner {

  handlerClear() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    const html = `
      <div class='container'>
        <div class="spinner__inner">
          <img class="spinner__img" src="../../images/Spinner/spinner.svg" alt="spinner..."/>
        </div>
      </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
};

const spinnerPage = new Spinner();