class PhoneService {
  static async getAll() {
    const response = await fetch('https://mate-academy.github.io/phone-catalogue-static/api/phones.json');

    return await response.json();
  }

  static async getFiltered(query) {
    const phonesList = await fetch('https://mate-academy.github.io/phone-catalogue-static/api/phones.json');
    let phones = await phonesList.json();

    return await phones.filter(phone => {
      return phone.name.toLowerCase().includes(query.toLowerCase());
    });
  }

  static async getSorted(value) {
    const phonesList = await fetch('https://mate-academy.github.io/phone-catalogue-static/api/phones.json');
    let phones = await phonesList.json();

    return await phones.slice().sort((a, b) => {
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
