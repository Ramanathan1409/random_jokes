const div = document.querySelector(".joke1");
const joke = async () => {
    const first = await axios.get('https://icanhazdadjoke.com/',{headers: {Accept: "application/json"}});
    div.innerText=first.data.joke;
}
const button =  document.querySelector("button");
button.addEventListener("click", joke);
