import React from "react";
import "./index.css";
import { students } from "./data";

class Table extends React.Component {
  state = {
    student: students,
    selected: null,
  };

  render() {
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.student.filter((val) => val.id !== id);

      this.setState({ student: res });
    };

    const onEdit = (value) => {
      console.log(value);
      this.setState({ selected: value });
    };

    const onCancel = (value) => {
      console.log(value);
      this.setState({ selected: value });
    };

    const onSave = () => {
      let res = this.state.student.map((val) =>
        this.state.selected?.id === val.id ? this.state.selected : val
      );

      this.setState({ student: res, selected: null });
    };

    const onChangeName = ({ target: { value, name } }) => {
      console.log(value);
      this.setState((state) => {
        return { selected: { ...state.selected, [name]: value } };
      });
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
              let check = this.state.selected?.id === std.id;
              return (
                <tr key={std.id}>
                  <td className="tdata1"> {std.id} </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="name"
                        onChange={onChangeName}
                        value={this.state.selected.name}
                      />
                    ) : (
                      std.name
                    )}{" "}
                  </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="age"
                        onChange={onChangeName}
                        value={this.state.selected.age}
                      />
                    ) : (
                      std.age
                    )}{" "}
                  </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="adress"
                        onChange={onChangeName}
                        value={this.state.selected.adress}
                      />
                    ) : (
                      std.adress
                    )}{" "}
                  </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="status"
                        onChange={onChangeName}
                        value={this.state.selected.status}
                      />
                    ) : (
                      std.status
                    )}{" "}
                  </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="nickname"
                        onChange={onChangeName}
                        value={this.state.selected.nickname}
                      />
                    ) : (
                      std.nickname
                    )}{" "}
                  </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="univ"
                        onChange={onChangeName}
                        value={this.state.selected.univ}
                      />
                    ) : (
                      std.univ
                    )}{" "}
                  </td>
                  <td className="tdata">
                    {" "}
                    {check ? (
                      <input
                        name="job"
                        onChange={onChangeName}
                        value={this.state.selected.job}
                      />
                    ) : (
                      std.job
                    )}{" "}
                  </td>
                  <th className="tdata">
                    {check ? (
                      <>
                        <button
                          className="tdata-btn"
                          onClick={() => onCancel(std.id)}
                        >
                          cancel
                        </button>
                        <button
                          className="tdata-btn"
                          onClick={() => onSave(std)}
                        >
                          save
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="tdata-btn"
                          onClick={() => onDelete(std.id)}
                        >
                          delete
                        </button>
                        <button
                          className="tdata-btn"
                          onClick={() => onEdit(std)}
                        >
                          edit
                        </button>
                      </>
                    )}
                  </th>
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
