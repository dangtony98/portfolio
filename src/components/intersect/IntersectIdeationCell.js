import React from 'react';

export default ({ title, what, why }) => {
    return (
        <div className="intersect-cell">
            <h4>{title}</h4>
            <div className="intersect-cell-content">
                <div>
                    <h4>What</h4>
                    <p>{what}</p>
                </div>
                <div>
                    <h4>Why</h4>
                    <p>{why}</p>
                </div>
            </div>
        </div>
    );
}
