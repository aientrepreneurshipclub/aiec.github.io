import { configureStore } from '@reduxjs/toolkit'
import langReducer from './langSlice'
import modeReducer from './modeSlice'
import tokenReducer from './tokenSlice'
import attendeeReducer from './attendeeSlice'
import signReducer from './signSlice'
import eventsReducer from './eventsSlice'
import isLoadReducer from './isLoadSlice'
import isRegistedReducer from './isRegistedSlice'
import emailsReducer from "./emailsSlice"
import membersReducer from "./membersSlice"
const reducer = {
    mode: modeReducer,
    lang: langReducer,
    token: tokenReducer,
    attendee:attendeeReducer,
    sign:signReducer,
    events:eventsReducer,
    isLoad:isLoadReducer,
    isRegisted:isRegistedReducer,
    emails:emailsReducer,
    members:membersReducer
}
const store = configureStore({reducer})
export default store