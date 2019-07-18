
    // $(function () {
    // const main = document.querySelector("#main")


    fetch('http://localhost:3000/tools')
      .then(response => response.json())
      .then(res => {
        return res.map((item) => {
          console.log(item.id);
          return $("#main").append(
            `<div class="card  p-5 submain" style="width: 18rem;" id=${item.id} data-myd=${item.id}>
              <img src=${item.image} id="img" class="card-img-top" alt="..." width="100%" height="80%">
              <div class="card-body">
                <h5 class="card-title" id="name">${item.name}</h5>
                <p class="card-text">${item.des}</p>
                <button class="btn btn-primary" id="up" onclick=(upd())> View </button>
              </div>
            </div>`
          )
        // for(let j = 0; j < item.length; j++) {
        //     $("#main").append(
        //         `<div class="card  p-5 submain" style="width: 18rem;" id="mydiv" data-myd=${item.id}>
        //           <img src=${item.image} id="img" class="card-img-top" alt="..." width="100%" height="80%">
        //           <div class="card-body">
        //             <h5 class="card-title">${item.name}</h5>
        //             <p class="card-text">${item.des}</p>
        //             <button class="btn btn-primary" id="up" onclick="upd()"> View </button>
        //           </div>
        //         </div>`
        //       )
        // }        
    
    })
  
      })
      .catch(err => {
        console.log("err: " + err);
      });
    // })   

    // const upd = () => {
    //    addEventListener('click', () => {
    //               console.log("document.querySelector('.subclass').id");

    //     })
    // }