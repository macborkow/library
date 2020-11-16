let myLibrary = [];
let bookId = 0;
let offset = 0;
let tr = [];
let td = [];
let butR = [];
let but = [];
const table = document.querySelector('#booktable');
const adder = document.querySelector('#adder');
const popup = document.querySelector('#popup');
const dimmer = document.querySelector('#dimmer');
const submitBut = document.querySelector('#submitBut');

submitBut.addEventListener('click', submitBook);

function Book(title, author, numPages, read, id) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.read = read;
	this.id = id;
	this.info = function() {
		let temp = "";
		this.read?temp="read":temp="not read yet";
		return (this.title+" by "+this.author+", "+this.numPages+" pages, "+temp);
	}
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary[bookId] = new Book(title, author, pages, read, bookId);
	console.log(myLibrary[bookId].info());
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
			but[bookId] = document.createElement('button');
			td[bookId][i].appendChild(but[bookId]);
			but[bookId].textContent = temp;
			but[bookId].dataset.id = bookId;
			let butt = but[bookId];
			but[bookId].addEventListener('click', () => {
				changeRead(butt.dataset.id);
			});
			break;
			case 4: temp = '-';
			td[bookId][i].classList.add('removetd');
			butR[bookId] = document.createElement('button');
			td[bookId][i].appendChild(butR[bookId]);
			butR[bookId].textContent = temp;
			butR[bookId].classList.add('remover');
			butR[bookId].dataset.id = bookId+1;
			let buttR = butR[bookId];
			butR[bookId].addEventListener('click', () => {
				table.deleteRow(buttR.dataset.id);
				bookId--;	
				shuffle(buttR.dataset.id);
				myLibrary[buttR.dataset.id] = null;
			});
			break;
		}
		
	}
	bookId++;
}

function shuffle(id) {
	
	butR.forEach( item => {
		if(item.dataset.id >= id) {
			item.dataset.id = item.dataset.id-1;
		}
		
	})
	
}

function changeRead(id) {
	if(but[id].textContent == "Yes") {
		but[id].textContent = 'No';
	} else {
		but[id].textContent = 'Yes';
	}
}

adder.addEventListener('click', () => {
	popup.style.visibility = 'visible';
	dimmer.style.visibility = 'visible';
});

function submitBook() {
	addBookToLibrary("The Hobbit", "J.R.R. Tolkien", bookId, false);
	popup.style.visibility = 'hidden';
	dimmer.style.visibility = 'hidden';
}

