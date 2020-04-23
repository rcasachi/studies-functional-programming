import React from 'react';

const HigherOrderComponent = ({props, anotherProp, tools}) => (
    <div>
        <h2>Tools:</h2>
        <ul>
            {tools.map((tool, index) => (
                <li key={index}>{ tool }</li>
            ))}
        </ul>
    </div>
);

export default HigherOrderComponent;