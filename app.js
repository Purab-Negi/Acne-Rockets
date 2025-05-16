const init = ()=>{
    const hamburgerBtn = document.getElementById("mobile-open-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const toggleMenu = ()=>{
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    }
    hamburgerBtn.addEventListener("click",toggleMenu);
    mobileMenu.addEventListener("click",toggleMenu);
}
document.addEventListener("DOMContentLoaded",init);