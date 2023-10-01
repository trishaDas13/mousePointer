window.addEventListener("mousemove", (event) => {
    pointerCount.innerHTML = `
    <div id="div1">
    ${event.clientX}
    </div>
    <div id="div2">
    ${event.clientY}
    </div>
    `;
});