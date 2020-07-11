import { fetchWithToken } from "../utils/fetch_with_token";

const saveTuto = (thumbnailLink, title, description, date, id) => {
  const saveButton = document.getElementById(`${id}`);
  saveButton.addEventListener("click", (event) => {
    fetchWithToken("/tutos", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tuto: { 
        title: title,
        url: `https://www.youtube.com/watch?v=${id}`,
        snippet_url: thumbnailLink,
        publisher: "www.blop.com",
        publish_date: date
      }})
      })
        .then(response => response.json())
        .then((data) => {
            console.log(date)
        });
  })
}

export { saveTuto }