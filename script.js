function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

const experienceSpan = document.getElementById("myExperience");
const joinDate = new Date("October 1, 2023");
const currentDate = new Date();

const monthsDifference =
  (currentDate.getFullYear() - joinDate.getFullYear()) * 12 +
  currentDate.getMonth() -
  joinDate.getMonth();

if (monthsDifference >= 12) {
  const yearsExperience = Math.floor(monthsDifference / 12);
  const remainingMonths = monthsDifference % 12;
  const fractionalYears = remainingMonths / 12;

  if (remainingMonths > 0) {
    const formattedFractionalYears = fractionalYears.toFixed(1);
    experienceSpan.textContent = `${yearsExperience + parseFloat(formattedFractionalYears)} Years`;
  } else {
    experienceSpan.textContent = `${yearsExperience} Year${yearsExperience > 1 ? 's' : ''}`;
  }
} else {
  experienceSpan.textContent = `${monthsDifference} Month${monthsDifference !== 1 ? 's' : ''}`;
}
