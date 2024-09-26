// Definition of the Teacher interface with optional and dynamic properties
interface Teacher {
	readonly firstName: string;   // Must be set during initialization, not modifiable
	readonly lastName: string;    // Must be set during initialization, not modifiable
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;   // Optional
	location: string;
  
	// Allows adding additional properties of type string with any value
	[propName: string]: any;
  }
  
  // Creating a teacher object with additional properties
  const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  
  // Function to render teacher data in a table
  function renderTeacherTable(teacher: Teacher) {
	// Create the table
	const table = document.createElement('table');
	
	// Create a header row
	const headerRow = table.insertRow();
	const headers = ['First Name', 'Last Name', 'Full Time', 'Location', 'Contract'];
	
	headers.forEach(headerText => {
	  const headerCell = document.createElement('th');
	  headerCell.textContent = headerText;
	  headerRow.appendChild(headerCell);
	});
	
	// Add the teacher data to a row
	const row = table.insertRow();
	row.insertCell(0).textContent = teacher.firstName;
	row.insertCell(1).textContent = teacher.lastName;
	row.insertCell(2).textContent = teacher.fullTimeEmployee.toString();
	row.insertCell(3).textContent = teacher.location;
	row.insertCell(4).textContent = teacher.contract.toString();
	
	// Append the table to the body
	document.body.appendChild(table);
  }
  
  // Call the function to render the table with teacher3's data
  renderTeacherTable(teacher3);
  