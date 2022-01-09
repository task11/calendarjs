(function () {
  const h1 = document.querySelector("div.a:first-child h1");
  const title = document.querySelector("title");


  title.innerHTML = "zz"

  function handleH1() {
    console.log("click");
  }


  h1.addEventListener("click", handleH1);
})();


