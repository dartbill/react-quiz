import root from './index'
import {screen} from '@testing-library/jest-dom'

describe('index.js',()=>{
    it('renders root',()=>{
        screen.getByRole('root')
        console.log(root)
    })
})
