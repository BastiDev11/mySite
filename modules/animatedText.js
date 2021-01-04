export default function AnimatedText(param) {

  const h1 = param
  const txt = h1.textContent
  const strTxt = txt.split("")
  h1.textContent = ""
  let char = 0

  
  
  const setH1 = () => {
  const classH1 = h1.querySelectorAll("span")[char]
  classH1.classList.add("animated")
  char++
}

  strTxt.forEach(el => {
    const span = document.createElement("span")
    span.textContent += el
    h1.appendChild(span)
  });
  
  let timer = setInterval(() => {
    setH1()
    if (char === strTxt.length) {
      clearInterval(timer)
      timer = null
      return 
    }
  }, 100);
  
}