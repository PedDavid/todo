const React = require('react')
const ReactDOM = require('react-dom')

class App extends React.Component
{
    constructor(props) {
        super(props)
        this.state = { users: [] }
    }
    componentDidMount() {

    }
    render() {
        return (
            <UserList users={ this.state.users } />
        )
    }
}

class UserList extends React.Component
{
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>UserName</th>
                        <th>PassWord</th>
                    </tr>
                    {this.props.users.map(user => <User user={user}/>)}
                </tbody>
            </table>
        )
    }
}

class User extends React.Component
{
    render() {
        return (
            <tr>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.password}</td>
            </tr>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react'))