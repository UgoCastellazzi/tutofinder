const generateList = (thumbnailLink, title, description, date, id) => {
  return `
  <div class="result-card" id="${id}">
    <div class="thumbnail">
      <img src="${thumbnailLink}" alt="">
    </div>
    <div class="card-details">
      <a href="https://www.youtube.com/watch?v=${id}">
        <p class="card-details-title">${title}</p>
      </a>
      <p class="card-details-description">${description}</p>
      <p class="card-details-date">Published on the ${date}</p>
    </div>
    <div class="interactions">
      <i class="far fa-heart"></i>
    </div>
  </div>
  `
}

export { generateList }