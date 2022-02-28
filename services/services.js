const serv_Description = document.querySelector(".serv_description");
// const chauffage_Button = document.querySelector("heat_button");
// const froid_button = document.querySelector("cold_button");
// const clim_button = document.querySelector("ac_button");
// const install_button = document.querySelector("installation_button");

//details sections :
const chauff_section = document.querySelector("chauff_section");
const cold_section = document.querySelector("refr_section");
const clim_section = document.querySelector("clim_section");
const install_section = document.querySelector("install_section");



const btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        //Add function here
        if(btns[i].id==="heat_btn"){
            
        }
        if(btns[i].id=="cold_btn"){

        }
        if(btns[i].id=="ac_btn"){
            
        }
        if(btns[i].id=="insall_btn"){
            
        }
    });
}


