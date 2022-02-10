class MiFooter // herencia de HTMLelemnt
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Andrade V. Jose Miguel | Proyecto web
      </p>`;
  }
}

customElements.define( //NUEVA ETIQUETA ASOCIADA
  "mi-footer", MiFooter);