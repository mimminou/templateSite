const logo = document.querySelector(".Navbar_logo_container");

//details sections :
const chauff_section = document.querySelector(".chauff_section");
const cold_section = document.querySelector(".refr_section");
const clim_section = document.querySelector(".clim_section");
const install_section = document.querySelector(".install_section");


logo.addEventListener("click", function(){
    window.location.href="/";
});


const btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        //Add function here
        if(btns[i].id=="heat_btn"){
            chauff_section.scrollIntoView({
                behavior : "smooth"
            });

        }
        if(btns[i].id=="cold_btn"){
            refr_section.scrollIntoView({
                behavior : "smooth"
            });
        }
        if(btns[i].id=="ac_btn"){
            clim_section.scrollIntoView({
                behavior : "smooth"
            });
        }
        if(btns[i].id=="install_btn"){
            install_section.scrollIntoView({
                behavior : "smooth"
            });
        }
    });
}


