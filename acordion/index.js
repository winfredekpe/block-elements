document.addEventListener("DOMContentLoaded", grabthem);

// function grabthem() {
//   heads = document.querySelectorAll(".head");
//   heads.forEach((e) => {
//     e.addEventListener("click", function hide() {
//       details = e.nextElementSibling;
//       details.classList.toggle("hide");
//     });
//   });
// }

function grabthem() {
  qhead = $(".head");
  qhead.each(function hg(e) {
    $(this).click(function df(e) {
      sb = $(this).siblings(".details");
      sb.toggle(300);
    });
  });
}
