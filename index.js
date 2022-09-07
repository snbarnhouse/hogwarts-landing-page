function patronus() {
    let time = prompt("Do you prefer day or night?");
    let landWater = prompt("Do you prefer land or water?");
    time = time.toLowerCase();
    landWater = landWater.toLowerCase();
    time = time.trim();
    landWater = landWater.trim();
    if (time === "day" && landWater === "land") {
      alert("Your patronus is a Unicorn! 🦄");
    } else if (time === "day" && landWater === "water") {
      alert("Your patronus is a Dolphin! 🐬");
    } else if (time === "night" && landWater === "land") {
      alert("Your patronus is an Owl! 🦉");
    } else {
      alert("Your patronus is a Frog! 🐸");
    }
  }
  let button = document.querySelector(".patronus");
  button.addEventListener("click", patronus);