import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Protected(props) {
    const {Component} = props;
    //const navigate = useNavigate();
    const history = useHistory();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if(!login) {
            history('/login')
        }
    });

    return(
        <div>
                <Component />
        </div>
    )
}

export default Protected;