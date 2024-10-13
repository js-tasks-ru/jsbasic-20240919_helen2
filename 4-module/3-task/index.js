function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) { 
    let tr = table.rows[i];
    let cells = Array.from(tr.cells);

    let statusCell = cells.find(td => td.hasAttribute('data-available'));
    if (statusCell) {
        if (statusCell.getAttribute('data-available') === 'true') {
            tr.classList.add('available');
        } else if (statusCell.getAttribute('data-available') === 'false') {
            tr.classList.add('unavailable');
        }
    } else {
        tr.setAttribute('hidden', ''); 
    }

    let genderCell = cells[2]; 
    if (genderCell.textContent === 'm') {
        tr.classList.add('male');
    } else if (genderCell.textContent === 'f') {
        tr.classList.add('female');
    }

    let ageCell = cells[1]; 
    if (parseInt(ageCell.textContent, 10) < 18) {
        tr.style.textDecoration = 'line-through';
    }
}
}
