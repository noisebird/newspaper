import React from 'react';
import '../../static/css/pc/pc.less';
import PCHeader from './header';
import NewsContainer from './news_container';
import PCFooter from './footer';
class PCIndex extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <NewsContainer></NewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}
export default PCIndex;