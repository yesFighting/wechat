import store from '../store'

export function hasPermission(permission){
    let myPermission = store.getters.permissions;
    return myPermission.indexOf(permission) > -1;
}