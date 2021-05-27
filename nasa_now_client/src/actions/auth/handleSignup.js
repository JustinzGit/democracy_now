export default function handleSignup(userData){
    return (dispatch) => {
        dispatch({ type: 'START_SIGNUP_REQUEST'})
        fetch("/users", {
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
            if (apiData.status === 201){
                return dispatch({ type: 'SIGNUP', user: apiData.user })
            }
            else if (apiData.status === 500){
                return dispatch({ type: 'POPULATE_AUTH_ERRORS', errors: apiData.error })
            }
        })
    }
}