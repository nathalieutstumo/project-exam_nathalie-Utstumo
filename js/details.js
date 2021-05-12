const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

async function getPosts() {
try {
console.log(id)
const response = await fetch('https://projectexam.ntoni.tech/wp-json/wp/v2/posts/' + id);
const jsonResults = await response.json();
const jsonArray = jsonResults;
console.log (jsonResults);

for (let i = 0; i < jsonArray.length; i++) {
    document.title = jsonArray[i].title;
    document.querySelector('main').innerHTML += `
    <div class="archive__card">
    <img class ="postImg" src="${jsonArray[i].fi_300x180}">
  
    </div>
`; 
}
} catch (error) {
    console.log (error)
}

}

getPosts();