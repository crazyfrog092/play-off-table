let dragObject = {};

function createAvatar() {
  // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
  const avatar = dragObject.elem;
  const old = {
    parent: avatar.parentNode,
    nextSibling: avatar.nextSibling,
    position: avatar.position || '',
    left: avatar.left || '',
    top: avatar.top || '',
    zIndex: avatar.zIndex || '',
  };

  // функция для отмены переноса
  avatar.rollback = function cancelDrag() {
    old.parent.insertBefore(avatar, old.nextSibling);
    avatar.style.position = old.position;
    avatar.style.left = old.left;
    avatar.style.top = old.top;
    avatar.style.zIndex = old.zIndex;
  };

  return avatar;
}

function startDrag() {
  const { avatar } = dragObject;

  document.body.appendChild(avatar);
  avatar.style.zIndex = 9999;
  avatar.style.position = 'absolute';
}

function findDroppable(event) {
  // спрячем переносимый элемент
  dragObject.avatar.hidden = true;

  // получить самый вложенный элемент под курсором мыши
  const elem = document.elementFromPoint(event.clientX, event.clientY);

  // показать переносимый элемент обратно
  dragObject.avatar.hidden = false;

  if (elem == null) {
    // такое возможно, если курсор мыши "вылетел" за границу окна
    return null;
  }

  return elem.closest('.droppable');
}

function finishDrag(e) {
  const dropElem = findDroppable(e);

  if (dropElem) {
    // TODO
  } else {
    dragObject.avatar.rollback();
  }
}

function getCoords(elem) { // кроме IE8-
  const box = elem.getBoundingClientRect();

  return {
    top: box.top,
    left: box.left,
  };
}

document.onmousedown = function mouseDown(e) {
  if (e.button !== 0) return; // если клик правой кнопкой мыши, то он не запускает перенос

  const elem = e.target.closest('.draggable');

  if (!elem) return; // не нашли, клик вне draggable-объекта

  // запомнить переносимый объект
  dragObject.elem = elem;

  // запомнить координаты, с которых начат перенос объекта
  dragObject.downX = e.pageX;
  dragObject.downY = e.pageY;
};

document.onmouseup = function mouseUp(e) {
  // (1) обработать перенос, если он идёт
  if (dragObject.avatar) {
    finishDrag(e);
  }

  // в конце mouseup перенос либо завершился, либо даже не начинался
  // (2) в любом случае очистим "состояние переноса" dragObject
  dragObject = {};
};

document.onmousemove = function mouseMove(e) {
  if (!dragObject.elem) return; // элемент не зажат

  if (!dragObject.avatar) { // если перенос не начат...
    // посчитать дистанцию, на которую переместился курсор мыши
    const moveX = e.pageX - dragObject.downX;
    const moveY = e.pageY - dragObject.downY;
    if (Math.abs(moveX) < 5 && Math.abs(moveY) < 5) {
      return; // ничего не делать, мышь не передвинулась достаточно далеко
    }

    dragObject.avatar = createAvatar(e); // захватить элемент
    if (!dragObject.avatar) {
      dragObject = {}; // аватар создать не удалось, отмена переноса
      return; // возможно, нельзя захватить за эту часть элемента
    }

    // аватар создан успешно
    // создать вспомогательные свойства shiftX/shiftY
    const coords = getCoords(dragObject.avatar);
    dragObject.shiftX = dragObject.downX - coords.left;
    dragObject.shiftY = dragObject.downY - coords.top;

    startDrag(e); // отобразить начало переноса
  }

  // отобразить перенос объекта при каждом движении мыши
  dragObject.avatar.style.left = `${e.pageX - dragObject.shiftX}px`;
  dragObject.avatar.style.top = `${e.pageY - dragObject.shiftY}px`;
};
