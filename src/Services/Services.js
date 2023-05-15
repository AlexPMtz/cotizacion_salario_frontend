import Axios from "axios";

const createCreditQuote = (normalRate, punctualRate, productId, price, weeks) => {
  let body = {
    normalRate,
    punctualRate,
    productId,
    price,
    weeks
  }
  return Axios.post("http://ec2-44-202-114-168.compute-1.amazonaws.com:3000/creditQuotes", {...body});
}

const getProducts = () => {
  return Axios.get("http://ec2-44-202-114-168.compute-1.amazonaws.com:3000/products");
}

const createDeadline = (weeks) => {
  let body = {
    weeks
  }
  return Axios.post("http://ec2-44-202-114-168.compute-1.amazonaws.com:3000/deadlines", {...body});
}

const getDeadlines = () => {
  return Axios.get("http://ec2-44-202-114-168.compute-1.amazonaws.com:3000/deadlines");
}

export {
  getProducts,
  createDeadline,
  getDeadlines,
  createCreditQuote
}