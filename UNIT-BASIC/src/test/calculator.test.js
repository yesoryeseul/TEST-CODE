const Calculator = require("../calculator");

// 관련 케이스를 하나로 묶는 것
describe("Calculator", () => {
  let cal;

  // beforeEach 는 각 테스트 전 공통으로 준비되어야 하는 것들
  // 각각 테스트는 개별, 독립적으로 수행해야하므로
  // 매 테스트마다 const cal = new Calculator(); 이 인스턴스를 넣어주는 것은 비효율적임!
  // https://jestjs.io/docs/setup-teardown
  beforeEach(() => {
    cal = new Calculator();
  });
  // 초기값 0인 것 확인
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("num set", () => {
    cal.set(1);
    expect(cal.value).toBe(1);
  });

  it("clear num", () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add num", () => {
    cal.set(1);
    cal.add(99);
    expect(cal.value).toBe(100);
  });

  it("add should throw an error if value is greater than 100, 100 이상을 더하면 error 처리가 됩니다", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract num", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiply num", () => {
    cal.set(1);
    cal.multiply(5);
    expect(cal.value).toBe(5);
  });

  describe("Divider", () => {
    it("0 / 0 is NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 is Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("1 / 1 is 1", () => {
      cal.set(1);
      cal.divide(1);
      expect(cal.value).toBe(1);
    });
  });
});
