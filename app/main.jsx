import React from 'react';
import ReactDom from 'react-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './containers/pc';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MobileIndex from './containers/mobile';
import 'antd/dist/antd.less';
class Root extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width:1200px)">
                    <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1200px)">
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        )
    }
}
export default Root
/* ReactDom.render(
    <Root/>, document.getElementById("main-content")) */
