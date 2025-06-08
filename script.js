// TOOGLE SECTION
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// GREET ME SECTION
function showResponse() {
  const name = document.getElementById("userInput").value.trim();
  const output = document.getElementById("output");
  if (name) {
    output.textContent = `Hello, ${name}! Welcome to Nature Explorer.`;
  } else {
    output.textContent = "Please enter your name.";
  }
}

// INCREMENT AND DECREMENT SECTION

const ticketCount = document.getElementById("ticketCount");
const incrementBtn = document.getElementById("incrementButton");
const decrementBtn = document.getElementById("decrementButton");
const ticketMessage = document.getElementById("ticketMessage");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  ticketCount.textContent = count;
  ticketMessage.textContent = `You want to buy ${count} ticket${
    count === 1 ? "" : "s"
  }.`;
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    ticketCount.textContent = count;
    ticketMessage.textContent =
      count === 0
        ? "Select the number of tickets you want to buy."
        : `You want to buy ${count} ticket${count === 1 ? "" : "s"}.`;
  }
});

// ALERT SECTION

document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("natureTitle");
  title.addEventListener("click", function () {
    alert("Welcome to the Beauty of Nature!");
    title.classList.add("highlight");
    setTimeout(() => {
      title.classList.remove("highlight");
    }, 1000);
  });
});

// RESET SECTION

document.getElementById("resetButton").addEventListener("click", function () {
  location.reload();
});

// ADD PARAGRAPH SECTION
// ...existing code...

// Add Paragraph Feature
const addParagraphButton = document.getElementById("addParagraphButton");
const paragraphContainer = document.getElementById("paragraphContainer");

if (addParagraphButton && paragraphContainer) {
  addParagraphButton.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent =
      "Thanks for Visiting Us. Enjoy Exploring The Nature and Come Back Again!";
    paragraphContainer.appendChild(p);
  });
}

// ...existing code...
