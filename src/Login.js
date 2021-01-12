import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginDone: false,
            commentData: [],
            postsData: [],
            like: false,
            disLike: false,
            show: false,
            editTitle:"",
            editDiscription:""
        }

    }
    auth={username:"visharpit", password:"12345"}
    tabelHeader = ["id", "title", "discription", "action", "action", "action"]
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments').then((resp) => {
            resp.json().then((comment) => {
                this.setState({ commentData: comment })
                console.log("comment", comment);
            })
        })
        fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => {
            resp.json().then((post) => {
                this.setState({ postsData: post })
                console.log("post", post);
            })
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handlelike = () => {
this.setState({like:true})
this.setState({disLike:false})
    }
    handleDisLike = () =>{
 this.setState({disLike:true})
 this.setState({like:false})
    }
    handleEdit = () =>{
      this.setState({show: true});
      console.log("show", this.state.show);
    }
    deleteData = (id) => {
// It is showing an error
/*const item = Object.assign([],this.state.postsData);
item.splice(id, 1);
this.setState({postsData:item});*/
      }
    closeModal = () => {
        this.setState({show: false});
    }
    editField = () => {

        this.setState({show: false});
    }
    handleLogin = (event) => {
        event.preventDefault();
        this.setState({ username: "" });
        this.setState({ password: "" });
        if(this.state.username === this.auth.username && this.state.password === this.auth.password){
        this.setState({ loginDone: true });
        }
        else{
            alert("incorrect user name and password !!")
        }
        console.log("state", this.state);
    }

    render() {

        return (
            <div className="loginContainer">
                { this.state.loginDone === true ?
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    {this.tabelHeader.map((data, index) => (
                                        <th key={index}>{data}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.postsData.map((data, index) => (
                                    
                                     <tr key={index}>
                                         <td>{data.id}</td>
                                         <td>{data.title}</td>
                                         <td>{data.body}</td>
                                         <td><Button onClick={this.handleEdit}>Edit</Button></td>
                                         <td><Button onClick={this.deleteData(index)}>Delete</Button></td>
                                         <td><span onClick={this.handlelike} className={this.state.like === true ? "like": "default"}>Like</span>/<span onClick={this.handleDisLike} className={this.state.disLike === true ? "dislike": "default"}>Dislike</span></td>
                                         </tr>
                
                                ))}
                                </tbody>
                        </table>
                        <Modal show={this.state.show}>
                            <Modal.Header>Edit</Modal.Header>
                            <Modal.Body>
                                <div>
                            <label>
                                title
                            </label>
                            <br/>
                            <input type="text" name="editTitle" class="form-control" value={this.state.editTitle} onChange={this.handleChange}/>
                            </div>
                            <div>
                            <label>
                                discription
                            </label>
                            <br/>
                            <input type="text" name="editDiscription" class="form-control" value={this.state.editDiscription} onChange={this.handleChange}/>
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.editField}>Edit</Button>
                                <Button onClick={this.closeModal}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    :
                    <form onSubmit={this.handleLogin}>
                    <label className="label">UserName:</label>
                    <br />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <br />
                    <label className="label">Password:</label>
                    <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <button onClick={this.handleLogin} className="login">Login</button>
                </form>
                }
            </div>
        );
    }
}

export default Login;