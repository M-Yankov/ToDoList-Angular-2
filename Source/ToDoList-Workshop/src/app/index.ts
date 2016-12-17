import * as services from './inject-services'


const mapKeyToValue = (obj) => Object.keys(obj).map(key => obj[key])

export { App } from './app'
export { routes } from './router'
export const Providers = [
    ...mapKeyToValue(services)
]