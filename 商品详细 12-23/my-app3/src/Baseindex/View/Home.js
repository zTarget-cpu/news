import React from 'react'
import {NavLink} from 'react-router-dom'
import queryString from 'qs'
import Pagination from '../Component/Pagination'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.changeSort = this.changeSort.bind(this)
    }
    changeSort({target:{value:sort}}){
        let {history} = this.props;

        history.push('/home/?sort='+sort)
    }
    render(){
        let {datas,location:{search}} = this.props;
        let qsText = queryString.parse(search,{ignoreQueryPrefix:true})
        let sort = qsText.sort;
        let data=datas.sort((a,b)=>sort==='asc'?a.price-b.price:b.price-a.price)
        let page = parseInt(this.props.match.params.page) || 1;
        return(
            <div>
                <h2>商品列表</h2>
                <select value={sort} onChange={this.changeSort}>
                    <option value="desc">从高到低</option>
                    <option value="asc">从低到高</option>
                </select>
                <ul className="item-list">
                    <li className="head">
                        <span>名称</span>
                        <span>价格</span>
                    </li>
                    {
                        data.map(item=>(
                            <li key={item.id}>
                                <span>
                                    <NavLink to={'/Item/' + item.id}>{item.name}</NavLink>
                                </span>
                                <span>￥ {(item.price / 100).toFixed(2)}</span>
                            </li>
                        ))
                    }
                </ul>
                <Pagination page={page}></Pagination>
            </div>
        )
    }
}