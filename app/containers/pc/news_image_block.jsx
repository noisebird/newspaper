import React, {Component} from 'react'
import {Card} from 'antd';
class NewsImageBlock extends Component {
    render() {
        const counts = Number(this.props.counts);
        let arr = [];
        for (let i = 0; i < counts; i++) {
            arr.push(
                <div className="nation-top-block" key={"block" + i}>
                    <img src={require("../../static/images/pc/girl" + (i + 1) + ".jpg")}/>
                    <p>美国父亲4年来，多次猥琐女儿</p>
                    <p>中国日报网</p>
                </div>
            )
        }
        console.log(arr);
        return (
            <Card title={this.props.title} className="nation-top">
                <aside>
                    {arr}
                </aside>

            </Card>
        )
    }
}
export default NewsImageBlock;