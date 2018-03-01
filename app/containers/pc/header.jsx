import React from 'react';
import {
    Row,
    Col,
    Menu,
    Icon,
    Button,
    Modal,
    Form,
    Input,
    Tooltip,
    Tabs
} from 'antd';
import {Router, Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import '../../static/css/pc/header_form.less';
import Login from './login';
import Register from './register';
class PCHeader extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.handleCancel = this
            .handleCancel
            .bind(this);
        this.state = {
            current: "top",
            hasLogined: true,
            userNickName: "12",
            ModalText: '登陆',
            visible: false,
            isLogin: true
        }
    };
    handleClick(event) {
        console.log('click ', event);
        if (event.key === 'register') {
            this.setState({visible: true});
        } else if (event.key == "logout") {}
        this.setState({current: event.key});

    };
    handleCancel(e) {
        this.setState({visible: false});
    };
    handleSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            })
    };
    logout() {};
    onChange() {};
    render() {
        const jumpRegister = () => {
            this.setState({isLogin: false, ModalText: '注册'});
        }
        const jumpLogin = () => {
            this.setState({isLogin: true, ModalText: '登陆'});
        }
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                    <Button type="primary">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="dashed">个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button
                        type="ghost"
                        onClick={this
                        .logout
                        .bind(this)}>退出</Button>
                </Menu.Item>
            : <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        const loginShow = this.state.isLogin
            ? <Login handleSubmit={this.handleSubmit} jumpRegister={jumpRegister}></Login>
            : <Register handleSubmit={this.handleSubmit} jumpLogin={jumpLogin}></Register>;

        return (
            <div>
                <header>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={4}>
                            <a href="" className="news-logo">
                                <img src={require("../../static/images/pc/logo.png")}/>
                                <span>React News</span>
                            </a>
                        </Col>
                        <Col span={16}>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal">
                                <Menu.Item key="top">
                                    <Icon type="appstore"/>头条
                                </Menu.Item>
                                <Menu.Item key="shehui">
                                    <Icon type="appstore"/>社会
                                </Menu.Item>
                                <Menu.Item key="guonei">
                                    <Icon type="appstore"/>国内
                                </Menu.Item>
                                <Menu.Item key="guoji">
                                    <Icon type="appstore"/>国际
                                </Menu.Item>
                                <Menu.Item key="yule">
                                    <Icon type="appstore"/>体育
                                </Menu.Item>
                                <Menu.Item key="keji">
                                    <Icon type="appstore"/>科技
                                </Menu.Item>
                                <Menu.Item key="shishang">
                                    <Icon type="appstore"/>时尚
                                </Menu.Item>
                                {userShow}
                            </Menu>
                            <Modal
                                title={this.state.ModalText}
                                visible={this.state.visible}
                                footer={null}
                                onOk={this.onOk}
                                onCancel={this.handleCancel}>
                                {loginShow}
                            </Modal>

                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </header>

            </div>
        )
    }
}
export default PCHeader;