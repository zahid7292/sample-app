import React, { Component } from "react";

import { connect } from "react-redux";


class Category extends Component {
  render() {
    const { categoryList, history } = this.props;
    
    return (
      <div>
        <h2>Category Home</h2>

        <button onClick={_ => history.push(`/category/create`)}>Add New</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Desc</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {categoryList.map((category, idx) => (
                <tr key={idx}>
                  <td>{category.name}</td>
                  <td>{category.desc}</td>
                  <td>
                    <button
                      onClick={_ =>
                        history.push(`/category/${category.id}/edit`)
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ categoryList: state.category.data });

export default connect(mapStateToProps)(Category);
