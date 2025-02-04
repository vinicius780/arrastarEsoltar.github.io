let areas = {
  a: null,
  b: null,
  c: null
};
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}

function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});

function dragOver(e) {
  if (e.currentTarget.querySelector(".item") === null) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
  }
}
function dragLeave(e) {
  e.currentTarget.classList.remove("hover");
}
function drop(e) {
  e.currentTarget.classList.remove("hover");

  let dragItem = document.querySelector(".item.dragging");
  if (e.currentTarget.querySelector(".item") === null) {
    e.currentTarget.appendChild(dragItem);
    updateAreas();
  }
}

document.querySelector(".neutralArea").addEventListener("dragover", dragOverNeutral);
document.querySelector(".neutralArea").addEventListener("dragleave", dragLeaveNeutral);
document.querySelector(".neutralArea").addEventListener("drop", dropNeutral);

function dragOverNeutral(e) {
  e.preventDefault();
  e.currentTarget.classList.add("hover");
}
function dragLeaveNeutral(e) {
  e.currentTarget.classList.remove("hover");
}
function dropNeutral(e) {
  e.currentTarget.classList.remove("hover");
  let dragItem = document.querySelector(".item.dragging");
  e.currentTarget.appendChild(dragItem);
  updateAreas();
}

// função de logica

function updateAreas() {
  document.querySelectorAll(".area").forEach((area) => {
    let name = area.getAttribute("data-name");

    if (area.querySelector(".item") !== null) {
      areas[name] = area.querySelector(".item").innerHTML;
    } else {
      areas[name] = null;
    }
  });

  const areasContainer = document.querySelector(".areas");

  // Verifica apenas quando todas as áreas estiverem preenchidas
  if (areas.a && areas.b && areas.c) {
    if (areas.a === "1" && areas.b === "2" && areas.c === "3") {
      areasContainer.classList.add("correct");
      areasContainer.classList.remove("wrong");
    } else {
      areasContainer.classList.add("wrong");
      areasContainer.classList.remove("correct");
    }
  } else {
    // Se ainda não estiverem todas preenchidas não faz nada
    areasContainer.classList.remove("correct");
    areasContainer.classList.remove("wrong");
  }
}
