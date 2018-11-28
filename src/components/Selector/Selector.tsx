import * as React from 'react';
import { observer } from 'mobx-react';

import { store } from '../../stores/Store';

interface ISelectorProps{
}

@observer export class Selector extends React.Component<ISelectorProps>{

    constructor(props: any){
        super(props);
    }

    render(){
        return <div>
            <ul>
                {store.tasks.map((elem: string, index: number) => 
                    <li key={elem}
                        onClick={() => store.onChangeSelected(elem)}
                        style={{ color: store.selected === elem ? 'yellow' : 'black' }}
                        >
                        {elem} - {store.clicks[index]}
                    </li>
                )}
            </ul>
        </div>;
    }
}