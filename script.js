const button = document.querySelector('.btn');
const abtMe = document.getElementById('aboutMe');
const hamMen = document.getElementById('hamburger--menu');
const hamLines = document.querySelectorAll('.line')
button.addEventListener('click', function(e){
    e.preventDefault();
    abtMe.scrollIntoView({behavior: "smooth"});
})
const linesArr = [...hamLines];
console.log(linesArr);
hamMen.addEventListener('click', function(e){
    e.preventDefault();
    linesArr.forEach(line => {
        // console.log(line);
        line.classList.toggle(`line--${linesArr.indexOf(line)}`);
    })

})