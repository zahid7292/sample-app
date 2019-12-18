import React, { Component } from "react";

import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { categoryList, productList, history } = this.props;
    console.log({categoryList, productList});

    return (
      <div>
        <h2>Product Home</h2>

        <button onClick={_ => history.push(`/product/create`)}>Add New</button>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Min Price(&#8377;)</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {productList.map((product, idx) => {
                const category = categoryList.find(
                  category => Number(product.categoryId) === category.id
                );
                return (
                  <tr key={idx}>
                    <td>{product.name}</td>
                    <td>{product.minPrice}</td>
                    <td> {category && category.name}</td>
                    <td>
                      <button
                        onClick={_ =>
                          history.push(`/product/${product.id}/edit`)
                        }
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button onClick={_ => console.log(categoryList)}>Get D</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.data,
  categoryList: state.category.data
});

export default connect(mapStateToProps)(Product);
