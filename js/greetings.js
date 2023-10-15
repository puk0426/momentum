const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 페이지의 새로고침을 막기위한 함수
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // form을 다시 숨겨줌
  const username = loginInput.value; // value를 저장
  localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 저장
  paintGreetings(username); // 함수호출
}

// addEventListener 함수는 브라우저가 실행시켜주고 event에 대한 정보도 담아줌
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // submit 이벤트가 발생하면 onLoginSubmit 함수 실행
} else {
  paintGreetings(savedUsername);
}
