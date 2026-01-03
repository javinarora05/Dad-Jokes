const apiBody = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com/"

const fetchData = () => {
    fetch(apiUrl, {
        headers: {
            Accept: "application/json"
        }
    })
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((data) => {
        // console.log(data.joke);
        apiBody.innerHTML = data.joke; 
    })
    .catch((err) => {
        // console.log(err);
})
}

fetchData();

 document.getElementById("fetchJoke").addEventListener("click", fetchData);