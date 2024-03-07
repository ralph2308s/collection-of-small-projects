const $ = document.querySelector.bind(document);

$(".open-modal-btn").addEventListener("click", toggleModal);
$(".modal__header i").addEventListener("click", toggleModal);
$(".modal__footer button").addEventListener("click", toggleModal);

$(".modal").addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});

function toggleModal() {
  $(".modal").classList.toggle("hide");
}