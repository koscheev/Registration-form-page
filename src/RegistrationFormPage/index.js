import React from 'react'

export class RegistrationForm extends React.Component {
    state = {
        phone: '',
        fullName: '',
        password: '',
        confirmPassword:'',
        error:''
    }

    onChangePhone = (event) => {
        this.setState({ phone: event.target.value, error: '' });
    } 
    onChangeFullname = (event) => {
        this.setState({ fullName: event.target.value, error: '' });
    } 
    onChangePassword = (event) => {
        this.setState({ password: event.target.value, error: '' });
    } 
    onChangeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value, error: '' });
    } 

    
    checkData =  () => {
        const checkPassword = /[a-zA-Z\d]/
        if(this.state.password.length < 8) {
            this.setState({error:'Password must be at least 8 characters'})
        } else if(!this.state.password.match(checkPassword)) {
            this.setState({error: 'Пароль должен содержать заглавные и строчные буквы и числа'})
        } else if(this.state.password !== this.state.confirmPassword) {
            this.setState({error: 'Password is not match'})
        } else if(this.state.phone.length !== 13) {
            this.setState({error: 'Phone number must be 13 characters'})
        } else if(this.state.fullName === '') {
            this.setState({error: 'The Name field  must not be empty'})
        } else {this.sendData()}
    }

    sendData = async () => {
        const url = ''
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        if (!response.ok) {
            console.log('Сервер не найден');
        }
    }
    
    render() {
        return <>
            <div>
                <p>Enter phone number</p>
                <input
                    type="text"
                    placeholder="phone number"
                    onChange={(event) => this.onChangePhone(event, 'phone')}
                    value={this.state.phone}
                />
                <p>Enter Full name</p>
                <input
                    type="text"
                    placeholder="Full name"
                    onChange={(event) => this.onChangeFullname(event, 'fullName')}
                    value={this.state.fullName}
                />
                <p>Enter password</p>
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(event) => this.onChangePassword(event, 'Password')}
                    value={this.state.password}
                />
                <p>Confirm password</p>
                <input
                    type="text"
                    placeholder="Confirm Password"
                    onChange={(event) => this.onChangeConfirmPassword(event, 'confirmPassword')}
                    value={this.state.confirmPassword}
                />
                <p></p>
                <button onClick = {this.checkData}>Registration</button>
                <p>{this.state.error}</p>
            </div>
        </>
    }

}