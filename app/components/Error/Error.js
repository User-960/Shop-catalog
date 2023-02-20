class Error {

  render() {
    const html = `
      <div class="error-container">
        <img class="error__img" src="components/Error/images/error.svg" alt="Error! No access."/>
        <div class="error-message">
          <h3>No access!</h3>
          <p>Try again later.</p>
        </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();