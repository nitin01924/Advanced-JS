
        function makeTea() {
  return new Promise((resolve, reject) => {
    console.log("Chai ban rahi hai...");
    setTimeout(() => {
      console.log("☕ Chai ready!");
      resolve();
    }, 2000);
  });
}

function makeToast() {
  return new Promise((resolve, reject) => {
    console.log("Toast ban raha hai...");
    setTimeout(() => {
      console.log("🍞 Toast ready!");
      resolve();
    }, 1500);
  });
}

function eatBreakfast() {
  console.log("😋 Breakfast complete!");
}

// Chaining Promises
makeTea()
  .then(() => makeToast())
  .then(() => eatBreakfast())
  .catch(() => console.log("Kuch galat ho gaya!"));
   