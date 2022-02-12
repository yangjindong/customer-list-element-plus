import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import authModule from './modules/Auth'
import customerModule from './modules/Customer'

export const store = createStore<RootStateTypes>({
  state: {
    text: 'This is Vuex Root.state.text'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule,
    customer: customerModule
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol()

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
