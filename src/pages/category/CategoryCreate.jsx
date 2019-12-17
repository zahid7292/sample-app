import React, { Component } from "react";

import { connect } from "react-redux";

import { createCategory } from "../../actions/categoryAction";

class CategoryCreate extends Component {
  state = {
    category: {}
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.category);
    this.props.dispatch(createCategory(this.state.category));

    this.props.history.push("/category");
  };

  onChange = event => {
    this.setState({
      category: {
        ...this.state.category,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    const { category } = this.state;
    console.log(this.props);
    return (
      <div>
        <h2>Category Create Page</h2>

        <div>
          <form>
            <input
              type="text"
              name="name"
              value={category.name || ""}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="desc"
              value={category.desc || ""}
              onChange={this.onChange}
            />
            <input type="submit" value="Submit" onClick={this.onSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(CategoryCreate);
