import React, { useContext, useReducer } from "react";

const AuthStateContext = React.createContext();
const AuthDispatcherContext = React.createContext();

export function useAuthState(){
    const context = useContext(AuthStateContext)

    if(!context){
        throw Error('useAuthState must be used with an AuthProvider')
    }
    return context;
}

export function AuthDispatcher(){
    const context = useContext(AuthDispatcherContext)

    if(!context){
        throw Error('useAuthDispatcher must be used with an AuthProvider');
    }
    return context
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatcherContext.Provider value={dispatch}>
                {children}
            </AuthDispatcherContext.Provider>
        </AuthStateContext.Provider>
    )
}