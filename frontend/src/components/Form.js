import React, { Component } from "react";
import PropTypes from "prop-types";
import { updateLead } from '../actions/leads'


class Form extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: "",
        email: "",
        message: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        const params = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        this.props.onSubmit(params);
    };

    render() {
        const { name, email, message } = this.state;
        return (
          <div className="column">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    type="text"
                    name="message"
                    onChange={this.handleChange}
                    value={message}
                    required
                  />
                </div>
              </div>
              <div className="control">
                <button type="submit" className="button is-info">
                  Send message
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default Form;
