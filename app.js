let systemClock = {
  getTime: function() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = systemClock.formatTime(m);
    s = systemClock.formatTime(s);
    document.getElementById("systemClock").innerHTML = h + ":" + m + ":" + s;
  },
  formatTime: function(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
};

let clock = window.setInterval(systemClock.getTime, 1000);

function setUpEventListeners() {
  let profileIcon = document.getElementById("profileIcon");
  profileIcon.addEventListener("dblclick", function() {
    let profileWindow = document.getElementById("profileWindow");
    profileWindow.style.display = "block";
  });

  let xButton = document.getElementById("xButton");
  xButton.addEventListener("click", function() {
    let profileWindow = document.getElementById("profileWindow");
    profileWindow.style.display = "none";
  });
}

setUpEventListeners();
