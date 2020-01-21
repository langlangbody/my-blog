import {observable, action, computed } from 'mobx';
class SetTing {
  @observable collapsed: boolean = false;
  @observable siderTheme: boolean = false;

  @computed
  get collapsedState() {
    return this.collapsed;
  }

  @computed
  get siderThemeState() {
    return this.siderTheme;
  }

  @action
  setCollapsed(): void {
    console.log('setCollapsed');

    this.collapsed = !this.collapsed;
  }
  @action
  setSiderTheme(): void {
    console.log('setSiderTheme');

    this.siderTheme = !this.siderTheme;
  }
}

export const SetTingStore: any = new SetTing();
