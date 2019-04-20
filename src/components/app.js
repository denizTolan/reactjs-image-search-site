import React,{Component} from 'react';
import SearchBar from './searchBar/searchBar';
import ImageList from './image/imageList'
import axios from 'axios';
import './app.css';

class App extends Component {
    
    constructor(params){
        super(params);

        this.state = {
            images : []
        };
    }

    onSearchImage = async (search) => {
        var result = await axios.get("https://api.unsplash.com/search/photos",{
            params:{
                query : search
            },
            headers:{
                Authorization : "Client-ID aa58999aae097d074358a22028b55fb02586913e981b91309db875cd9ff61068"
            }
        });

        this.setState({
            images : result.data.results
        });
    }
    
    render(){
        return (
            <div className="app-container">
                <SearchBar onSearchImage={this.onSearchImage} />
                <ImageList images={this.state.images} />
            </div>
        ) 
    }
};

export default App;