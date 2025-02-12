data.forEach((entry, index) => {
    let startX = index * 5 - 10;  // ✅ Space out bars

    let yearIndex = 0;
    ["2000", "2015", "2023", "2030"].forEach(year => {
        let height = entry[year] / 100;  // ✅ Scale down height for visualization
        let geometry = new THREE.BoxGeometry(1, height, 1);  // ✅ Create a cube for each year
        let material = new THREE.MeshBasicMaterial({ color: colors[year] });  // ✅ Apply the correct color
        let cube = new THREE.Mesh(geometry, material);  // ✅ Create the 3D cube
        cube.position.set(startX + yearIndex, height / 2, -5);  // ✅ Set cube position
        scene.add(cube);  // ✅ Add cube to the scene

        yearIndex += 1.5; // ✅ Adjust spacing between bars
    });
});
