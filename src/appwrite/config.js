import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
  .setProject("5df5acd0d48c2"); // Your project ID

export const account = new Account(client);

// const promise = account.create(ID.unique(), "team@appwrite.io", "password");

// promise.then(
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   }
// );
