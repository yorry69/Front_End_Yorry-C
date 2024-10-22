//asychronous Js

//synchronous -> single thread -> blocking
console.log("proses 1");
console.log("proses 2");
console.log("proses yg memakan waktu lama");
console.log("proses 4");

//asynchronous -> multi thread
// 1. Parallel
setTimeout(( )=> {
    console.log("Proses 1");
} , 3000);
console.log("proses 2");
setTimeout(( )=> {
    console.log("Proses 3");
} , 3000);
console.log("proses 4");

//2. Concurent
setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
        console.log("Proses 2");
        setTimeout(() => {
            console.log("Proses 3");
            setTimeout(() => {
                console.log("Proses 4");
            }, 3000);
        },3000);
    },3000);
},3000);

//Promise
let condition = true
let nemPromise = new Promise ((resolve,reject) => {
    if (condition) {
        resolve("berhasil");
    } else {
        reject("gagal");
    }
});

//pakai promise
//1. then - catch
newPromise
  .then((result) => result)
  .then((result2) => console.log(result2))
  .catch((error) => console.log(error));

//2. Async - await
//harus dibuat dalam fungsi

const consumePromise = async () => {
    try {
        let result = await newPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

consumePromise();

//Pakai promise yg sudah ada
// 1. fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

(async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await response.json();
    json.forEach(({name}) => console.log(name));
})();

//2.axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => consoke.log(result.data));

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach (({name}) => console.log(name));
})();