const leftPanel = document.querySelector(".left");
const rightPanel = document.querySelector(".right");

window.addEventListener("mousemove", (e) => {
    let percentage = (e.clientX / window.innerWidth) * 100;

    let minSize = 30; 
    let maxSize = 70; 

    if (percentage < 50) {
        /*Ha az egér a classy oldalra megy, akkor nőjön a bal oldal; */
        leftPanel.style.width = `${Math.min(100 - percentage, maxSize)}%`;
        rightPanel.style.width = `${Math.max(percentage, minSize)}%`;
    } else {
        /*Ha az egér a fancy oldalra megy, akkor nőjön a jobb oldal; */
        rightPanel.style.width = `${Math.min(percentage, maxSize)}%`;
        leftPanel.style.width = `${Math.max(100 - percentage, minSize)}%`;
    }
});

/*classyra ugorjon; */
document.getElementById("classy").addEventListener("click", function() {
    window.location.href = "classy.html";
});

/*fancyre ugorjon; */
document.getElementById("fancy").addEventListener("click", function() {
    window.location.href = "fancy.html";
});

/*logóra kattintva mindig a kezdőlapra ugorjon; */
document.querySelector(".logo img").addEventListener("click", function() {
    window.location.href = "index.html";
});


