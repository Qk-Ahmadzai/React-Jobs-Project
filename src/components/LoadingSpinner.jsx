import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto'
};

const LoadingSpinner = ({ loading }) => {
    return (
        <ClipLoader
            color='#4338ca'
            loading={loading}
            cssOverride={override} // Fixed prop name
            size={150}
        />  
    );
};

export default LoadingSpinner;
