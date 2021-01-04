export default function BurgerMenu(paramN, paramB) {
  paramB.addEventListener("click", () => {
    paramN.classList.toggle("active")
    paramB.classList.toggle("is-active")
  })
}