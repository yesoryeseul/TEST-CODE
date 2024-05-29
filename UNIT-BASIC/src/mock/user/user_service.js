class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // 유저 비로그인 시 => 특정 상황에서는 stub보다 mock
      // return fetch("http://example.com/login/id+password").then((response) =>
      //   response.json()
      // );
      return this.userClient // 유저 클라이언트를 이용해서
        .login(id, password) // 로그인 진행
        .then((data) => (this.isLogedIn = true)); // 로그인 성공 시 isLogedIn true로 반환하여 로그인을 두 번째 호출 시 로그인이 되어 클라이언트에게 더 이상 요청하지 않는다.
    }
  }
}
