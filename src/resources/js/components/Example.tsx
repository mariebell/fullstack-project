import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from '@material-ui/core'; //Buttonをインポート

function Example(): React.ReactElement {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>

                        {/* <Button color="primary" variant="contained">Hello World</Button>  */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
