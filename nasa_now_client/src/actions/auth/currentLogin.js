export default function currentLogin(){
    return (dispatch) => {
        dispatch({ type: 'ACQUIRING_CURRENT_LOGIN'})
        fetch("http://localhost:3001/current_login", { credentials: "include" })
        .then(response => response.json())
        .then(apiData => {
            if (apiData.logged_in){
                return dispatch({ type: 'CURRENT_LOGIN', user: apiData.user, loggedInStatus: true })
            }
            else if (!apiData.logged_in){
                return dispatch({ type: 'CURRENT_LOGIN', user: {}, loggedInStatus: false })
            }
        })

    }
}