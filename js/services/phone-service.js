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

  static getSorted(value) {
    return phones.slice().sort((a, b) => {
      if (a[value] < b[value]) {
        return -1;
      }

      if (a[value] > b[value]) {
        return 1;
      }

      return 0;
    });
  }

  static async getPhone(id) {
    return (await import(`../../phones/${id}.js`)).default;
  }
}

export default PhoneService;
