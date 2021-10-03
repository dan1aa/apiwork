import {getData} from './modules/getData.js'

try {
    getData()
}
catch(e) {
    throw new Error(e)
}