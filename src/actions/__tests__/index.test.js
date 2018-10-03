import { saveComment } from 'actions'
import  { SAVE_COMMENT } from 'actions/types'

it('has a type of SAVE_COMMENT', ()=>{

  const action = saveComment()

  expect(action.type).toEqual(SAVE_COMMENT)
})

it('produces a payload of given argument', ()=>{
 const action = saveComment('my comment')

 expect(action.payload).toEqual('my comment')

})
