const UserClient = require("../user_client");
const UserService = require("../user_service");

jest.mock("../user_client");

describe("UserService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  // 첫 번쨰 로그인이라면 로그인을 했는지 확인
  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });

  // 로그인 후 다시 로그인을 시도하면 그래도 로그인 클라이언트는 딱 한번 호출되어야함
  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");

    expect(login.mock.calls.length).toBe(1);
  });
});
