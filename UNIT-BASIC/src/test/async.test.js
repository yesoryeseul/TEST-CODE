const fetchProduct = require("../async");

describe("Async", () => {
  // done 방식은 오래 걸린다.. 추천 X
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Coffee", price: 2000 });
    });
    done();
  });

  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Coffee", price: 2000 });
    });
  });

  // async - await
  it("async - await", async () => {
    const data = await fetchProduct();
    expect(data).toEqual({ item: "Coffee", price: 2000 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Coffee",
      price: 2000,
    });
  });

  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network ERROR!");
  });
});
