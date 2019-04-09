import phones from '../../phones/phones.js';

class PhoneService {
  static getAll() {
    return phones;
  }

  static getFiltered(query) {
    return phones.filter(phone => {
      return phone.name.toLowerCase().includes(query.toLowerCase());
    });
  }
}

export default PhoneService;
