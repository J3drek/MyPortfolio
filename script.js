const button = document.querySelector('.btn');
const abtMe = document.getElementById('aboutMe');
const hamMen = document.getElementById('hamburger--menu');
const hamLines = document.querySelectorAll('.line')
const content = document.querySelector('.dummyClass');
const start = document.querySelector('.start');
const buttonBcg = document.querySelector('.btn--bcg');
const titleAnimation = document.querySelectorAll('.to--animate');
const topH1 = document.querySelector('.title');


class MyWebsite{
    constructor(){
        button.addEventListener('click', this.ButtonClick.bind(this));
        button.addEventListener('mouseover', this.ButtonMouseOver.bind(this));
        button.addEventListener('mouseout', this.ButtonMouseOut.bind(this));
        topH1.addEventListener('mouseover', this.titleMouseOver.bind(this));
        topH1.addEventListener('mouseout', this.titleMouseOut.bind(this));
        
    }
    ButtonClick(event){
        event.preventDefault();
        start.style.top = '-2000px';
        content.classList.remove('hidden');
    }
    ButtonMouseOver(event){
        event.preventDefault();
        button.style.color = 'black';
        buttonBcg.style.transform = 'translateX(0%)'
        button.style.cursor = 'pointer';
    }
    ButtonMouseOut(event){
        event.preventDefault();
        buttonBcg.style.transform = 'translateX(-100%)'
        button.style.color = 'white';
        button.style.cursor = '';
    }
    //TOP TITLE WITH BUBBLING
    titleMouseOver(event){
        event.preventDefault();
        if(event.target.classList.contains('to--animate')){
            event.target.style.transform = 'translateY(-20px)'
            event.target.style.cursor = 'pointer';
            event.target.style.color = 'white';
        }
    }
    titleMouseOut(event){
        event.preventDefault();
        event.target.style.cursor = '';
        event.target.style.transform = 'translateY(0%)'
        event.target.style.color = '';
    }
}
const website = new MyWebsite();

