import React, {Component} from 'react';
import {
    Button,
    Modal,
    Icon,
    Form,
    Input,
    Tooltip
} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
const FormItem = Form.Item;
class Login extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        // this.register = this     .register     .bind(this);

    };
    register(event) {
        this
            .props
            .jumpRegister();
    };
    render() {
        // 表单样式
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

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="reset">重置</Button>
                    <Button type="primary" htmlType="submit">登陆</Button>
                    <Link
                        to="#"
                        className="register-btn"
                        onClick={this
                        .register
                        .bind(this)}>还没有账号？点击注册</Link>
                </FormItem>
            </Form>

        )
    }
}

export default Form.create()(Login)