const scene = new THREE.Scene();  // ✅ Create a 3D scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // ✅ Set up the camera
const renderer = new THREE.WebGLRenderer();  // ✅ Initialize Three.js renderer
renderer.setSize(window.innerWidth, window.innerHeight);  // ✅ Match window size
document.body.appendChild(renderer.domElement);  // ✅ Add 3D scene to HTML page
