import React, { Component } from 'react';

class DisplayList extends Component {
    
    render(){
        var rows = [];
        console.log(this.props);
        for(var i =0; i<this.props.data.length;i++){
            var value = this.props.data[i];
            rows.push(<li key={value}>{value}</li>);
        }

        return(
            <ul>
                {rows}
            </ul>
        );
    }
}
export default DisplayList;