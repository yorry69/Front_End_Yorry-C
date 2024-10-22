//Promise
// a. Membuat function helloWorld dengan Promise
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  // b. Membuat async function messages
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  
  // c. Memanggil function messages
  messages();

  //Fetch
  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users.data.map(user => ({
          first_name: user.first_name,
          last_name: user.last_name
        })));
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }
  
  // Memanggil fungsi
  ambilDataUser();

  //Async await
  async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      
      const userData = users.data.map(user => ({
        first_name: user.first_name,
        last_name: user.last_name
      }));
      
      console.log(userData);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  }
  
  // Memanggil fungsi
  ambilDataUser();

  //Axios
  axios
  .get("https://reqres.in/api/users")
  .then((result) => console.log(result.data));

const ambilDataUserAxios = async () => {
  let result = await axios.get("https://reqres.in/api/users");
  result.data.data.forEach((user) => console.log(user.email));
};