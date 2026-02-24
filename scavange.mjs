import makeRequest from "./request.mjs";
import fs from "node:fs"

const player = "alenarepina96@gmail.com"
const baseURL = "https://spacescavanger.onrender.com";
const startURL = `${baseURL}/start?player=${player}`;
const answerURL = `${baseURL}/answer`;

const token = process.env.API_KEY;
const spaceBaseURL = "https://api.le-systeme-solaire.net/rest"
const spaceBodiesURL = `${spaceBaseURL}/bodies`

await makeRequest(startURL);

let respons = await makeRequest(spaceBodiesURL, "GET", token);

const sun = respons.find( item => item.englishName == "Sun");

const pin = Math.abs(sun.meanRadius - sun.equaRadius);

console.log(`The pin is ${pin}`);

respons = await makeRequest(answerURL, "POST", "", { answer: pin, player: player });