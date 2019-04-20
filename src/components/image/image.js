import React,{Component} from 'react';

class Image extends Component {
    constructor(props){
        super(props);

        this.state = {
            spanCount : 1
        };
        this.myRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.myRef.current);

        this.myRef.current.addEventListener('load',()=>{
            console.log(this.myRef.current.clientHeight);

            const spanCount = Math.round(this.myRef.current.clientHeight / 5) + 3;
            this.setState({
                spanCount
            });
        });
    }

    render(){
        const {image} = this.props;
        return (
            <img style={{gridRowEnd : `span ${this.state.spanCount}`}} ref={this.myRef} src={image.urls.small} alt={image.description} /> 
        )
    }
}

export default Image;