import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.REACT_APP_PROJECT_ID); // Your project ID

const account = new Account(client);

export default account;
