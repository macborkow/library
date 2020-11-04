function Book(title, author, numPages, wasRead) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.wasRead = wasRead;
	this.info = function() {
		let temp = "";
		this.wasRead?temp="read":temp="not read yet";
		return (this.title+" by "+this.author+", "+this.numPages+" pages, "+temp);
	}
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());