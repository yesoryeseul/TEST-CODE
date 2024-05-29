/**
 * user_client 를 만드는 이유는 서비스 내부(user_service)에서 내부적으로 fetch를 직접 하게 된다면 단위 테스트를 하기 어렵기 때문에 user_client는 Mock이나 Stub을 사용해서 충분히 네트워크를 사용하지 않고 단위테스트가 가능
 */
class UserClient {
  login(id, password) {
    return fetch("http://example.com/login/id+password").then((response) =>
      response.json()
    );
  }
}

module.exports = UserClient;
