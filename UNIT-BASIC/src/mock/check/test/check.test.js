const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  /**
   * jest의 mock 함수를 통해서 실제 함수 구현없이 정확한 테스트가 가능하다.
   */
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("전달된 predicate 함수가 true라면 onSucess 함수를 호출해야 한다.", () => {
    check(() => true, onSuccess, onFail);

    // onSucess는 한 번은 호출되어야 한다. (근데 비효율적임)
    // expect(onSuccess.mock.calls.length).toBe(1);

    // onSuccess 호출 시 yes라는 문자열이 전달되는지도 검증하고 싶을 때, 첫 번째 함수의 첫 번쨰 인자
    // 근데 이것도 좀 비효율적인 코드다.
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");

    // yes라는 인자와 함께 호출되어야 한다.
    expect(onSuccess).toHaveBeenCalledWith("yes");

    // onFail은 한 번이라도 호출되면 안된다
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("predicate가 false라면 onFail 함수를 호출해야 한다.", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
