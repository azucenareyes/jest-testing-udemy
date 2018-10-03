import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions with a type of  SAVE_COMMENT', ()=>{
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
})

it('handles unknown types', ()=>{
   const newState = commentsReducer([], { type: ''})

  expect(newState).toEqual([])

})