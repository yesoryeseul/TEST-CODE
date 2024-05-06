const ProductServices = require("../product_service");
const StubProductClient = require("./stub_product_client");

describe("ProductServices - stub", () => {
  let productService;
  beforeEach(() => {
    productService = new ProductServices(new StubProductClient());
  });

  it("items이 only available인 것만 filter해야 한다.", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🐕", available: true }]);
  });
});
