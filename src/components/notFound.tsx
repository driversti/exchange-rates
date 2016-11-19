import * as React from 'react';
import * as mui from 'material-ui';
import { Link } from 'react-router';
import { style } from "./home";


export class NotFound extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <mui.Paper style={style.paper} zDepth={3} >
                    Error 404. This page does not exist yet or wrong link address!
                    Go to <Link to='/'>main</Link>?
                </mui.Paper>
            </div>
        )
    }
}