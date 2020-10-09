export default function handleLogin(userData){
    return (dispatch) => {
        dispatch({ type: 'START_LOGIN_REQUEST'})
        fetch("http://localhost:3001/sessions", {
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
            console.log(apiData)
            if (apiData.status === 201){
                return dispatch({ type: 'LOGIN', user: apiData.user })
            }
        })
    }
}

