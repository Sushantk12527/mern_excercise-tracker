import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Excercises = (props) => (
  <tr>
    <td>{props.excercise.username}</td>
    <td>{props.excercise.description}</td>
    <td>{props.excercise.duration}</td>
    <td>{props.excercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.excercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExcercise(props.excercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

class ExcerciseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { excercises: [] };
  }

  deleteExcercise = (id) => {
    axios
      .delete("http://localhost:5000/excercises/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      excercises: this.state.excercises.filter((el) => el._id !== id),
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/excercises/")
      .then((res) => {
        this.setState({ excercises: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  excerciseList() {
    return this.state.excercises.map((currentexercise) => {
      return (
        <Excercises
          excercise={currentexercise}
          deleteExcercise={this.deleteExcercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.excerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExcerciseList;
