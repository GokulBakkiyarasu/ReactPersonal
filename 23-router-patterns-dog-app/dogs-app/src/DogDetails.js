import { Component } from "react";
import "./DogDetails.css";
import { Link } from "react-router-dom";

class DogDetails extends Component {
  render() {
    const dog = this.props.dogs.find(
      (dog) => dog.name === this.props.match.params.name
    );
    console.log(dog);
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
          <img src={dog.src} className="card-img-top" alt="dogImg" />
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.age} years old</p>
          </div>
          <ul className="list-group list-group-flush">
            {dog.facts.map((fact) => (
              <li className="list-group-item">{fact}</li>
            ))}
          </ul>
          <div className="card-body">
            <Link to="/" className="btn btn-primary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;
