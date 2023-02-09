import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
// import { useUserStore } from './user'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // useUserStore().getUser()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  pinia.use(persistedstate)
  return pinia
})
