import { observable, action, computed } from 'mobx';

class Store{
    

    @observable tasks: string[] = [
        'Angular',
        'is',
        'for',
        'losers',
    ];
    @observable clicks: number[] = new Array(this.tasks.length).fill(0);
    @observable selected: string = null;

    @observable user: string = 'Jaime';

    @computed get total(){
        console.log('calculando');
        return store.clicks.reduce((total: number, current: number) => {
            return total + current;
        }, 0);
    }

    @action onChangeSelected(newSelected: string){
        this.selected = newSelected;
        let index = this.tasks.indexOf(this.selected);
        this.clicks[index]++;
    }

    @action setUser(user: string){
        this.user = user;
    }
}

export const store = new Store();