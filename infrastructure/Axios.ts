import axios from "axios";

const Axios = axios.create({});

export const axiosUrls = {
  urlGetOffers: 'https://finoffers.pampadu.ru/stat/api/external/getoffers', // get
  getBlogPosts: 'https://pampadu.ru/blog/wp-json/wp/v2/posts/',
  sendForm: "https://finoffers.pampadu.ru/stat/api/landing" // post
}
export default Axios;
