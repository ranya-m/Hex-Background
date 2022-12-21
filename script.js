let body = document.querySelector("body");
let bgButton = document.getElementsByTagName("button")[0];
// let refRGB = document.querySelector("#refRgb");
let refHEX = document.getElementsByTagName("h3")[0];



let randomBg = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
    refHEX.textContent = `# ${randomColor}`;
}

bgButton.addEventListener("click", randomBg);








// ******************************************************************************


// Another way : ma sdeqch
// function randomBgColor() {
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let bgColor = "rgb(" + x + "," + z + ")";
//     console.log(bgColor);

// document.body.style.background = bgColor;
// }
// randomBgColor() ;



