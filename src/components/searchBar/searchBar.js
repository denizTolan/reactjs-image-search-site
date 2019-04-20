import React, {Component} from 'react';
import './searchBar.css';


class SearchBar extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            search: 'car'
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.searchKeyPress = this.searchKeyPress.bind(this);
        this.searchImage = this.searchImage.bind(this);
    }

    

    inputChanged(event){
        console.log(event.target.value);
        this.setState({
            search : event.target.value
        });
    }

    searchImage(){
        this.props.onSearchImage(this.state.search);
    }

    searchKeyPress(event) {
        if(event.key === "Enter") 
            this.searchImage();
    }

    render(){
        return (
            <div className="search-bar-container ui action input">
                <input  type="text" 
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.inputChanged}
                        onKeyPress={this.searchKeyPress} />
                 <button className="ui icon button"
                         onClick={this.searchImage}>
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }
}

export default SearchBar;