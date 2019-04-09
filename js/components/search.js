import BaseComponent from "./base-component.js";

class Search extends BaseComponent {

  _render() {
    this._element.innerHTML = `
        <p>
            Search:
            <input>
          </p>
        `;


  }
}

export default Search;
