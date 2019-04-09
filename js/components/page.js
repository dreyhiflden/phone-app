import BaseComponent from './base-component.js';
import Search from './search.js';
import Sort from './sort.js';
import ShoppingCart from './shopping-cart.js';
import ProductList from './product-list.js';
import PhoneService from '../services/phone-service.js';
import ProductItem from './product-item.js';

class Page extends BaseComponent {
  constructor(params) {
    super(params);

    this._initComponents();
  }

  _render() {
    this._element.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <section>
              <div data-component="search"></div>
              <p data-component="sort"></p>
            </section>
            <section data-component="shopping-cart"></section>
           </div>
      
           <div class="col-md-10" data-component="product-list"></div>
        </div>
        <div hidden class="row" data-component="product-item"></div>
      </div>
      `;
  }

  _initComponents() {
    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
      parent: this,
    });

    this._sort = new Sort({
      element: this._element.querySelector('[data-component="sort"]'),
    });

    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
    });

    this._productList = new ProductList({
      element: this._element.querySelector('[data-component="product-list"]'),
      products: PhoneService.getAll(),
      parent: this,
    });

    this._productItem = new ProductItem({
      element: this._element.querySelector('[data-component="product-item"]'),
    });
  }

  searchUpdated(query) {
    this._productList.products = PhoneService.getFiltered(query);
  }

  phoneSelected(phoneId) {
    debugger;
  }
}

export default Page;
