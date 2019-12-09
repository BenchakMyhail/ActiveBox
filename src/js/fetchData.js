import '@babel/polyfill';

const requestUrl = "https://jsonplaceholder.typicode.com/photos";

const foo = async function (url) {
  const resp = await fetch(url).then(response => response.json());
  return  resp;  
}
export default foo(requestUrl);