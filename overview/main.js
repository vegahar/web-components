class Shop extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      const name = this.getAttribute('name');
      ReactDOM.render(<h1>Shop {name}</h1>, mountPoint);
    }
  }
  customElements.define('new-shop', Shop);