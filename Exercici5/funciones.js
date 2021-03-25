
 async function a() {

   let b = new Promise( (resolve, reject) => {
      setTimeout( () => {
          doMoreWork();
          resolve("Task done")
      }, 3000)
  })
}

let result = await b;

