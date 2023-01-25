const btnNode = document.querySelector('#request-btn');
const pageNumNode = document.querySelector("#pageNum");
const limitNode = document.querySelector("#limit");
const resultNode = document.querySelector(".result")
const form = document.querySelector(".form");
const limit = limitNode.value;
const pageNum = pageNumNode.value;

const cardMaker = (arr) => {
    for (i = 0; i < arr.length; ++i) {
        let url = arr[i];
        let img = document.createElement('img');
        img.src = url;
        img.classList = "card-image";
        resultNode.appendChild(img);
        img.alt = "error";
    }
}

if (localStorage.myData) {
    resultNode.innerHTML = "";
    let contentArray = JSON.parse(localStorage.myData);
    cardMaker(contentArray);
    console.log("localStorage content:", contentArray);
}

form.addEventListener("submit", function (e) {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
        .then((response) => {
            const result = response.json();
            return result
        })
        .then((data) => {
            resultNode.innerHTML = "";
            let contentArray = [];
            for (i = 0; i < data.length; ++i) {
                contentArray.push(data[i].download_url);
            }
            cardMaker(contentArray)
            console.log("fetched content:", contentArray);
            localStorage.setItem('myData', JSON.stringify(contentArray))
        })
    e.preventDefault();
})