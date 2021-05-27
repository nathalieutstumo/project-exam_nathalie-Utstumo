async function getPosts() {
    try {
        const response = await fetch('https://projectexam.ntoni.tech/wp-json/wp/v2/posts?per_page=15');
        const jsonObject = await response.json();
        console.log(jsonObject);
        const jsonArray = jsonObject;
        console.log('something', jsonArray);

          for (let i = 0; i < 12; i++) {

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
        } catch (error) {
          // document.querySelector('main').innerHTML = showAlertTouser(
          //     'error',
          //     'danger') 
          };
  //   } finally {
  //     setTimeout(function () {
  //         document.querySelector('main').innerHTML = ' ';
  //     }, 3000);
  }


getPosts();