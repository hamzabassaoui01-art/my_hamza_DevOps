const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

function changeInformation() {
  title.textContent = "Welcome to My Website!";
  title.style.color = "blue";

  paragraph.textContent = "I am learning JavaScript and DevOps.";
  paragraph.style.color = "green";
}

title.addEventListener("click", changeInformation);
