function breakText(){
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var clutter ="";
    splittedText.forEach(function(e,idx){
        if(idx<(splittedText.length/2))
            {
                clutter += `<span class="a">${e}</span>`;
            }
        else{
            clutter += `<span class="b">${e}</span>`;
        }
        
    })
    h1.innerHTML = clutter;
    
}

breakText();

gsap.from("h1 .a",{
    y:150,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15 
})
gsap.from("h1 .b",{
    y:150,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15 
})