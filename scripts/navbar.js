let home_page = () => {
  // window.location.href=""
  console.log("Hii");
};
let sign_page = () => {
  // window.location.href=""
  console.log("Hii");
};
let cart_page = () => {
  // window.location.href=""
  console.log("Hii");
};
let search_button = () => {
  // window.location.href=""
  console.log("Hii");
};
let serch_inbox_fun = () => {
  let serch_term = getById("serch_inbox").value;
  if (serch_term != null || serch_term != "") {
    console.log("serch_term:", serch_term);
  }else{
    return;
  }
};
let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

let getById = (tag) => {
  return document.getElementById(tag);
};

window.addEventListener("load", function () {
  let logo_Onclick = getById("logo_click");
  logo_Onclick.onclick = () => {
    home_page();
  };
  let sign_in_btn = getById("sign_in_btn");
  sign_in_btn.onclick = () => {
    sign_page();
  };
  let search_btn = getById("search_button");
  search_btn.onclick = () => {
    search_button();
  };
  let fav_btn = getById("fav_btn");
  fav_btn.onclick = () => {};
  let cart_btn = getById("cart_btn");
  cart_btn.onclick = () => {
    cart_page();
  };
  let serch_inbox = getById("serch_inbox");
  serch_inbox.oninput = () => {
    debounce(serch_inbox_fun, 1000);
    // serch_inbox_fun();
  };
});
/*
logo_click
sign_in_btn
fav_btn
cart_btn
serch_inbox
search_button
*/