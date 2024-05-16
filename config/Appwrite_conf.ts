import { Client } from 'appwrite'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ccf2e8e1503755155b');

export default client;