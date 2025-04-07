'use strict';

const tableHeader = document.querySelector('thead tr');

tableHeader.addEventListener('click', (e) => {
  sortTable(e.target.textContent);

  for (let i = 0; i < tableBody.length; i++) {
    for (let k = 0; k < tableBody[i].children.length; k++) {
      const currentEmployee =
        emloyees[i][tableHeader.children[k].textContent.toLowerCase()];

      tableBody[i].children[k].innerHTML = currentEmployee;
    }
  }
});

const tableBody = document.querySelectorAll('tbody tr');
const emloyees = Array.from(tableBody).map((employee) => {
  return {
    name: employee.children[0].textContent,
    position: employee.children[1].textContent,
    age: +employee.children[2].textContent,
    salary: employee.children[3].textContent,
  };
});

function sortTable(sortValue) {
  if (sortValue === 'Age') {
    return emloyees.sort((employee1, employee2) => {
      return employee1.age - employee2.age;
    });
  }

  if (sortValue === 'Salary') {
    return emloyees.sort((employee1, employee2) => {
      const empl1Salary = +employee1.salary.slice(1).split(',').join('');
      const empl2Salary = +employee2.salary.slice(1).split(',').join('');

      return empl1Salary - empl2Salary;
    });
  }

  if (sortValue === 'Name' || sortValue === 'Position') {
    return emloyees.sort((employee1, employee2) => {
      return employee1[sortValue.toLowerCase()].localeCompare(
        employee2[sortValue.toLowerCase()]);
    });
  }
}
