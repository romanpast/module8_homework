const btnNode = document.querySelector('#request-btn');
const pageNumNode = document.querySelector("#pageNum");
const limitNode = document.querySelector("#limit");
const resultNode = document.querySelector(".result")
const form = document.querySelector(".form");

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

const getData = (page, limit) => {
    resultNode.innerHTML = "";
    resultNode.className = "result";
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            const result = response.json();
            return result
        })
        .then((data) => {
            let contentArray = [];
            for (i = 0; i < data.length; ++i) {
                contentArray.push(data[i].download_url);
            }
            cardMaker(contentArray)
            console.log("fetched content:", contentArray);
            localStorage.setItem('myData', JSON.stringify(contentArray))
        })
}



if (localStorage.myData) {
    resultNode.innerHTML = "";
    let contentArray = JSON.parse(localStorage.myData);
    cardMaker(contentArray);
    console.log("localStorage content:", contentArray);
}

form.addEventListener("submit", function (e) {
    let limit = limitNode.value;
    let pageNum = pageNumNode.value;


    if ((limit < 1 || limit > 10 || limit == NaN) && (pageNum < 1 || pageNum > 10 || pageNum == NaN)) {
        resultNode.innerHTML = "Page number and Limit are out of range from 1 to 10";
        resultNode.classList.add("warning");
    } else if (pageNum < 1 || pageNum > 10 || pageNum == NaN) {
        resultNode.innerHTML = "Page number is out of range from 1 to 10";
        resultNode.classList.add("warning");
    } else if (limit < 1 || limit > 10 || limit == NaN) {
        resultNode.innerHTML = "Limit is out of range from 1 to 10";
        resultNode.classList.add("warning");
    } else {
        getData(pageNum, limit);
    }

    e.preventDefault();
})