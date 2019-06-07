import {
  observable,
} from 'mobx'

  
export default class HomeStore {
    @observable moonStyle = {
      top: '50%',
      left: '5%',
    }

    @observable sunStyle = {
      top: '50%',
      left: '5%',
    }
}
