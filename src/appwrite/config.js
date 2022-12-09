import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("638822683b538327a25f"); // Your project ID

const account = new Account(client);

export default account;
// const promise = account.create(ID.unique(), "team@appwrite.io", "password");

// promise.then(
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   }
// );
