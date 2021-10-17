import React from 'react';
import { withRouter } from 'react-router-dom';

const BackDashboard = (props) => {
    const back = () => {
        props.history.push('/dashboard');
    };
    return (
        <>
            <button className='btn-back' type='submit' onClick={() => back()}>
                <p>Regresar</p>
            </button>
        </>
    );
};

export default withRouter(BackDashboard);
