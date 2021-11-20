import React from "react";
import './grid.scss';
class test extends React.Component {
    render() {
        return (
            <>
                <div className="grid wide ha">
                    <div className="row">
                        <div className="col l-3">
                            <h1>grid system</h1>

                        </div>
                        <div className="col l-3">
                            <h1>grid system</h1>

                        </div>
                        <div className="col l-3">
                            <h1>grid system</h1>

                        </div>
                        <div className="col l-3">
                            <h1>grid system</h1>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default test;