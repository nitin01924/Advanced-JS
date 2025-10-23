function makeTea() {
  return new Promise((resolve, reject) => {
    console.log("Chai ban rahi hai...");

    setTimeout(() => {
      let gasKhatam = Math.random() > 0.5; // 50% chance error hone ka
      if (gasKhatam) {
        reject("⛽ Gas khatam ho gayi!");
      } else {
        console.log("☕ Chai ready!");
        resolve();
      }
    }, 2000);
  });
}

function makeToast() {
  return new Promise((resolve) => {
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

// ✅ async/await version
async function morningRoutine() {
  try {
    await makeTea();   // agar yahan reject hua, neeche ka code skip ho jaayega
    await makeToast();
    eatBreakfast();
  } catch (error) {
    console.log("❌ Error:", error);
  } finally {
    console.log("🔁 Morning routine complete (ya fail).");
  }
}

morningRoutine();
