 /*드롭 앤 드래그 (연구 필요!)*/
 const memos = document.querySelectorAll('.memo');

 memos.forEach(memo => {
     memo.addEventListener('dragstart', dragStart);
     memo.addEventListener('dragend', dragEnd);
 });

 function dragStart(e) {
     e.target.classList.add('dragging');
 }

 function dragEnd(e) {
     e.target.classList.remove('dragging');
 }

 document.querySelector('.memo-board').addEventListener('dragover', (e) => {
     e.preventDefault();
     const draggingMemo = document.querySelector('.dragging');
     const afterElement = getDragAfterElement(e.clientY);
     if (afterElement == null) {
         e.target.appendChild(draggingMemo);
     } else {
         e.target.insertBefore(draggingMemo, afterElement);
     }
 });

 function getDragAfterElement(y) {
     const draggableElements = [...document.querySelectorAll('.memo:not(.dragging)')];

     return draggableElements.reduce((closest, child) => {
         const box = child.getBoundingClientRect();
         const offset = y - box.top - box.height / 2;
         if (offset < 0 && offset > closest.offset) {
             return { offset: offset, element: child };
         } else {
             return closest;
         }
     }, { offset: Number.NEGATIVE_INFINITY }).element;
 }