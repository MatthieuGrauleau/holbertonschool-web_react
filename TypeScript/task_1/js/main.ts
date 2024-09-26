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
  
  // Definition of the Directors interface extending Teacher
  interface Directors extends Teacher {
	numberOfReports: number; // New attribute required for Directors
  }
  
  // Creating a teacher object with additional properties
  const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  
  // Creating a director object with the required properties
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
  
  console.log(teacher3);
  console.log(director1);
  
  // Function to render teacher or director data in a table
  function renderTeacherTable(teacher: Teacher | Directors) {
	// Create the table
	const table = document.createElement('table');
	
	// Create a header row
	const headerRow = table.insertRow();
	const headers = ['First Name', 'Last Name', 'Full Time', 'Location', 'Contract', 'Number of Reports'];
	
	headers.forEach(headerText => {
	  const headerCell = document.createElement('th');
	  headerCell.textContent = headerText;
	  headerRow.appendChild(headerCell);
	});
	
	// Add the teacher or director data to a row
	const row = table.insertRow();
	row.insertCell(0).textContent = teacher.firstName;
	row.insertCell(1).textContent = teacher.lastName;
	row.insertCell(2).textContent = teacher.fullTimeEmployee.toString();
	row.insertCell(3).textContent = teacher.location;
	row.insertCell(4).textContent = teacher.contract ? teacher.contract.toString() : 'N/A';
  
	// Check if the object is of type Directors and add numberOfReports
	if ('numberOfReports' in teacher) {
	  row.insertCell(5).textContent = teacher.numberOfReports.toString();
	} else {
	  row.insertCell(5).textContent = 'N/A';
	}
	
	// Append the table to the body
	document.body.appendChild(table);
  }
  
  // Call the function to render the table with teacher3's data
  renderTeacherTable(teacher3);
  
  // Call the function to render the table with director1's data
  renderTeacherTable(director1);
  