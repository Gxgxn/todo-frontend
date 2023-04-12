import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("6435d7a52141cfc824f6"); // Your project ID

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
