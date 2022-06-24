import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"
import { v4 as uuidv4 } from 'uuid';

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: uuidv4(8)
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {

		var url

		if (this.state.url !== "") {
			url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				{/* <div style={{fontSize: "14px", background: "white", width: "10%", textAlign: "center", margin: "auto", marginBottom: "10px"}}>
					Source code: 
					<IconButton style={{color: "black"}} onClick={() => window.location.href="https://github.com/0x5eba/Video-Meeting"}>
						<GitHubIcon />
					</IconButton>
				</div> */}
				
				<div>
					<h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
					<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends.</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Join a Metting</Button> 
					<p>-----------OR------------</p>
					<Button variant="contained" color="secondary" onClick={this.join} style={{ margin: "20px" }}>Start a Meeting</Button>
				</div>
			</div>
		)
	}
}

export default Home;