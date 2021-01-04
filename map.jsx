import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/418WTFjAiiL.jpg",
    title: "Dangerous Affair: Playing With Fire",
    author: "Ava Cross",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51cBTZ4n3LL.jpg",
    title: "Patriot's Pain : An MC Romance",
    author: "Trent Jordan",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
        // return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
