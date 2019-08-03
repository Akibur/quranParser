import React, {Component, Fragment} from 'react'
import {Header, Footer,Body} from '../../components/layouts'
 
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Body/>
                <Footer />
            </Fragment>
        )
    }
}
