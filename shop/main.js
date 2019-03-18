import React from 'react';
import ReactDOM from 'react-dom';

window.customElements.define('new-shop', class extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      const name = this.getAttribute('name');
      ReactDOM.render(<h1>Shop {name}</h1>, mountPoint);
    }
  }
  );