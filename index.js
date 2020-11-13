let myLibrary = [];
let bookId = 0;
let tr = [];
let td = [];
const table = document.querySelector('#booktable');

function Book(title, author, numPages, read) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.read = read;
	this.info = function() {
		let temp = "";
		this.read?temp="read":temp="not read yet";
		return (this.title+" by "+this.author+", "+this.numPages+" pages, "+temp);
	}
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read));
	console.log(myLibrary[myLibrary.length-1].info());
	tr[bookId] = table.insertRow(bookId+1);
	td[bookId] = [];
	for(let i = 0;i < 5; ++i) {
		console.log(i);
		td[bookId][i] = tr[bookId].insertCell(i);
		let temp = '';
		switch(i) {
			case 0: temp = myLibrary[bookId].author; td[bookId][i].textContent = temp; break;
			case 1: temp = myLibrary[bookId].title; td[bookId][i].textContent = temp; break;
			case 2: temp = myLibrary[bookId].numPages; td[bookId][i].textContent = temp; break;
			case 3: myLibrary[bookId].read?temp="Yes":temp="No"; 
			let but = document.createElement('button');
			td[bookId][i].appendChild(but);
			but.textContent = temp;
			break;
			case 4: temp = '-';
			td[bookId][i].classList.add('removetd');
			let butR = document.createElement('button');
			td[bookId][i].appendChild(butR);
			butR.textContent = temp;
			butR.classList.add('remover');
			break;
		}
		
	}
	bookId++;
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Booba", "J.R.R. Poopa", 295, false);