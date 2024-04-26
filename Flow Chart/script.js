const draggable = document.getElementById('draggable');
const droppable = document.getElementById('droppable');

draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

droppable.addEventListener('dragover', dragOver);
droppable.addEventListener('dragenter', dragEnter);
droppable.addEventListener('dragleave', dragLeave);
droppable.addEventListener('drop', dragDrop);

function dragStart() {
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop() {
    this.classList.remove('hovered');
    this.appendChild(draggable);
}
