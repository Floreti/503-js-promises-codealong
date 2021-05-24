console.log('hello promises 👋')

// review of callback functions

// higher order function -- this function gets passed a callback 
function higherOrder(callback) {
  // invoke the function passed as an argument
  callback()
}


// callback function
function cb() {
  console.log('im inside a callback function!')
}

higherOrder(cb)

// inline callback function
higherOrder(() => {
  console.log('hello from an anonymous fucntion! 👋')
})

// PROMISES

const isMomHappy = true

function checkMomsMood(resolve, reject) {
  // the code here runs while the promise is PENDING
  console.log('the promise is pending')
  if(isMomHappy) {
    const newPhone = {
      brand: 'iPhone',
      color: 'gold'
    }
    // pass data to resolve() -> given if promise resolves
    resolve(newPhone) 
  } else {
    const reason = new Error('mom is not happy')
    reject(reason)
  }
}

// // create the promise
const newPhonePromise = new Promise(checkMomsMood)

// // .then syntax promises are 'thennable' 
// newPhonePromise
// .then(phone => {
//   // anticipated result
//   console.log(`THANKS MOM! I love my new ${phone.color} ${phone.brand}! ❤️`)
// })
// .catch(error => {
//   // OH NO something went wrong
//   // run some code to prevent the server from burning down
//   console.log(error)
// })


// async/await
async function getNewPhone() {
  // try catch block to handle errors
  try {
    const phone = await newPhonePromise
    console.log(`WOW MOM! thanks for the new ${phone.color} ${phone.brand}`)
  } catch(error) {
    console.log(error)
  }
}

getNewPhone()

// fetch('https://catfact.ninja/fact')
// .then(response => {
//   // step one -- jsonify response
//   return response.json()
// })
// .then(responseJson => {
//   // step two -- do something with the data
//   console.log(responseJson)
// })
// .catch(error => {
//   // oh no! problem with the fetch
//   console.log(error, 'error from fetch 👩‍🚒')
// })

// refactor to async/await
async function fetchCats() {
  try {
    let response = await (await fetch('https://catfact.ninja/fact')).json()
    // let responseJson = await response.json()
    console.log(response)
  } catch(error) {
    console.log(error)
  }
}

fetchCats()