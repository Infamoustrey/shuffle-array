import test from 'ava'
import shuffle from './index'

let arr = [0,1,2,3,4,5]

test('Shuffles Array', t => {
    let newArr = shuffle(arr)
    t.true( !arr.every( (el, i) => el == newArr[i] ) , 'Shuffles Array')
})