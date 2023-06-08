function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var clonedElement = draggedElement.cloneNode(true);
    var originalWidth = draggedElement.width;
    var originalHeight = draggedElement.height;
    clonedElement.style.width = originalWidth + "px";
    clonedElement.style.height = originalHeight + "px";
    ev.target.appendChild(clonedElement);

    // Remove the dragged element from the previous container
    draggedElement.parentNode.removeChild(draggedElement);

    // Display success message
    displaySuccessMessage("Image added successfully!");
}

function displaySuccessMessage(message) {
    alert(message);
}

function resetPage() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    container1.innerHTML = `
    <div class="item">
        <img id="drag1" src="./images/bOvf94dPRxWu0u3QsPjF_tree.jpg" draggable="true" ondragstart="drag(event)" width="100" height="50">
    </div>
    <div class="item">
        <img id="drag2" src="./images/full-size-hd-nature-1920x1200-wallpaper-thumb.jpg" draggable="true" ondragstart="drag(event)" width="100" height="50">
    </div>
    <div class="item">
        <img id="drag3" src="./images/images.jpeg" draggable="true" ondragstart="drag(event)" width="100" height="50">
    </div>
    `;
    container2.innerHTML = "";
}
