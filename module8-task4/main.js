  const btn = document.querySelector('#btn');
  const widthNode = document.querySelector("#widthValue")
  const heightNode = document.querySelector("#heightValue")
  const resultNode = document.querySelector(".result-box")

  const promise = () => {
      let width = widthNode.value;
      let height = heightNode.value;

      if ((width <= 300 && width >= 100) && (height <= 300 && height >= 100)) {
          fetch(`https://picsum.photos/${width}/${height}`)
              .then((response) => {
                  resultNode.innerHTML = "";
                  let img = document.createElement('img');
                  img.src = response.url;
                  img.alt = "error";
                  resultNode.appendChild(img)

                  console.log('response', response.url);
              })
              .catch(() => {
                  resultNode.innerHTML = "error"
              });
      } else {
          resultNode.innerHTML = "one of the numbers is out of range between 100 to 300"
      }


  }



  btn.addEventListener('click', promise);