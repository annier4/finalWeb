import * as React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';

import './Root.scss';
import { Header } from '../../components/Header/Header';
import { Selector } from '../../components/Selector/Selector';

import { store } from '../../stores/Store';

interface IRootProps{}



@observer export class Root extends React.Component<IRootProps> {

    constructor(props: any){
        super(props);
        this.state = {
            x: "",
            y: "",
            z: ""
        }
        window.addEventListener('devicemotion', function(e) { 
            let x = e.accelerationIncludingGravity.x; 
            let y = e.accelerationIncludingGravity.y; 
            let z = e.accelerationIncludingGravity.z; 
            console.log(x);
        });
    }

    render(){
        return <div>  
            <Header title={`Total: ${store.total}`} 
                text={store.user}
                img="./assets/img/logo.png"/>

            <Selector />

            <button onClick={() => store.setUser(store.user + 1)}>Cambiar!</button>
        </div>
    }
}























