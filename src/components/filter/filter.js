import React, {Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnData:[
                {value:'All',active:true,id:1},
                {value:'Brazil',active:false,id:2},
                {value:'Kenya',active:false,id:3},
                {value:'Columbia',active:false,id:4},
            ]
        }
    }
    setActive =(id)=>{
        this.state.btnData.forEach(el=> {
            el.active=false
        })
        let el = this.state.btnData.filter(el=> {
            if (el.value === id){
                el.active=!el.active
            }
            return{
                el
            }
        })

        this.setState(({btnData}) => {
            return{
                btnData: [...el]
            }
        })
    }

    render() {

        const btnItems = this.state.btnData.map(btn =>
            <button
                key={btn.id}
                className={btn.active?' activeFilter':''}
                    value={btn.value}
                    onClick={(e) => handleClick(e)}>{btn.value}</button>)
        const  handleClick = (e) =>{
            this.props.onFilter(e.target.value);
            this.setActive(e.target.value)
        }

        return (
            <div className='d-flex filter'>
                <div><span>Lookiing for</span>
                    <input onChange={(e) => this.props.onSearch(e.target.value)} placeholder='start typing here...'
                           type="text"/></div>
                <div className="btnGroup">
                    <span>Or filter</span>
                    {btnItems}
                </div>
            </div>
        )
    }


}

export default Filter;