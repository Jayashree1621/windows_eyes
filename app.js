const pupils = document.querySelectorAll(".pupil"); 
document.addEventListener("mousemove", (e) => {
    pupils.forEach(pupil=>{
        const rect = pupil.parentElement.getBoundingClientRect();
        console.log(rect)
        const centerX = rect.left + rect.width / 2;
        //console.log(centerX);        
        const centerY = rect.top + rect.height / 2;
        //console.log(centerY);
        const dx = e.clientX - centerX;
        //console.log(dx);        
        const dy = e.clientY - centerY;
        //console.log(dy);        
        const angle = Math.atan2(dy, dx);
        //console.log(angle);
        
        const maxDistance = 30;
        
        const x = Math.cos(angle) * maxDistance;
        const y = Math.sin(angle) * maxDistance;
        pupil.style.transform =`translate(${x}px, ${y}px)`;
    })
})