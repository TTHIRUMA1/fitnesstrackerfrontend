import React, { Component } from 'react'
import DietService from '../services/DietService'
import { Route , history} from 'react-router-dom';

class ListDietComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                diets: []
        }
        this.addDiet = this.addDiet.bind(this);
        this.editDiet = this.editDiet.bind(this);
        this.deleteDiet = this.deleteDiet.bind(this);
    }

    deleteDiet(id){
        DietService.deleteDiet(id).then( res => {
            this.setState({diets: this.state.diets.filter(diet => diet.id !== id) });
            
        });
    }
    viewDiet(id){
        this.props.history.push(`/viewdiet/${id}`);
    }
    editDiet(id){
        this.props.history.push(`/adddiet/${id}`);
    }

    componentDidMount(){
        DietService.getDiets().then((res) => {
            this.setState({ diets: res.data});
        });
    }
    addDiet(){
        this.props.history.push('/adddiet/_add');
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Diets List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDiet}> Add Diet</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Id</th>
                                    <th> BreakFast</th>
                                    <th>  Snack</th>
                                    <th>  Dinner</th>
                                    <th>  Day</th>
                                    <th>  DietName</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.diets.map(
                                        diet => 
                                        <tr key = {diet.id}>
                                            <td> { diet.id} </td> 
                                             <td> { diet.breakfast} </td>   
                                             <td> {diet.snack}</td>
                                             <td> {diet.dinner}</td>
                                             <td> {diet.day}</td>
                                             <td> {diet.dietname}</td>
                                             <td>
                                                 <button onClick={ () => this.editDiet(diet.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDiet(diet.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDiet(diet.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div> </div>
        )
    }
}

export default ListDietComponent
