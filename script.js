const button = document.querySelector(".btn");
const abtMe = document.getElementById("aboutMe");
const hamMen = document.getElementById("hamburger--menu");
const hamLines = document.querySelectorAll(".line");
const content = document.querySelector(".dummyClass");
const start = document.querySelector(".start");
const buttonBcg = document.querySelector(".btn--bcg");
const titleAnimation = document.querySelectorAll(".to--animate");
const topH1 = document.querySelector(".title");
const portfolio = document.querySelector(".portfolio");
const previews = document.querySelectorAll(".preview");
const contactButton = document.querySelector(".button");
const portfolioContainer = document.querySelector(".all--previews");
const progressBarFilling = document.querySelectorAll(".fillment");
const progressBarItself = document.querySelectorAll(".bar--skills");
const topHead = document.querySelector(".header");

// prettier-ignore
const links = ["https://j3drek.github.io/Bankist/","https://j3drek.github.io/Bankist-landingPage/","https://j3drek.github.io/WeatherAPP/","https://j3drek.github.io/Mapty/"];

class MyWebsite {
  constructor() {
    button.addEventListener("click", this.ButtonClick.bind(this));
    button.addEventListener("mouseover", this.ButtonMouseOver.bind(this));
    button.addEventListener("mouseout", this.ButtonMouseOut.bind(this));
    topH1.addEventListener("mouseover", this.titleMouseOver.bind(this));
    topH1.addEventListener("mouseout", this.titleMouseOut.bind(this));

    this.autoUpdateAge();
    this.autoUpdateYear();
    this.remoteInserting();
    this.getWidth();
    this.getStoicQuote();
  }
  ButtonClick(event) {
    event.preventDefault();
    start.style.top = "-2000px";
    content.classList.remove("hidden");
    window.scrollTo({ top: 0 });
  }
  ButtonMouseOver(event) {
    event.preventDefault();
    button.style.color = "black";
    buttonBcg.style.transform = "translateX(0%)";
    button.style.cursor = "pointer";
  }
  ButtonMouseOut(event) {
    event.preventDefault();
    buttonBcg.style.transform = "translateX(-100%)";
    button.style.color = "white";
    button.style.cursor = "";
  }
  //TOP TITLE WITH BUBBLING
  titleMouseOver(event) {
    event.preventDefault();
    if (event.target.classList.contains("to--animate")) {
      event.target.style.transform = "translateY(-20px)";
      event.target.style.cursor = "pointer";
      event.target.style.color = "white";
    }
  }
  titleMouseOut(event) {
    event.preventDefault();
    event.target.style.cursor = "";
    event.target.style.transform = "translateY(0%)";
    event.target.style.color = "";
  }
  //auto updating year in footer
  autoUpdateYear() {
    const year = document.querySelector(".footer");
    const rok = new Date();
    year.innerHTML = `Jędrzej Morzyk &copy; ${rok.getFullYear()}`;
  }
  //auto updating age in first section
  autoUpdateAge() {
    const age = document.querySelector(".age");
    const year = new Date();
    // console.log(year.getFullYear())
    age.textContent = year.getFullYear() - 2003;
  }
  //remote inserting links and miniatures of projects
  remoteInserting() {
    links.forEach((link) => {
      let splittedLink = link.split("/");
      let HTML = ` <div class="preview">
                        <a href="https://j3drek.github.io/${splittedLink[3]}/" target="_blank" title="${splittedLink[3]}">
                            <img src="IMGS/SCREENS/${splittedLink[3]}.png" />
                        </a>
                    </div>`;
      portfolioContainer.insertAdjacentHTML("afterbegin", HTML);
    });
  }
  //Filling progress bars with percentage
  getWidth() {
    progressBarItself.forEach((bar) => {
      const percentageValue =
        (bar.lastElementChild.offsetWidth / bar.offsetWidth) * 100;
      bar.lastElementChild.textContent = `${percentageValue}%`;
    });
  }
  //I try to live along stoic philosophy so I added this xd
  //API BY https://stoicquotesapi.com/
  async getStoicQuote() {
    const quoteRequest = await fetch(
      "https://stoicquotesapi.com/v1/api/quotes/random"
    );
    const finalQuote = await quoteRequest.json();
    topHead.textContent = `Stoic quote for you: ${finalQuote.body}--${finalQuote.author}`;
    console.log(finalQuote);
  }
}
const website = new MyWebsite();
