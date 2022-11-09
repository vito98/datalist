import React from "react";
import "./index.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [
        {
          id: 1,
          name: "Abror",
          age: "24",
          adress: "Daegu,Korea",
          status: "student",
          nickname: "vito",
          univ: "Yeungnam",
          job: "developer",
          edit: "edit",
        },
        {
          id: 2,
          name: "Sherzod",
          age: "26",
          adress: "Seul,Korea",
          status: "student",
          nickname: "sherik",
          univ: "sejong",
          job: "junior developer",
          edit: "edit",
        },
        {
          id: 3,
          name: "Rahim",
          age: "24",
          adress: "Seul,Korea",
          status: "student",
          nickname: "hoorwen",
          univ: "yeungnam",
          job: "developer",
          edit: "edit",
        },
        {
          id: 4,
          name: "Sher",
          age: "29",
          adress: "Busan,Korea",
          status: "student",
          nickname: "shawn",
          univ: "Busan national",
          job: "middle developer",
          edit: "edit",
        },
        {
          id: 5,
          name: "Fazik",
          age: "28",
          adress: "Daegu,Korea",
          status: "worker",
          nickname: "dean",
          univ: "KNU",
          job: "senior developer",
          edit: "edit",
        },
      ],
    };
  }

  render() {
    return (
      <div className="table">
        <table className="table-data" width={"100%"}>
          <thead className="thead">
            <tr>
              <th className="theader">ID</th>
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
                <tr key={std}>
                  <td className="tdata"> {std.id} </td>
                  <td className="tdata"> {std.name} </td>
                  <td className="tdata"> {std.age} </td>
                  <td className="tdata"> {std.adress} </td>
                  <td className="tdata"> {std.status} </td>
                  <td className="tdata"> {std.nickname} </td>
                  <td className="tdata"> {std.univ} </td>
                  <td className="tdata"> {std.job} </td>
                  <td className="tdata"> {std.edit} </td>
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
