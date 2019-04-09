class BaseComponent {
  constructor({ element }) {
    this._element = element;

    this._render();
  }

  _render() {}
}

export default BaseComponent;
