import React  from 'react';
import {useSelector} from 'react-redux'
import App from '../app'
import Form from './form'
import Admin from './admin'

const Main = () => {
    const {loginstatus}=useSelector((state)=>state.login)
    return (  
        <div>
            {
                loginstatus?<Admin/>:<Form></Form>
            }
        </div>
    );
}
 
export default Main;
