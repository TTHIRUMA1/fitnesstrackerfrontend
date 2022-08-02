import React, { Component } from 'react'
import DietService from '../services/DietService';

class CreateDietComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            breakfast: '',
            snack: '',
            dinner: '',
            day: '',
            dietname:''
        }
        this.changeBreakfastHandler = this.changeBreakfastHandler.bind(this);
        this.changeSnackHandler = this.changeSnackHandler.bind(this);
        this.changeDinnerHandler=this.changeDinnerHandler.bind(this);
        this.changeDayHandler=this.changeDayHandler.bind(this);
        this.changeDietnameHandler=this.changeDietnameHandler.bind(this);
        this.saveOrUpdateDiet = this.saveOrUpdateDiet.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdateDiet = (d) => {
        d.preventDefault();
        let diet = {breakfast: this.state.breakfast, snack: this.state.snack, dinner: this.state.dinner,day:this.state.day,dietname:this.state.dietname};
        let diet1 = {id:this.state.id,breakfast: this.state.breakfast, snack: this.state.snack, dinner: this.state.dinner,day:this.state.day,dietname:this.state.dietname};
        console.log('diet =>' + JSON.stringify(diet));

        // step 5
        if(this.state.id === '_add'){
            DietService.createDiet(diet).then(res =>{
                this.props.history.push('/getDiets');
            });
        }else{
            DietService.updateDiet(diet1).then( res => {
                this.props.history.push('/getDiets');
            });
        }
    }
    
    changeBreakfastHandler= (event) => {
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

    changeDietnameHandler= (event) => {
        this.setState({dietname: event.target.value});
    }

    cancel(){
        this.props.history.push('/getDiets');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Diet</h3>
        }else{
            return <h3 className="text-center">Update Diet</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Id: </label>
                                            <input placeholder="Id" name="id" className="form-control" 
                                                value={this.state.id} />
                                        </div>
                                        <div className = "form-group">
                                            <label> BreakFast: </label>
                                            <input placeholder="BreakFast" name="breakfast" className="form-control" 
                                        value={this.state.breakfast} onChange={this.changeBreakfastHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Snack: </label>
                                            <input placeholder="Snack" name="Snack" className="form-control" 
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
                                            <input placeholder="DietName" name="dietname" className="form-control" 
                                                value={this.state.dietname} onChange={this.changeDietnameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDiet}>Save</button>
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

export default CreateDietComponent





