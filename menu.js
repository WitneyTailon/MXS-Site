
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header');
    header.classList.toggle('rolagemMenu', this.window.scrollY > 0);
})