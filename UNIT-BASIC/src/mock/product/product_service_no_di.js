const ProductClient = require("./product_client");

class ProductServices {
  // class에서 이렇게 스스로 의존을 결정하고 정의하고 작성하는 것은 dependency injection 원칙에 어긋난다
  constructor() {
    this.productClient = new ProductClient();
  }

  // 외부에서 주어진 것(productClient) 을 사용해 의존성을 역전 한다
  // constructor(productClient) {
  //   this.productClient = productClient;
  // }

  // 사용자가 구매 가능한 아이템만 받아오는 로직, 이걸 테스트하고 싶은 상황
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductServices;
