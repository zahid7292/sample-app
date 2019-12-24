import React, { Component } from 'react';

import { connect } from 'react-redux'

import { creatProduct } from '../../actions/productAction'

class ProductCreate extends Component {
    state = {
        product: {}
    }
    
    onSubmit = e => {
        e.preventDefault();
        this.props.dispatch(creatProduct(this.state.product))        
        this.props.history.push('/product')
    }

    onChange = event => {
        
        this.setState({
            product: {
                ...this.state.product, [event.target.name]: event.target.value
            }
        })
    }
    
    render() {
        const { product } = this.state;
        const { categoryList} = this.props;
        return (
            <div>
             <h2>Product Create Page</h2>
             
             <div>
                <form>
                    <input
                        type = 'text'
                        name = 'name'
                        placeholder = 'Product name'
                        value = {product.name || ""}
                        onChange = {this.onChange} />

                    <input
                        type='text'
                        name='minPrice'
                        placeholder = 'Min Price(&#8377;)'
                        value={product.minPrice || "" }
                        onChange={this.onChange}
                        />
                        <select name = 'categoryId' onChange ={this.onChange} >
                        <option key={0} >Select Category</option>
                            {categoryList.map((category, idx) => (
                                <option key = {category.id}  value={category.id}>{category.name}</option>
                            ))}
                        </select>


                    <input type = "submit" value = "Submit" onClick = {this.onSubmit} />
                </form>
             </div>
        </div>
        );
    }
}

const mapStatetoProps = state => ({categoryList: state.category.data})

export default connect(mapStatetoProps)(ProductCreate);