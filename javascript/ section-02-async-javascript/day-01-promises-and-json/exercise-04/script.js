function DataFetcher() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from the server...");

    setTimeout(() => {
      let success = Math.random() > 0.5;

      if (success) {
        resolve("Data received!");
      } else {
        reject("Failed to fetch data from the server.");
      }
    }, 2000);
  });
}

DataFetcher()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

const myAsyncFunction = async () => {
  try {
    const result = await DataFetcher();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

myAsyncFunction();