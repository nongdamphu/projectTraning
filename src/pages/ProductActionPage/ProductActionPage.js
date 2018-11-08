import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions/Index';



class ProducActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: 0,
            chkbStatus: false
        }
    }

    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }


    onSave = (e) => {
        e.preventDefault()
        let { history } = this.props
        let { id, txtName,txtPrice, chkbStatus } = this.state
        if (id) {
            let product = {
                id: id,
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }
            this.props.onEdit(product)
            history.goBack()
        } else {
            this.props.onSave(this.state)
            history.goBack()
        }
    }

    componentDidMount() {
        let { match } = this.props

        if (match) {
            let id = match.params.id
            this.props.getEdit(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        let { product } = nextProps
        this.setState({
            id: product.id,
            txtName: product.name,
            txtPrice: product.price,
            chkbStatus: product.status
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tên Sản Phẩm"
                            name="txtName"
                            value={this.state.txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá Sản Phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Giá Sản Phẩm"
                            name="txtPrice"
                            value={this.state.txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <div className="my-2">Trạng Thái:</div>
                        <input
                            type="checkbox"
                            name="chkbStatus"
                            value={this.state.chkbStatus}
                            onChange={this.onChange}
                            checked={this.state.chkbStatus}
                        />
                        <label className="form-check-label ml-2">Còn Hàng</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.EditAddJob
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSave: (val) => {
            dispatch(actions.onSubmit(val))
        },
        getEdit: (val) => {
            dispatch(actions.getEditRequest(val))
        },
        onEdit: (id) => {
            dispatch(actions.onEdit(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducActionPage);