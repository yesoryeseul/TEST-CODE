class StubProductClient {
  // 네트워크에 의존하지 않는 형태로 데이터를 리턴
  async fetchItems() {
    return [
      { item: "🐕", available: true },
      { item: "coco", available: false },
    ];
  }
}

module.exports = StubProductClient;
