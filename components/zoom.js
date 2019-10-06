// Enabling camera zoom functionality

let tempZoom = 0;

window.addEventListener('wheel', event => {
    // Getting the mouse wheel change and normalizing it
    const rotation = Math.sign(event.wheelDelta);
    
    tempZoom += rotation;

    // Limiting the tempZoom to 5
    if (tempZoom < 1) tempZoom = 1;
    if (tempZoom > 8) tempZoom = 8;

    // Limiting the finalZoom to 1.5
    let finalZoom  = 100 * (1 + tempZoom * 0.1);
    
    // Setting the zoom property into container element
    document.getElementById('container').style.zoom=`${finalZoom.toString()}%`;
});