import { Component } from "react";
import { Link } from "react-router-dom";
import "./Doglist.css";

class DogList extends Component {
  render() {
    return (
      <>
        <h1 className="text-center">Dog list!</h1>
        <div className="px-4 py-5 text-center">
          {this.props.dogs.map((dog) => (
            <Link to={"/" + dog.name} className="d-inline-flex flex-column Dog">
              <img
                src={dog.src}
                alt="dog-img"
                width="200px"
                height="200px"
                className="rounded-circle mx-5"
              />
              <h3 className="d-inline my-2">{dog.name}</h3>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default DogList;
