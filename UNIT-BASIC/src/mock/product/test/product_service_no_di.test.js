const ProductServices = require("../product_service_no_di");
const ProductClient = require("../product_client");

// mock을 이용해 의존성을 낮춤
jest.mock("../product_client");

describe("ProductServices", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🐕", available: true },
    { item: "coco", available: false },
  ]);

  /**
   * mockImplementation 메서드는 다른 모듈에서 생성된 모의 함수의 기본 구현을 정의해야 할 때 유용합니다.
   */
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productServices;

  beforeEach(() => {
    productServices = new ProductServices();
    // 만약 clearMocks: false 일 때 각각 초기화 해주고 싶다면 아래 코드
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });

  it("items이 only available인 것만 filter해야 한다.", async () => {
    const items = await productServices.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🐕", available: true }]);
  });

  it("test", async () => {
    const items = await productServices.fetchAvailableItems();

    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
