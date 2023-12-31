import "./App.css";
import { Book } from "./Book";
import { BookList } from "./BookList";
import { Footer } from "./Footer";
import { Header } from "./Header";


function App() {
  return (
    <div className="container">
      <Header />
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>

      <BookList />

      <Footer />
    </div>
  );
}

export default App;
