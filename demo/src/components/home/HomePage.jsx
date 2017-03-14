import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Glendon Rowe's Vision</h1>
                <p>A simple illustration into the mind of Mr. Rowe</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
}

export default HomePage;