

import React from 'react';
import {yes, no} from '../objects'
import statement from '../Components/statement'

class StatementsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            image: no["no-image"],
            statement: no["no-statement"] 
        }
    }
    
    handleClick = () => {
        if (this.state.statement === no["no-statement"]) {
            this.setState({
                image: yes["yes-image"],
                statement: yes["yes-statement"]
            })
        } else {
            this.setState({
                image: no["no-image"],
                statement: no["no-statement"]
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.statement}</h1>
                <img 
                    onClick={this.handleClick}
                    src={this.state.image} alt="you used to call me" 
                />
            </div>
        )

    }


}

export default StatementsContainer