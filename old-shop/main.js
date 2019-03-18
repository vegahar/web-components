import React from 'react';
import ReactDOM from 'react-dom';

window.customElements.define('old-shop', class extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      const name = this.getAttribute('name');
      ReactDOM.render(<h4>From the old shop {name}</h4>, mountPoint);
    }
  }
  );