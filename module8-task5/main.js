const btnNode = document.querySelector('#request-btn');
const pageNumNode = document.querySelector("#pageNum");
const limitNode = document.querySelector("#limit");

const resultNode = document.querySelector(".result")

const form = document.querySelector(".form");


// const test = () => document.querySelector("body").style.backgroundColor = "black";



const limit = limitNode.value;
const pageNum = pageNumNode.value;


const cardMaker = (arr) => {
    for (i = 0;i < arr.length; ++i) {
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
}


form.addEventListener("submit", function (e) {
        const myData = localStorage.getItem('myData');

        fetch("https://picsum.photos/v2/list?page=1&limit=10")
            .then((response) => {
                console.log('response', response)
                const result = response.json();
                console.log('result', result);
                return result
            })
            .then((data) => {
                resultNode.innerHTML = "";
                let contentArray = [];
                for (i = 0;i < data.length; ++i) {
                    contentArray.push(data[i].download_url);
                    // let url = data[i].download_url;
                    // let img = document.createElement('img');
                    // img.src = url;
                    // img.classList = "card-image";
                    // resultNode.appendChild(img);
                    // img.alt = "error";
                    // localStorage.setItem('myData', data[i].download_url)
                }
                cardMaker(contentArray)
                console.log(contentArray);
                localStorage.setItem('myData', JSON.stringify(contentArray))
                // resultNode.innerHTML = JSON.stringify(data[0].id);
                // const url = data[0].download_url;
                // resultNode.innerHTML = url;
                // let img = document.createElement('img');
                // img.src = url;
                // img.alt = "error";
                // resultNode.appendChild(img)
                // console.log(data[0].url)
                // localStorage.setItem('myData', url)
            })
        e.preventDefault();
    }

)



// console.log(response.json())
// resultNode.innerHTML = (JSON.stringify(response));
// resultNode.innerHTML = (response.json())




//   // Вешаем обработчик на кнопку для запроса
//   btnRequestNode.addEventListener('click', () => {
//     // Получаем данные по ключу myJSON в localStorage
//     const myJSON = localStorage.getItem('myJSON');

//     if (myJSON) {
//       // Если данные в localStorage есть - просто выводим их
//       console.log('localStorage JSON', JSON.parse(myJSON));
//     } else {
//       // Если данных в localStorage нет - делаем запрос
//       useRequest('https://picsum.photos/v2/list/?limit=1', (json) => {
//         // Выводим данные, полученные в результате запроса
//         console.log('request JSON', json);
//         // Записываем результат запроса в localStorage
//         localStorage.setItem('myJSON', JSON.stringify(json));
//       });
//     }
//   });

//   // Вешаем обработчик на кнопку для очистки localStorage
//   btnClearNode.addEventListener('click', () => {
//     localStorage.clear();
//     console.log('Данные из localStorage удалены');
//   });


//   fetch('https://picsum.photos/150/200')
//     .then((response) => { return response.url; })
//     .then((data) => {const paragraph = document.body.appendChild(document.createElement(`<img
//        src="${data}" class="card-image"/>`));})




/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
// function useRequest(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);

//     xhr.onload = function() {
//       if (xhr.status != 200) {
//         console.log('Статус ответа: ', xhr.status);
//       } else {
//         const result = JSON.parse(xhr.response);
//         if (callback) {
//           callback(result);
//         }
//       }
//     };

//     xhr.onerror = function() {
//       console.log('Ошибка! Статус ответа: ', xhr.status);
//     };

//     xhr.send();
//   };

//   // Ищем кнопку, по нажатии на которую будет запрос
//   const btnRequestNode = document.querySelector('.j-btn-request');
//   // Ищем кнопку, по нажатии на которую очищаем localStorage
//   const btnClearNode = document.querySelector('.j-btn-clear');