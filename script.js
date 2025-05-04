function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 1000).toUTCString(); //1000ms = 1s
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
    const msg = "New Visitor!";
    alert(msg); // Optional popup
    messageBox.textContent = msg;
    setCookie("visited", "yes", 5); // Expires in n * 1s
  } else {
    const msg = "Old Visitor";
    messageBox.textContent = msg;
  }
}
