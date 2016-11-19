import * as React from 'react';
import * as mui from 'material-ui';


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

    render() {
        return(
            <div>
                <mui.Paper style={style.paper} zDepth={3} >
                    Ready to code!
                </mui.Paper>
            </div>
        )
    }
}