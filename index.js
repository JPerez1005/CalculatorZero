VanillaTilt.init(document.querySelector(".container"), {
    max: 15,
    speed: 20,
    glare: true,
    "max-glare":0.1,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".container"));