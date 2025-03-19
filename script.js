// NEW CURSOR EFFECT - Creates multiple shadows that fade away
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    const shadowContainer = document.querySelector('.shadow-container');
    const dynamicShadow = document.createElement('div');
    dynamicShadow.classList.add('dynamic-shadow');
    // ... rest of the effect code
});
