const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

async function getPosts() {
    try {
        console.log(id)
        const response = await fetch('https://projectexam.ntoni.tech/wp-json/wp/v2/posts/' + id);
        const jsonResult = await response.json();
        console.log (jsonResult);

        document.title = jsonResult.title.rendered;
        document.querySelector('main').innerHTML += `
            <div class="post">
                <h1>${jsonResult.title.rendered}</h1>
                <img class ="detailsImg" src="${jsonResult.fi_300x180}">
                <p>${jsonResult.content.rendered}</p>
            </div>`;
        
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