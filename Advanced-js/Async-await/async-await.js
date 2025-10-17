
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
      // makeTea()
      //   .then(() => makeToast())
      //   .then(() => eatBreakfast())
      //   .catch(() => console.log("Kuch galat ho gaya!"));

      // The async await is same as the promise function but just changes in the final things which is just the code that makes it better to understand and increase readiblity.

      async function morningRoutine() {
        try {
          await makeTea();
          await makeToast();
          eatBreakfast();
        } catch (error) {
          console.log("Kuch galat ho gaya!", error);
        }
      }

      morningRoutine();
 