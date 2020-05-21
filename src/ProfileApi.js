import { wrapPromise } from "./Utils";
//import { fetch } from 'isomorphic-fetch'

const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then(r => r.json())
    .then(r => r.results[0]);
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
    randomNumber: wrapPromise(randomNumber())
  };
};

const randomNumber = async () => {
  return new Promise(res => {
    setTimeout(() => res(Math.random()), 3000);
  });
};
