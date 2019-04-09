import BaseComponent from './base-component.js';
import Search from './search.js';
import Sort from './sort.js';
import ShoppingCart from './shopping-cart.js';
import ProductList from './product-list.js';
import PhoneService from '../services/phone-service.js';

class Products extends BaseComponent {
  constructor(params) {
    super(params);

    this._initComponents();

    this._eventEmitter.subscribe('searchUpdated', (query) => this.searchUpdated(query));
    this._eventEmitter.subscribe('sortUpdated', (query) => this.sortUpdated(query));
    this._eventEmitter.subscribe('clearedSearch', () => this.clearedSearch());
  }

  _render() {
    this._element.innerHTML = `
      <div class="row">
        <div class="col-md-2">
          <section>
            <div data-component="search"></div>
            <p data-component="sort"></p>
          </section>
          <section data-component="shopping-cart"></section>
        </div>
    
        <div class="col-md-10" data-component="product-list"></div>
      </div>`;
  }

  _initComponents() {
    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
      eventEmitter: this._eventEmitter,
    });

    this._sort = new Sort({
      element: this._element.querySelector('[data-component="sort"]'),
      eventEmitter: this._eventEmitter,
    });

    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
      eventEmitter: this._eventEmitter,
    });

    this._productList = new ProductList({
      element: this._element.querySelector('[data-component="product-list"]'),
      products: PhoneService.getAll(),
      eventEmitter: this._eventEmitter,
    });
  }

  searchUpdated(query) {
    this._productList.products = PhoneService.getFiltered(query);
  }

  sortUpdated(value) {
    this._productList.products = PhoneService.getSorted(value);
  }

  clearedSearch() {
    this._search._element.querySelector('input').value = ''
  }
}

export default Products;
