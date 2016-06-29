function double_consonants(str) {
  return str.replace(/([b-eB-Ef-hF-Hj-nJ-Np-tP-Tv-zV-Z])/g, '$1$1');
}
