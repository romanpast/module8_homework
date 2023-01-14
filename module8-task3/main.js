
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Response status: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        // console.log(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Error! Response status: ', xhr.status);
    };
    
    xhr.send();
  };
  
  // Ищем ноду для вставки результата запроса
  const resultNode = document.querySelector('.result-box');
  // Ищем кнопку, по нажатии на которую будет запрос
  const btnNode = document.querySelector("#btn");

  const inputNode = document.querySelector('#limitValue')
  /**
    * Функция обработки полученного результата
    * apiData - объект с результатом запроса
    */
  function displayResult(apiData) {
    // let cards = '';
    // console.log('start cards', cards);
    
    // apiData.forEach(item => {
    //   const cardBlock = `
    //     <div class="card">
    //       <img
    //         src="${item.download_url}"
    //         class="card-image"
    //       />
    //       <p>${item.author}</p>
    //     </div>
    //   `;
    //   cards = cards + cardBlock;
    // });
    
    // console.log('end cards', cards);
      console.log(apiData);
      resultNode.innerHTML = JSON.stringify(apiData);
  }
  
// check for numbers 1-10



  // Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {
    let limit = inputNode.value;
    if (limit >= 1 && limit <= 10) {
        useRequest(`https://picsum.photos/v2/list/?limit=${limit}`, displayResult);
    } else {
        resultNode.innerHTML = "the number is outside the range from 1 to 10"
    }


    
  })
  