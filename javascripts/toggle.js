document.getElementById("logo-name").addEventListener("click", () => {
  // GESTISCI MENU HOME
  if (document.getElementById("home-menu").classList.contains("home-show")) {
    document.getElementById("home-menu").classList.remove("home-show");
    // GESTISCI MENU CALENEDER
  }
  if (document.getElementById("calender-menu").classList.contains("calender-show")) {
    document.getElementById("calender-menu").classList.remove("calender-show");
  }
  // GESTISCI MESSAGES
  if (document.getElementById("message-menu").classList.contains("message-show")) {
    document.getElementById("message-menu").classList.remove("message-show");
  }
  // GESTISCI project
  if (document.getElementById("project-menu").classList.contains("project-show")) {
    document.getElementById("project-menu").classList.remove("project-show");
  }
  // GESTISCI progress
  if (document.getElementById("progress-menu").classList.contains("progress-show")) {
    document.getElementById("progress-menu").classList.remove("progress-show");
  }
  // GESTISCI goal
  if (document.getElementById("goal-menu").classList.contains("goal-show")) {
    document.getElementById("goal-menu").classList.remove("goal-show");
  }
  document.getElementById("sidebar").classList.toggle("active");
});

// home
document.getElementById("home-btn").addEventListener("click", () => {
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("home-menu").classList.toggle("home-show");
  } else {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("home-menu").classList.toggle("home-show");
  }
});
// calender
document.getElementById("calender-btn").addEventListener("click", () => {
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("calender-menu").classList.toggle("calender-show");
  } else {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("calender-menu").classList.toggle("calender-show");
  }
});
// message
document.getElementById("message-btn").addEventListener("click", () => {
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("message-menu").classList.toggle("message-show");
  } else {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("message-menu").classList.toggle("message-show");
  }
});
// project
document.getElementById("project-btn").addEventListener("click", () => {
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("project-menu").classList.toggle("project-show");
  } else {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("project-menu").classList.toggle("project-show");
  }
});
// progress
document.getElementById("progress-btn").addEventListener("click", () => {
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("progress-menu").classList.toggle("progress-show");
  } else {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("progress-menu").classList.toggle("progress-show");
  }
});
// goal
document.getElementById("goal-btn").addEventListener("click", () => {
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("goal-menu").classList.toggle("goal-show");
  } else {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("goal-menu").classList.toggle("goal-show");
  }
});
