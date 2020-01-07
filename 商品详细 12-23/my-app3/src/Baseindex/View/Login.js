import React from 'react'

export default class Login extends React.Component{
    render() {
        return(
            <div>
                <p>
                    用户名：<input type="text" ref={this.usernameRef} />
                </p>
                <p>
                    密码：<input type="password" ref={this.passwordRef} />
                </p>
                <p>
                    <button onClick={this.login}>登录</button>
                </p>
            </div>
        );
    }
}