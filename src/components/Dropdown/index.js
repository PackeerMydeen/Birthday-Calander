 import React from 'react'
 import './index.scss'

 class Dropdown extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = {
        open: false,
        selected: this.props.initial
      };
    }
    
    toggleDropdown() {
      this.setState({
        active: !this.state.active
      });
    }
    
    handleClick(i) {
      this.setState({
        selected: i
      });
    this.props.dropdownSelected(i)
    this.toggleDropdown()
    }
    
    renderOptions() {
      if (!this.props.options) {
        return;
      }
      
      return this.props.options.map((option, i) => {      
        return (
          <li 
            onClick={evt => this.handleClick(option)} 
            key={i} 
            className={"dropdown__list-item " + (option === this.state.selected ? 'dropdown__list-item--active' : '')}
          >
            {option}
          </li>
        );  
      });  
    }
    
    render() {
      return (
        <div className="dropdown">
          <div
            onClick={() => this.toggleDropdown()}
            className="dropdown__toggle dropdown__list-item"
          >
            {this.state.selected?this.state.selected:this.props.title}
          </div>
          <ul className={"dropdown__list " + (this.state.active ? 'dropdown__list--active' : '')}>{this.renderOptions()}</ul>      
        </div>
      );
    }
  }
  
 
  
export default Dropdown