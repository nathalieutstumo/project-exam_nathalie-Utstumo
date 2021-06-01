let offset = 0; // Det er vanlig at offset begynner med null.

async function getPosts(per_page) {
    try {
      const response = await fetch('https://projectexam.ntoni.tech/wp-json/wp/v2/posts?per_page=' + per_page + '&offset=' + offset);
      const jsonObject = await response.json();
      console.log(jsonObject);
      const jsonArray = jsonObject;
      console.log('something', jsonArray);

      if (jsonArray.length === 0) {
        alert("No more posts to load.");
      }

      for (let i = 0; i < jsonArray.length; i++) {
        document.querySelector('.archive__cards').innerHTML += `
          <div class="archive__card">
              <img class ="postImg" src="${jsonArray[i].fi_300x180}">
              <h2>${jsonArray[i].title.rendered}</h2>
              <p>${jsonArray[i].excerpt.rendered}</p>
              <div class="readmore_btn">
              <a href="details.html?id=${jsonArray[i].id}">Read More</a>
              </div>
              <p></p>
          </div>
        `;
      }
      offset += per_page; 
    } catch (error) {
      console.log(error);
    };
}

getPosts(6); 

const button = document.querySelector('.view__more button');
button.addEventListener('click', event => {
  getPosts(3); 
});