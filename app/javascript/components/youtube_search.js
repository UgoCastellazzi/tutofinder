require('dotenv').config()

const searchForm = document.querySelector("form")

const youtubeSearch = () => {
  searchForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const searchParameters = [document.getElementById('query').value, 
                              document.getElementById('instrument').value];
    const key = process.env.API_KEY;
    const query = `${searchParameters[0]} tuto for ${searchParameters[1]}`
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&type=video&q=${query}`)
      .then(response => response.json())
      .then((data) => {
      console.log(data);
      });
  });

}

export { youtubeSearch }