// HTTTP HTTPS
// GET POST PUT , DELETE , PATCH

// get - получать данные 
// post - отправка данных 
// put - изменение данынх 

// fecth() 
// axios()

// api - application programing interface 
// const userlist = document.querySelector("#userlist")


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{
//     if(!res.ok){
//         throw new Error ("ошибка сети")
//     }
//     return res.json()
// })
//      .then((data)=>{
//         console.log(data);
//         data.map((user) => {
//             const userdiv = document.createElement("div")
//             // const[name,id,email,phoneusername, address]=user;
//     userdiv.innerHTML = `
    
//    <h1>${user.id}</h1>
    
    
//     `           
//     userlist.appendChild(userdiv) 
//         });

//      })


const userList = document.querySelector(".userlist");
const btn1 = document.querySelector("#btn1");

btn1.onclick=() => {
    const Divq1 = document.createElement("div");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if (!res.ok) {
                throw new Error("Ошибка сети");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            data.splice(0, 3).forEach((user) => {
                const userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <h2>id-${user.id}</h2>
                    <h2>name-${user.name}</h2>
                    <h2>email-${user.email}</h2>
                    <h2>city-${user.address.city}</h2>
                    <h2> lat-${user.address.geo.lat}</h2>
                    <h2> lng-${user.address.geo.lng}</h2>
                    <h2> bs-${user.company.bs}</h2>
                    <h2> catchPhrase${user.company.catchPhrase}</h2>
                    <h2>phone-${user.phone}</h2>
                    <h2>username-${user.username}</h2>
                    <h2>website-${user.website}</h2>
                `;
                Divq1.appendChild(userDiv);
            });

            userList.appendChild(Divq1);
        })
        
};





































































































































