let app = {
    form: document.getElementById('fibonnacci-form'),
    fibonnacciNumbers: [0,1],
    resultTable: document.getElementById('result'),
    
    init: function () {
        app.form.addEventListener('submit', app.handleDisplayResult);
    },

    handleDisplayResult : function (evt) {
        evt.preventDefault();
        let inputValue = document.getElementById('nbElements').value;
        app.calculateFibonnacci(inputValue);

        app.fibonnacciNumbers.forEach((value, index) => {
            let tablerow = document.createElement('tr');
            let firstCell = document.createElement('td');
            let secondCell = document.createElement('td');

            if (index === 0) {
                secondCell.textContent = 0;
            } else {
                firstCell.textContent = index - 1;
                secondCell.textContent=value;
            }

            app.resultTable.appendChild(tablerow);
            tablerow.appendChild(firstCell);
            tablerow.appendChild(secondCell);
        });

        document.querySelector('.result table').classList.remove('d-none');
        document.querySelector('.result p').classList.add('d-none');
    },

    calculateFibonnacci: function (nbElements) {
        for (i=0; i < nbElements; i++) {
            let lastIndex = app.fibonnacciNumbers.length - 1;
            let preLastIndex = app.fibonnacciNumbers.length - 2;
            
            let newNumber = app.fibonnacciNumbers[lastIndex] + app.fibonnacciNumbers[preLastIndex];

            app.fibonnacciNumbers.push(newNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', app.init);