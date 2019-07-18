const name = document.querySelector("#name")
const des = document.querySelector("#description")
const image = document.querySelector("#image")
const btn = document.querySelector("#btn")

// const btnClick = () => {
//     console.log(name);
// }



btn.addEventListener('click', (e) => {
    e.preventDefault()
    const newAdd =  {
       name: name.value,
       des: des.value,
       image: image.value
    }
    console.log(newAdd);
    return fetch('http://localhost:3000/tools',{
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newAdd) // body data type must match "Content-Type" header

    }).then(res =>  {
        // console.log( res.json());
        return res.json()
    })
    
})
