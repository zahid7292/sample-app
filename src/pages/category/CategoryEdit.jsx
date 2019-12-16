import React, { Component } from 'react';

class CategoryEdit extends Component {
    render() {
        return (
            <div>
                This is Category Edit Page for id #{this.props.match.params.id}
            </div>
        );
    }
}

export default CategoryEdit;