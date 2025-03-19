document.addEventListener('mousemove', function(e) {
    const cursorEffect = document.getElementById('cursor-effect');
    cursorEffect.style.left = e.clientX + 'px';
    cursorEffect.style.top = e.clientY + 'px';
});
