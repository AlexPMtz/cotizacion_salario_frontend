import Axios from "axios";

const createCreditQuote = (normalRate, punctualRate, productId, price, weeks) => {
  console.log('----->HOLA');
  let body = {
    normalRate,
    punctualRate,
    productId,
    price,
    weeks
  }
  return Axios.post("http://localhost:3000/creditQuotes", {...body});
}

const getProducts = () => {
  return Axios.get("http://localhost:3000/products");
}

const createDeadline = (weeks) => {
  let body = {
    weeks
  }
  return Axios.post("http://localhost:3000/deadlines", {...body});
}

const getDeadlines = () => {
  return Axios.get("http://localhost:3000/deadlines");
}

export {
  getProducts,
  createDeadline,
  getDeadlines,
  createCreditQuote
}