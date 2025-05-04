function setCookie(name, value, seconds) {
  const expires = new Date(Date.now() + seconds * 3000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function showGreeting(name, isReturning) {
  const greetingBox = document.getElementById("greeting");
  if (isReturning) {
    greetingBox.textContent = `Welcome back, ${name}!`;
  } else {
    greetingBox.textContent = `Hello, ${name}!`;
  }
}

function saveName() {
  const name = document.getElementById("username").value.trim();

  if (name) {
    const alreadyVisited = getCookie("visited");

    setCookie("username", name, 30);
    setCookie("visited", "yes", 30);

    showGreeting(name, !!alreadyVisited);
    startCookieTimer(30);
  } else {
    alert("Please enter a valid name.");
  }
}

function resetName() {
  deleteCookie("username");
  deleteCookie("visited");

  document.getElementById("greeting").textContent = "Hello, Guest! Please enter your name above.";
  document.getElementById("timer").textContent = "";
}

function startCookieTimer(seconds) {
  const timerBox = document.getElementById("timer");
  let timeLeft = seconds;

  timerBox.textContent = `Cookie expires in: ${timeLeft}s`;

  const interval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      timerBox.textContent = `Cookie expires in: ${timeLeft}s`;
    } else {
      clearInterval(interval);
      timerBox.textContent = "Cookie expired!";
    }
  }, 3000);
}

window.onload = function () {
  const name = getCookie("username");
  const visited = getCookie("visited");
  const greetingBox = document.getElementById("greeting");

  if (name && visited) {
    showGreeting(name, true);
    startCookieTimer(30); // Optional: resume timer on load
  } else {
    greetingBox.textContent = "Hello, Guest! Please enter your name above.";
    document.getElementById("timer").textContent = "";
  }
};
