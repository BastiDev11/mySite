import Animated from "./modules/animatedText.js"
import AnimatedTxt from "./modules/animatedText.js"
import BurgerMenu from "./modules/burgerMenu.js"

const h1 = document.getElementById("mainTitle")
// AnimatedTxt(h1)
const navigation = document.querySelector(".navigation")
const btn = document.querySelector(".panel-btn")
BurgerMenu(navigation, btn)
