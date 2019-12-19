import React, { Component } from "react";

import { connect } from "react-redux";

import { editCategory } from "../../actions/categoryAction";

class CategoryEdit extends Component {
  state = {
    category: {}
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.dispatch(editCategory(this.state.category));
    
    this.props.history.push("/category");
  };

  componentDidMount() {
    const { categoryList, match } = this.props;
    const id = match.params.id;
    const category = categoryList.find(e => e.id === Number(id));
    this.setState({ category });
  }

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

    return (
      <div>
        <h2>Category Edit Page</h2>
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

const mapStateToProps = state => ({ categoryList: state.category.data });

export default connect(mapStateToProps)(CategoryEdit);
