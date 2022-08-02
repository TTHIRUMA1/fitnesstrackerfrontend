import React, { Component } from 'react'
import DietService from '../services/DietService';

class UpdateDietComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            breakfast: '',
            snack: '',
            dinner: '',
            day: '',
            dietname:''
        }
        this.changeBreakFastHandler = this.changeBreakFastHandler.bind(this);
        this.changeSnackHandler = this.changeSnackHandler.bind(this);
        this.changeDinnerHandler=this.changeDinnerHandler.bind(this);
        this.changeDayHandler=this.changeDayHandler.bind(this);
        this.changeDietNameHandler=this.changeDietNameHandler.bind(this);
        this.updateDiet = this.updateDiet.bind(this);
    }

    componentDidMount(){
        DietService.getDietById(this.state.id).then( (res) =>{
            let diet = res.data;
            this.setState({breakfast: diet.breakfast,
                snack: diet.snack,
                dinner : diet.dinner,
                day : diet.day,
                dietname:diet.dietname
            });
        });
    }

    updateDiet = (d) => {
        d.preventDefault();
        let diet = {breakfast: this.state.breakfast, snack: this.state.snack, dinner: this.state.dinner,day: this.state.day,dietname:this.state.dietname};
        console.log('diet => ' + JSON.stringify(diet));
        console.log('id => ' + JSON.stringify(this.state.id));
        DietService.updateDiet(diet).then( res => {
            this.diet=res.data;
            this.props.history.push('/getDiets');
        });
    }
    
    changeBreakFastHandler= (event) => {
        this.setState({breakfast: event.target.value});
    }

    changeSnackHandler= (event) => {
        this.setState({snack: event.target.value});
    }

    changeDinnerHandler= (event) => {
        this.setState({dinner: event.target.value});
    }
    changeDayHandler= (event) => {
        this.setState({day: event.target.value});
    }
    changeDietNameHandler= (event) => {
        this.setState({dietname:event.target.value})
    }

    cancel(){
        this.props.history.push('/getDiets');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Diet</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Id: </label>
                                            <input  name="Id" className="form-control" 
                                                value={this.state.id} />
                                        </div>
                                        <div className = "form-group">
                                            <label> BreakFast: </label>
                                            <input placeholder="BreakFast" name="BreakFast" className="form-control" 
                                                value={this.state.breakfast} onChange={this.changeBreakFastHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Snack: </label>
                                            <input placeholder="Snack" name="snack" className="form-control" 
                                                value={this.state.snack} onChange={this.changeSnackHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Dinner: </label>
                                            <input placeholder="Dinner" name="dinner" className="form-control" 
                                                value={this.state.dinner} onChange={this.changeDinnerHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Day: </label>
                                            <input placeholder="Day" name="day" className="form-control" 
                                                value={this.state.day} onChange={this.changeDayHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DietName: </label>
                                            <input placeholder="DietName" name="dietName" className="form-control" 
                                                value={this.state.dietname} onChange={this.changeDietNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDiet}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateDietComponent
