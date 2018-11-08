import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ProductItem extends Component {

    onDelete = (e) => {
        if (confirm('ban co muon xoa')) { // eslint-disable-line
            this.props.onDelete(e)
        }
    }
    render() {
        let { product, index } = this.props
        let statusClass = product.status === true ? 'warning' : 'secondary'
        let statusText = product.status === true ? 'Còn Hàng' : 'Hết Hàng'
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusText}</span>
                </td>
                <td>
                    <Link
                        to= {`product/${product.id}/edit`}
                        className="btn btn-primary mr-2"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;