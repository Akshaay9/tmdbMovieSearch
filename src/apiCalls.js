import axios from "axios";

export const getAllCountries = async () => {
  const data = await axios.get(`https://restcountries.eu/rest/v2/all`);
  return data;
};
export const getSearchedCountries = async (name) => {
  const data = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  return data;
};
export const regionalCountries = async (name) => {
  const data = await axios.get(`https://restcountries.eu/rest/v2/region/${name}`);
  return data;
};
export const regionalBlockCountries = async (name) => {
  const data = await axios.get(`https://restcountries.eu/rest/v2/regionalbloc/${name}`);
  return data;
};
