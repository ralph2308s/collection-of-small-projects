"use strict";

setTimeout(() => {
  $(".card__img").innerHTML =
    '<img src="https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="">';
  $(".card__info h2").innerHTML = "Nodemy";
  $(".card__info p").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis";
  $(".card__info button").innerHTML = "Read More";

  // remove loading
  $$(".loading").forEach((item) => {
    item.classList.remove("loading");
  });
}, 4000);
