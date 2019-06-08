import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React - test</p>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));