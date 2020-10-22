const userDataURL = "http://localhost:3000/api/v1/users"

const movieDataURL = "http://localhost:3000/api/v1/movies"

const reviewCommentsDataURL = "http://localhost:3000/api/v1/review_comments"

document.addEventListener("DOMContentLoaded", () => {
    fetch(movieDataURL)
    .then(res => res.json())
    .then(movies => movies.forEach(
       movie => renderMovie(movie)
       
    ))
})

function renderMovie(movie) {
    const imgCont = document.querySelector(".container-fluid")
    const imgCard = document.createElement("div")
    imgCard.className = "card"
    imgCard.style = "width: 18rem;"

    const movieTitle = document.createElement("h1")
    movieTitle.innerText = movie.title 

    const movieImg = document.createElement("img")
    movieImg.src = movie.poster
    movieImg.className = "card-img-top"
    movieImg.addEventListener("click", () => {
        // console.log("sup")
        // <div class="card-body">
        //       <h5 class="card-title">Card title</h5>
        //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        // </div>


        const infoCard = document.createElement("div")
        infoCard.className = "card-body"

        let title = document.createElement("h5")
        title.className = "card-title"
        title.innerText = movie.title

        let text = document.createElement("p")
        text.className = "card-text"
        text.innerText = movie.plot
        
        // infoCard.append(title)
        imgCard.append(title)
        // imgCont.append(imgCard)
        console.log(title)
    })

    const movieDesc = document.createElement("p")
    movieDesc.innerText = movie.plot

    imgCard.append(movieImg)
    imgCont.append(imgCard)
    
}