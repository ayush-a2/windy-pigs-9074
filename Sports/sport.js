import {footer} from '../Footer/footer.js';
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let fot = document.getElementById("footer");
fot.innerHTML = footer();

const url ="http://localhost:3000/Sports"
let getData = async (page)=>{
    let res = await fetch (url);
    let data = await res.json();
    localStorage.setItem("category",JSON.stringify(data));
    console.log(data);
    appendData(data,page);
}
getData(1);

let appendData = (data,page)=>{
    let cont = document.getElementById("container");
    cont.innerHTML = null;

    let start = 16*(page-1);
    let end = start +16;

    let perPageData = data.slice(start,end);
    perPageData.forEach((el)=>{

        let div = document.createElement("div");
        div.className = "products";

        let img = document.createElement("img");
        img.src = el.image;

        let des = document.createElement("h4");
        des.innerText = el.description;
        des.className="des"

        let price = document.createElement("p");
        price.innerText = el.price;
        price.className="price"

        let cartButton= document.createElement('button');
        cartButton.id="btnn";
        cartButton.innerText='Add to Cart';
        let click=0;
        cartButton.addEventListener('click',()=>{
            cartButton.innerText='Added to Cart';
            click++;
            cartFunction(id);
            console.log(click)
            if(click>1){
                alert('Product already added to cart');
            };
        })

        div.append(img,des,price,cartButton);


        cont.append(div);

    })
}

let showButtons = (page)=> {
    let btn = document.getElementById("button");
    btn.innerHTML = null;

    let start = 1;
    if(page >5){
        start = page-1;
    }

    for(let i=start;i<start+5;i++){
        let b = document.createElement("button");
        b.className="btn"
        b.innerText = i;
        b.onclick=()=>{
            getData(i);
            showButtons(i);
        }
        btn.append(b);
    }
}

showButtons();