import React, {Component} from 'react'
import {Row, Col, Card, Carousel, Tabs} from 'antd';
import NewsImageBlock from './news_image_block';
import NewsBlock from './news_block';
const TabPane = Tabs.TabPane
class NewsContainer extends Component {
    constructor() {
        super();
    }
    onChange() {};
    render() {
        return (
            <div className="news-content">
                <Row>
                    <Col span={2}></Col>
                    <Col span={6}>

                        <Carousel effect="fade" className="news-carousel" autoplay>
                            <div>
                                <img src={require("../../static/images/pc/girl1.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl2.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl3.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl4.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl5.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl6.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl7.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl8.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl9.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl10.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl11.jpg")}/>
                            </div>
                            <div>
                                <img src={require("../../static/images/pc/girl12.jpg")}/>
                            </div>
                        </Carousel>

                        <div>
                            <NewsImageBlock title="国际新闻" counts="6"></NewsImageBlock>
                        </div>
                    </Col>
                    <Col span={8} className="news-list">
                        <Tabs onChange={this.onChange} type="line">
                            <TabPane tab="头条新闻" key="1">
                                <NewsBlock></NewsBlock>
                            </TabPane>
                            <TabPane tab="国际新闻" key="2">
                                <NewsBlock></NewsBlock>
                            </TabPane>
                            <TabPane tab="国内新闻" key="3">
                                <NewsBlock></NewsBlock>
                            </TabPane>
                            <TabPane tab="军事新闻" key="4">
                                <NewsBlock></NewsBlock>
                            </TabPane>
                            <TabPane tab="娱乐新闻" key="5">
                                <NewsBlock></NewsBlock>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={6} className="right-block">
                        <NewsImageBlock title="NBA新闻" counts="9"></NewsImageBlock>
                    </Col>
                    <Col span={2}></Col>

                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <NewsImageBlock title="娱乐新闻" counts="10"></NewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <NewsImageBlock title="国内新闻" counts="10"></NewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </div>
        )
    }
}

export default NewsContainer