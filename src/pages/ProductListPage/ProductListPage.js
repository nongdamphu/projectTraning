import React, { Component } from 'react';
import ProductList from '../../Component/ProductList/ProductList'
import { connect } from 'react-redux'
import ProductItem from '../../Component/ProductItem/ProductItem';
import * as actions from '../../Actions/Index'

class ProductListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onDelete = (id) => {
        this.props.onDelete(id)
    }


    showList = (products) => {
        let result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem onDelete={this.onDelete} key={index} index={index + 1} product={product} />
            })
        }
        return result
    }

    componentDidMount() {
        this.props.getData()
    }


    render() {
        let { products } = this.props
        return (
            <div>
                <ProductList>
                    {this.showList(products)}
                </ProductList>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getData: () => {
            dispatch(actions.actFetchProductsRequest())
        },
        onDelete: id =>{
            dispatch(actions.onDelete(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
