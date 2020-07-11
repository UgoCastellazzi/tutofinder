require('dotenv').config()
import { generateList } from './generate_list';
import { saveTuto } from './save_tuto';

const searchForm = document.querySelector("form")
const resultContainer = document.querySelector(".result-container")

const youtubeSearch = () => {
  searchForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const searchParameters = [document.getElementById('query').value, 
                              document.getElementById('instrument').value];
    const key = process.env.API_KEY;
    const query = `${searchParameters[0]} tuto for ${searchParameters[1]}`
    resultContainer.innerHTML = "";
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&type=video&q=${query}`)
      .then(response => response.json())
      .then((data) => {
        data.items.forEach (item => {
          const thumbnailLink = item.snippet.thumbnails.high.url;
          const title = item.snippet.title;
          const description = item.snippet.description;
          const date = item.snippet.publishedAt;
          const id = item.id.videoId;
          resultContainer.insertAdjacentHTML("beforeend", generateList(thumbnailLink, title, description, date, id));
          saveTuto(thumbnailLink, title, description, date, id);
        })
      });      
  });
}

export { youtubeSearch }