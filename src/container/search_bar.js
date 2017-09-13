import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
        //hookup action
    }

    render(){
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input placeholder="Get your 5 days forecast in your favourite city"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.onInputChange}/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">
                    Submit
                </button>
            </span>

            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    //hookup container to action creator
    return bindActionCreators({fetchWeather:fetchWeather},dispatch);

}
//null coz earlier we map dispatch to props and state to props as well
//null coz whenever we map dispatch to props it goes as 2nd argument
export default connect(null,mapDispatchToProps)(SearchBar);