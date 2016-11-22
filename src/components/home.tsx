import * as React from 'react';
import * as mui from 'material-ui';
import { get } from "../util/backend";


export const style = {
    paper: {
        height: 300,
        width: 500,
        margin: 'auto',
        marginTop: 50,
        padding: 30,
        textAlign: 'center'
    }
};

export class Home extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentDidMount() {
        get('18/11/2016')
            .then(r => {
                console.log('SUCCESS');
                console.log(r)
            })
            .catch(e => console.log('ERROR'))
    }

    render() {
        return(
            <div>
                <mui.Paper style={style.paper} zDepth={3} >
                    { 'Ready to code!' }
                </mui.Paper>
            </div>
        )
    }
}