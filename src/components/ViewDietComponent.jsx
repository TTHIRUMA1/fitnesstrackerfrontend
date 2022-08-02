import React, { Component } from 'react'
import DietService from '../services/DietService'
import 'bootstrap/dist/css/bootstrap.min.css';


class ViewDietComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            diet: {}
        }
    }

    componentDidMount(){
        DietService.getDietById(this.state.id).then( res => {
            this.setState({diet: res.data});
           
        })
        
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Diet Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Diet BreakFast: </label>
                            <div> {this.state.diet.breakfast}</div>
                        </div>
                        <div className = "row">
                            <label> Diet Snack: </label>
                            <div> {this.state.diet.snack}</div>
                        </div>
                        <div className = "row">
                            <label> Diet Dinner: </label>
                            <div> {this.state.diet.dinner}</div>
                        </div>
                        <div className = "row">
                            <label> Diet Day: </label>
                            <div> {this.state.diet.day}</div>
                        </div>
                        <div className = "row">
                            <label> Diet DietName: </label>
                            <div>{this.state.diet.dietname}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewDietComponent
