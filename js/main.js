// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно).


// отримуємо елемент "p" з "html"
let textRef = document.querySelector('p');

// створюємо тег "table"
let tableRef = document.createElement('table');
tableRef.style.border = '2px solid black';
tableRef.style.width = '500px';
tableRef.style.height = '300px';

// після тега "p" додаємо тег "table"
textRef.after(tableRef);

// table
function createTable() {
    let count = 1;
    for (let i = 0; i < 10; i++) {
        let trRef = document.createElement('tr');

        for (let j = 0; j < 10; j++) {
            let tdRef = document.createElement('td');
            trRef.append(tdRef);

            tdRef.textContent = count++;

            tdRef.style.border = '1px solid black';
            tdRef.style.width = '20px';
            tdRef.style.height = '20px';
            tdRef.style.textAlign = 'center';
        }

        tableRef.append(trRef);
    }
}
createTable();