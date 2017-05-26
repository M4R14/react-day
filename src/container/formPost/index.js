import React, {Component} from 'react';

class FormPost extends Component{
    constructor(props){
        super(props)
        this.submited = this.submited.bind(this)
    }

    submited(e){
        e.preventDefault();
        var data = {
            "usrname": this.refs.usrname.value,
            'email': this.refs.email.value,
            'file':this.refs.file.value
        }
        console.log(data)
    }

    render(){
        return (
            <form onSubmit={(e) => this.submited(e)}>
                <div className="field">
                    <label className="label">Username</label>
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Text input" ref="usrname" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fa fa-check"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Email input" ref='email' />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fa fa-warning"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <label className="label">File</label>
                    <input type="file" ref="file" />
                </div>


                <div className="field is-grouped">
                    <p className="control">
                        <button type="submit" className="button is-primary">Submit</button>
                    </p>
                    <p className="control">
                        <button className="button is-link">Cancel</button>
                    </p>
                </div>
            </form>
        )
    }
} 

export default FormPost;