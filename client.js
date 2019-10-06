import { ReactInstance, Surface } from "react-360-web";


function init(bundle, parent, options = {}) {

  // Create new instance of React VR content
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options
  });

  // *Handler for receiving message with properties from components
  r360.runtime.executor._worker.addEventListener('message', (e) => onMessage(e, r360));

  // Create a new Cylinder Surface in app runtime
  const cylinderSurface = new Surface(
    4680, // width
    1200, // height
    Surface.SurfaceShape.Cylinder //shape
  );

  // Hide gyroscope circle
  r360.overlay.hide();
  r360.controls.cameraControllers[2]._enabled = false;

  // Attach a React component to a default application Surface
  r360.renderToSurface(
    r360.createRoot("App", {}),
    cylinderSurface
  );
}

// Function called after triggering and receiving message from React components
function onMessage(e, r360) {
  // Set ReactInstance scene rotation if parameter was received
  if(e.data.type) {
    r360.scene.rotation.x = e.data.type.x;
    r360.scene.rotation.y = e.data.type.y;
    r360.scene.rotation.z = e.data.type.z;
  }
}

// Call all mentioned fuctions 
window.React360 = { init, onMessage };