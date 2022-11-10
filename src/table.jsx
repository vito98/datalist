import React from "react";
import "./index.css";
import { students } from "./data";

class Table extends React.Component {
  state = {
    student: students,
  };

  render() {
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.student.filter((val) => val.id !== id);

      this.setState({ student: res });
    };

    const filter = ({ target: { value, name } }) => {
      let res = students.filter((val) =>
        `${val[name]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ student: res });
    };
    return (
      <div className="table">
        <table className="table-data">
          <thead className="thead">
            <tr>
              <th colSpan={9}>
                <div className="search-box">
                  <h1 className="header">Student datalist</h1>
                  <div className="input-search">
                    <input
                      className="input-btns"
                      name="id"
                      onChange={filter}
                      placeholder="Id"
                      type="text"
                    />
                    <input
                      className="input-btns"
                      name="name"
                      onChange={filter}
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th className="theader1">ID</th>
              <th className="theader">Name</th>
              <th className="theader">Age</th>
              <th className="theader">Adress</th>
              <th className="theader">Status</th>
              <th className="theader">Nickname</th>
              <th className="theader">Univ</th>
              <th className="theader">Job</th>
              <th className="theader">Edit</th>
            </tr>
          </thead>

          <tbody>
            {this.state.student.map((std) => {
              return (
                <tr key={std.id}>
                  <td className="tdata1"> {std.id} </td>
                  <td className="tdata"> {std.name} </td>
                  <td className="tdata"> {std.age} </td>
                  <td className="tdata"> {std.adress} </td>
                  <td className="tdata"> {std.status} </td>
                  <td className="tdata"> {std.nickname} </td>
                  <td className="tdata"> {std.univ} </td>
                  <td className="tdata"> {std.job} </td>
                  <td className="tdata">
                    <button
                      className="tdata-btn"
                      onClick={() => onDelete(std.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
