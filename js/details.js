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
console.log (jsonArray.title.rendered);

for (let i = 0; i < jsonArray.length; i++) {
    document.title = jsonArray[i].title.rendered;
    document.querySelector('main').innerHTML += `
    <div class="post">
    <h1>${jsonArray[i].title.rendered}</h1>
    <img class ="postImg" src="${jsonArray[i].fi_300x180}">
    <p>${jsonArray[i].content.rendered}</p>
</div>
`;
}
} catch (error) {
    console.log(error)
    document.querySelector('.alert').innerHTML = showAlertTouser(
        'error',
        'danger'
        );
    }

};  

getPosts();

{/* <h1>${jsonArray[i].title.rendered}</h1> */}