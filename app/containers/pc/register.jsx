import React, {Component} from 'react'
import {
    Button,
    Modal,
    Icon,
    Form,
    Input,
    Tooltip,
    Select,
    Breadcrumb
} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;
class Register extends Component {
    // 表单样式
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    };
    returnLogin(event) {
        this
            .props
            .jumpLogin();
    };
    render() {
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 18
                },
                sm: {
                    span: 6
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 18,
                    offset: 6
                }
            }
        };
        const {getFieldDecorator} = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {initialValue: '86'})(
            <Select style={{
                width: 70
            }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
        return (

            <Form
                onSubmit={this
                .props
                .handleSubmit
                .bind(this)}>
                <FormItem
                    {...formItemLayout}
                    label={(
                    <span>
                        用户名&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o"/>
                        </Tooltip>
                    </span>
                )}>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: '请输入用户名',
                                whitespace: true
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="密码">
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入密码'
                            }, {
                                validator: this.checkConfirm
                            }
                        ]
                    })(<Input type="password"/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="确认密码">
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: '两次输入的密码不一致!'
                            }, {
                                validator: this.checkPassword
                            }
                        ]
                    })(<Input type="password" onBlur={this.handleConfirmBlur}/>)}
                </FormItem>

                <FormItem {...formItemLayout} label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your phone number!'
                            }
                        ]
                    })(<Input
                        addonBefore={prefixSelector}
                        style={{
                        width: '100%'
                    }}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!'
                            }, {
                                required: true,
                                message: 'Please input your E-mail!'
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="reset">重置</Button>
                    <Button type="primary" htmlType="submit">注册</Button>
                    <Link
                        to="#"
                        className="login-btn"
                        onClick={this
                        .returnLogin
                        .bind(this)}>已有账号？返回登录页</Link>
                </FormItem>
            </Form>
        )
    }
}
export default Form.create()(Register);