const btnNode = document.querySelector('#btn');
const limitNode = document.querySelector('#limit')
const resultNode = document.querySelector('.result-box');



const requestData = (url) => {
  // let limit = limitNode.value;
  if (limitNode.value >= 1 && limitNode.value <= 10) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    if (xhr.status != 200) {
      resultNode.innerHTML = ('Request status: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      resultNode.innerHTML = (xhr.response);
     
    }
  };
  xhr.onerror = function() {
    resultNode.innerHTML = ('Error: ', xhr.status);
  };
  
  xhr.send();
  } 
} else {
    resultNode.innerHTML = "число вне диапазона от 1 до 10"
}
  
//    let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//     xhr.onload = function() {
//     if (xhr.status != 200) {
//       console.log('Request status: ', xhr.status);
//     } else {
//       const result = JSON.parse(xhr.response);
//       console.log(xhr.response);
//       if (callback) {
//         callback(result);
//       }
//     }
//   };
//   xhr.onerror = function() {
//     console.log('Error: ', xhr.status);
//   };
  
//   xhr.send();
// }


const displayResult = (url) => {
  
  
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Request status: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      console.log(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
   xhr.onerror = function() {
    console.log('Error: ', xhr.status);
  };
  
  xhr.send();
}


