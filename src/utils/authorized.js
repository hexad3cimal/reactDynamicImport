import { CACHE } from '../constants/cache';
import { App } from '../constants/app';
import { getItem } from './cacheManager';
import { Main as MainLayout } from '../layouts';
import React from 'react';
import { Redirect } from 'react-router-dom';

const Authorized = (Component) => {
    return class Login extends React.Component {
        state = {
            isAuthenticated: false,
            isLoading: true
        }

        componentDidMount() {
            fetch(App.API + '/pre/online',
                {
                    headers: {
                        Authorization: 'Bearer ' + getItem(CACHE.TOKEN)
                    }
                }
            ).then(_response => { return _response.json()}).then( json => {
                    if (json.status === 2030) {
                        this.setState({ isAuthenticated: true, isLoading: false });
                    }
                    this.setState({ isLoading: false });

                })
                .catch(_error => {
                    console.log("error",_error)

                    this.setState({ isLoading: false });
                })
            }


            render(){
                const { isAuthenticated, isLoading } = this.state;
                if (isLoading) {
                    return <div>Loading...</div>
                }
                if (!isAuthenticated) {
                    return <Redirect to="/login" />
                }

                return (<MainLayout><Component {...this.props} /></MainLayout>)
            }
        }

    
}

export default Authorized;
