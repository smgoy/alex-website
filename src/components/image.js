import React from 'react';

class Image extends React.Component { 
    render() {
        return (
            <img
                src={ this.props.img }
                style={ this.props.style }
                onClick={ this.props.onClick }
                className={ this.props.class } 
            ></img>
        );
    }
}

export default Image;