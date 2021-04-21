import {Component} from 'react'

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            inputValue: '',
            array: ['pizza', 'something else']
        }

        this.increaseCount = this.increaseCount.bind(this)
        this.decreaseCount = this.decreaseCount.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.attachItemToArray = this.attachItemToArray.bind(this)
    }

    handleChange(val){
        console.log(val)
        this.setState({inputValue: val})
    }

    increaseCount(){
        this.setState({count: this.state.count + 1})
    }

    decreaseCount(){
        this.setState({count: this.state.count - 1})
    }

    attachItemToArray(){
        this.setState({
            array: [...this.state.array, this.state.inputValue],
            inputValue: ''
        })
    }


    render(){
        return (
            <div className="class-component">
                <h4>Count: {this.state.count}</h4>
                <button onClick={this.decreaseCount}>Decrease Count</button>
                <button onClick={this.increaseCount}>Increase Count</button>
                <input value={this.state.inputValue} onChange={(e)=> this.handleChange(e.target.value)}/>
                <button onClick={this.attachItemToArray}>Attach Item to Array</button>
                <h1>{this.state.inputValue}</h1>
                <div>
                    {this.state.array.map((element)=>{
                        return (                       
                            <li>{element}</li>                           
                        )
                    })}
                </div>
            </div>
            
            
        )
    }
}

export default ClassComponent