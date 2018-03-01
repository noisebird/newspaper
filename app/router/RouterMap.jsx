import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Main from '../main'
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={Main}>
                    {/* <IndexRoute component={Main}/> */}
                   
                </Route>
            </Router>
        )
    }

}

export default RouterMap;