const bnt3 = document.querySelector("#btn3")
const qw2 = document.querySelector(".todo")
 bnt3.onclick=()=>{

    const divq2 = document.createElement("div")
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
        if(!res.ok) {
            throw new Error("Ошибка сети");
        }
        return res.json();
     })
     .then((todoo)=>{
        console.log(todoo);

        todoo.slice(0, 3).forEach((to) => {
        const div4 = document.createElement("div")
        div4.innerHTML = `
        <div class="">
        <div>
        <h1>id-${to.id}</h1>
        </div>
        <div>
        <h1> title-${to.title}</h1>
        </div>
        </div>
        
        ` 
        divq2.appendChild(div4)           
        });
        
        qw2.appendChild(divq2)
     })


  }