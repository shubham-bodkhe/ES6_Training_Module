function converter(amt) {
  const curency = {
    USD: amt * 0.8,
    GPB: amt * 0.53,
    AUD: amt * 0.53,
    MEX: amt * 13.3,
  };
  return curency;
}

const { USD, AUD, GPB, MEX } = converter(100);
console.log(USD, AUD);
