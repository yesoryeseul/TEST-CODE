const add = require("../add");

// npm run test
test("adds 1 + 2 to equal 3", () => {
  // 테스트 코드 작성
  // npm install @types/jest
  expect(add(1, 2)).toBe(3);
});

/**
 * 매번 코드 커버리지를 보지 않으려면
 * jest.config.js
 * collectCoverage: true, 를 false로 두고
 * jest --coverage 명령어로 필요 시에만 확인한다.
 */
