import React from 'react'
import PropType from 'prop-types'
import {NavLink,withRouter} from 'react-router-dom'

class Pagination extends React.Component{
    constructor(props){
        super(props)
        this.keydown = this.keydown.bind(this)
    }
    keydown(e){
        if(e.keyCode === 13){
            let value = e.target.value;
            this.props.history.push('/home/'+value)
        }
    }
    static defaultProps={
        pages:3,
        page:1
    }
    static propType = {
        pages:PropType.number,
        page:PropType.number
    }
    render(){
        let {pages,page} = this.props
        console.log(page)
        return(
            <div className='pagination'>
                {
                    (new Array(pages)).fill('').map((v,i)=>{
                        return (
                            <NavLink key={++i}
                                className={i === page ? 'active' :''}
                                to={'/home/'+i}
                            >{i}</NavLink>
                        )
                    })
                }
                前往
                <input type="text" className="goto" onKeyDown={this.keydown}/>页
            </div>
        )
    }
}

export default withRouter(Pagination) 