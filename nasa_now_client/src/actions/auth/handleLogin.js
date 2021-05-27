export default function handleLogin(userData){
    return (dispatch) => {
        dispatch({ type: 'START_LOGIN_REQUEST'})
        fetch("/sessions", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200){
                return dispatch({ type: 'LOGIN', user: apiData.user })
            }
            else if (apiData.status === 401){
                return dispatch({ type: 'POPULATE_AUTH_ERRORS', errors: apiData.error})
            }
        })
    }
}

