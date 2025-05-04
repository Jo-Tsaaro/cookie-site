function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function alertMsg() {
  const userVisited = getCookie("visited");
  const messageBox = document.getElementById("message");

  if (!userVisited) {
    const msg = "Welcome to our NeuBrutalist site!";
    alert(msg); // Optional popup
    messageBox.textContent = msg;
    setCookie("visited", "yes", 7); // Expires in 7 days
  } else {
    const msg = "Welcome back!";
    messageBox.textContent = msg;
  }
}
