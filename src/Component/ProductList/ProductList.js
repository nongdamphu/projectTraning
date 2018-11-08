import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Product extends Component {
    render() {
        return (
            <div className="container mt-3">
                <Link to="/product/add" className="btn btn-info my-2">Thêm Sản Phẩm</Link>
                <div className="card">
                    <div className="card-header bg-primary text-light">
                        Danh Sách Sản Phẩm
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                    <th>Chỉnh Sửa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


export default Product;