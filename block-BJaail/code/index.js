let form=document.querySelector(`form`);
let bookListRoot=document.querySelector(`.book_list`);

const nameElm=form.elements.bookName;
const imageElm=form.elements.bookImage;
const authorElm=form.elements.bookAuthor;

class BookList{//individual books
    constructor(books=[]){
        this.books=books;
    }
    addBooks(name,author,img){
        let book=new Books(name,author,img);
        this.books.push(book);
        this.createUI();
    }
    createUI(){
        bookListRoot.innerHTML="";
        this.books.forEach((book)=>{
        let li=document.createElement(`li`);
        let img=document.createElement(`img`);
        img.src=book.img;
        let p= document.createElement(`p`);
        p.innerText=book.author;
        let h1= document.createElement(`h1`);
        h1.innerText=book.name;
        let button= document.createElement(`button`);
        button.classList.add(`button_DOM`);
        button.innerText=`Mark As Read`;
        li.append(img,h1,p,button);
        bookListRoot.append(`li`);
        })
    }
}

let library= new BookList();

class Books{///inside each book
    constructor(name,author,img){
        this.name=name;
        this.author=author;
        this.img=img;
    }

}


function handleSubmit(event){
    event.preventDefault();
    const name=nameElm.value;
    const image=imageElm.value;
    const author=authorElm.value;
    library.addBooks(name,author,image);
}

form.addEventListener(`submit`,handleSubmit);