const qw1 = document.querySelector(".photo")
const bnt2 = document.querySelector("#btn2")


bnt2.onclick=()=>{
const photo = document.createElement("div")
fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => {
    if(!res.ok) {
        throw new Error("Ошибка сети");
    }
    return res.json();
 })
.then((pho) => {
    console.log(pho);
    
    pho.slice(0, 5).forEach((phot) => {
        const div1 = document.createElement("div")
        div1.innerHTML = `
        <div class= "flex justify-beetwen">
        <img class="rounded-[50%]"
        src="${phot.url}">
        </div>
        `
        photo.appendChild(div1)
    });
    qw1.appendChild(photo)
})
}