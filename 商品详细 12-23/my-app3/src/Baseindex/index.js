import React from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './View/Home'
import About from './View/About'
import Item from './View/Item'
import Cart from './View/Cart'
import Login from './View/Login'
import {getItems} from './store/action/items'
import Notfound from './View/Notfound'

class Baseindex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:{
                id:1,
                username:''
            }
          }
    }
    componentDidMount(){
        this.props.dispatch(getItems())
    }
    render(){
        let {items} = this.props
        return(
            <div>
                <h2>路由基础使用</h2>

                <nav>
                    <NavLink to="/home/?sort=asc" activeStyle={{color:'red'}} isActive={(match,location)=>{
                        return match || location.pathname.startsWith('/Item')
                    }}>Home</NavLink>
                    <span> | </span>
                    <NavLink to="/about" activeStyle={{color:'red'}}>About</NavLink>
                    <span> | </span>
                    <NavLink to='/cart' activeStyle={{color:'red'}}>Cart</NavLink>
                </nav>
                <br/>
                <Switch>
                    <Route exact path='/home/:page' render={(props)=><Home {...props} datas={items}></Home>} />
                    <Route path='/home' render={(props)=><Home {...props} datas={items}></Home>} />
                    <Route path='/about' component={About} />
                    <Route path='/cart' render={
                        ()=>{
                            if(this.state.users.id>0){
                                return (<Cart></Cart>)
                            }else{
                                return (<Redirect to='/login' />)
                            }
                        }
                    }></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/Item/:id(\d+)' render={props=><Item {...props} datas={items}></Item>} />
                    <Route component={Notfound}/>
                </Switch>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        items : state.items
    }
})(Baseindex)