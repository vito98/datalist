import React from "react";

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
        <table border={2} width={"100%S"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Adress</th>
              <th>Status</th>
              <th>Nickname</th>
              <th>Univ</th>
              <th>Job</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {this.state.student.map((std) => {
              return (
                <tr key={std}>
                  <td> {std.id} </td>
                  <td> {std.name} </td>
                  <td> {std.age} </td>
                  <td> {std.adress} </td>
                  <td> {std.status} </td>
                  <td> {std.nickname} </td>
                  <td> {std.univ} </td>
                  <td> {std.job} </td>
                  <td> {std.edit} </td>
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
