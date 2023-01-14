function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Response status: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      console.log(xhr.response);

      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log('Error! Response status: ', xhr.status);
  };
  xhr.send();
};

const resultNode = document.querySelector('.result-box');
const btnNode = document.querySelector("#btn");
const inputNode = document.querySelector('#limitValue')

function displayResult(apiData) {
  console.log(apiData);
  resultNode.innerHTML = JSON.stringify(apiData);
}

btnNode.addEventListener('click', () => {
  let limit = inputNode.value;
  if (limit >= 1 && limit <= 10) {
    useRequest(`https://picsum.photos/v2/list/?limit=${limit}`, displayResult);
  } else {
    resultNode.innerHTML = "the number is outside of range from 1 to 10"
  }
})