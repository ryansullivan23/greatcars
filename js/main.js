(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework



   var  cars = document.querySelectorAll('.data-ref');
   const httpRequest = new XMLHttpRequest;

   function changeElements() {
     const url = './includes/functions.php?carModel=' + this.id;
     fetch(url)
      .then((resp) => resp.json())
      .then((data) => { processResult(data); })
      .catch(function(error)) {
        console.log(error);
      }
     //if (!httpRequest) {
    //   alert('giving up');
    //   return false;
     }

//httpRequest.onreadystatechange = processRequest;
//httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
//httpRequest.send();

   }


//  function processRequest() {
//    let reqIndicator = document.querySelector('.request-state');
//    reqIndicator.textContent = httpRequest.readyState;
//      debugger;
//    if (httpRequest.readyState === XMLHttpRequest.DONE) {
//      if (httpRequest.status === 200) { // 200 means everything is awesome
        //debugger;
      //  let data = JSON.parse(httpRequest.responseText);

    //    processResult(data);
  //    } else {
  //      alert('There was a problem with the request.');
  //    }
//    }
//  }

        models = document.querySelector('.modelName');
        price = document.querySelector('.priceInfo');
        description = document.querySelector('.modelDetails');


        cars.forEach(function(element, index){
        element.addEventListener('click', changeElements, false); });

  function changeElements() {
    //debugger;
    let objectIndex = carData[this.id];

    models.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    description.firstChild.nodeValue = objectIndex.description;





  };

})();
