function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function saveName() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    setCookie("username", name, 7);
    showGreeting(name);
  } else {
    alert("Please enter a valid name.");
  }
}

function showGreeting(name) {
  const greetingBox = document.getElementById("greeting");
  greetingBox.textContent = `Hello, ${name}! Welcome back.`;
}

function resetName() {
  setCookie("username", "", -1);
  document.getElementById("greeting").textContent = "Name has been reset.";
}

window.onload = function () {
  const name = getCookie("username");
  if (name) {
    showGreeting(name);
  }
};