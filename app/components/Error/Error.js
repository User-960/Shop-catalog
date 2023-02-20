class Error {

  render() {
    const html = `
      <div class="container">
        <div class="error__inner">
          <img class="error__img" src="../../images/Error/error.svg" alt="Error! No access."/>
          <div class="error__message">
            <h3>No access!</h3>
            <p>Try again later.</p>
          </div>
        </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();