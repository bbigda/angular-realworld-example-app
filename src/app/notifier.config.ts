import {NotifierOptions} from 'angular-notifier';

export const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
    },
    vertical: {
      position: 'top',
      distance: 60
    }
  },
  behaviour: {
    autoHide: 3000,
  }
};
