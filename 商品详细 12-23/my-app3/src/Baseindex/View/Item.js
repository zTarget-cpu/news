import React from 'react'

export default class  Item extends React.Component{
    render(){
        let datas = this.props.datas;
        let id = Number(this.props.match.params.id) || 0;
        let data = datas.find(item=>item.id === id)
        return data ? (
            <div>
              <h2>商品详情 - {data.name}</h2>
              <dt>ID</dt>
              <dd>{data.id}</dd>
              <dt>名称</dt>
              <dd>{data.name}</dd>
              <dt>价格</dt>
              <dd>￥ {(data.price / 100).toFixed(2)}</dd>
            </div>
          ) : <div>不存在该商品！</div>;
    }
    
}