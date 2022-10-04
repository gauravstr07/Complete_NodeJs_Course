let a = 20;
let b = 0;

let waitData = new Promise((res, rej) => {
    console.log('Calling waitData');
  setTimeout(() => {
    console.log("Calling setTimeout");
    res(30);
  }, 1000);
});

waitData
  .then((result) => {
    console.log(a + result);
  })
  .catch((err) => {
    console.log("something went wrong");
  });
console.log(`Afer exucuting ${a}`);