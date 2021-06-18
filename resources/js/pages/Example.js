import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core'; 

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">pages?</div>
                        <Button color="primary" variant="contained" href={`/`}>Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
