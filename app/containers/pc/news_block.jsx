import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card} from 'antd'

class NewsBlock extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Card>
                <ul className="news-block">
                    <li>
                        <Link to="#">《习近平谈治国理政》：这本书 全世界都在学习</Link>
                    </li>
                    <li>
                        <Link to="#">新华网评：真刀真枪抓改革 理上网来 领航新征程</Link>
                    </li>
                    <li>
                        <Link to="#">央广时评：娱乐必须有底线 新时代新气象新作为</Link>
                    </li>
                    <li>
                        <Link to="#">德国施行《社交媒体管理法》 强化社交平台管理责任</Link>
                    </li>
                    <li>
                        <Link to="#">王岐山在湖南当选第十三届全国人大代表</Link>
                    </li>
                    <li>
                        <Link to="#">中印均在边境地区修建大型设施？外交部回应</Link>
                    </li>
                    <li>
                        <Link to="#">8名中央候补委员同日升正部 他们都是谁？</Link>
                    </li>
                    <li>
                        <Link to="#">2017中国十大经济年度人物揭晓 雷军周鸿祎等当选</Link>
                    </li>
                    <li>
                        <Link to="#">为了骂中国不带脏字 西方又发明一个新词</Link>
                    </li>
                    <li>
                        <Link to="#">中国千万要小心 我们身边这个国家最近动作有点大</Link>
                    </li>
                    <li>
                        <Link to="#">8名中央候补委员同日升正部 他们都是谁？</Link>
                    </li>
                    <li>
                        <Link to="#">2017中国十大经济年度人物揭晓 雷军周鸿祎等当选</Link>
                    </li>
                    <li>
                        <Link to="#">为了骂中国不带脏字 西方又发明一个新词</Link>
                    </li>
                    <li>
                        <Link to="#">中国千万要小心 我们身边这个国家最近动作有点大</Link>
                    </li>
                    <li>
                        <Link to="#">8名中央候补委员同日升正部 他们都是谁？</Link>
                    </li>
                    <li>
                        <Link to="#">2017中国十大经济年度人物揭晓 雷军周鸿祎等当选</Link>
                    </li>
                    <li>
                        <Link to="#">为了骂中国不带脏字 西方又发明一个新词</Link>
                    </li>
                    <li>
                        <Link to="#">中国千万要小心 我们身边这个国家最近动作有点大</Link>
                    </li>
                </ul>
            </Card>
        )
    }
}

export default NewsBlock;