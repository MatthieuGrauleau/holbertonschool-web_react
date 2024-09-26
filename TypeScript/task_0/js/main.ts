interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Jeniffer',
    lastName: 'Lawrence',
    age: 32,
    location: 'London'
};

const student2: Student = {
    firstName: 'Dua',
    lastName: 'Lipa',
    age: 26,
    location: 'Paris'
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
	const table = document.createElement('table');
  
	studentsList.forEach((student) => {
	  const row = table.insertRow();
	  const cell1 = row.insertCell(0);
	  const cell2 = row.insertCell(1);
  
	  cell1.textContent = student.firstName;
	  cell2.textContent = student.location;
	});

	document.body.appendChild(table);
  }

  renderTable();