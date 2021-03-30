export default null;/*

  import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit'


const initialState = null;


const streamsSlice = createSlice( {
    name: 'streams',
    initialState: initialState,
    reducers: {
        set: (state, {payload}: PayloadAction<Stream>) => {
            // mutable thanks to redux-toolkit
            state.push(payload);
        },
        remove: (state, {payload}: PayloadAction<{ id: number }>) => {
            const index = state.findIndex( stream => stream.id === payload.id);
            if( index !== -1 ) state.splice(index, 1);
        }
    }
} )

const actualStreamSlice = createSlice( {
    name: 'actualStream',
    initialState: initialStateActualStream,
    reducers: {
        set: ( state, { payload }: PayloadAction<Stream>) => {
            return { ...state, ...payload}
        }
    }
} )


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


interface Database {
    streams: Stream[];
}

const initialStateDB: Stream[]  = [
    {
        title: 'Butter',
        photo: Fashion7Photo,
        description:'I show my butter collection',
        status: 'planned',
        author: 'Ireallylikebutter',
        participants: 0,
        id: 9
    }
]

const databaseSlice = createSlice( {
    name: 'database',
    initialState: initialStateDB,
    reducers: {
        add: (state, {payload}: PayloadAction<Stream>) => {
            state.push(payload);
        }
    }
} )



////////////////////////////////////////////////////
////////////////////////////////////////////////////


const reducers = {
    streams: streamsSlice.reducer,
    actualStream: actualStreamSlice.reducer,
    databaseStreams: databaseSlice.reducer
}

export default configureStore( {
    reducer: reducers,
} )

export const {
    set: setStreamActionCreator, remove: removeStreamActionCreator
} = streamsSlice.actions;

export const {
    set: setActualStreamActionCreator
} = actualStreamSlice.actions;

export const{
    add: addDatabaseStreamActionCreator
} = databaseSlice.actions

*/