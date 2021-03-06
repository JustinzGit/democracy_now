export default function handleLogout(){
    return (dispatch) => {
        dispatch({ type: 'START_LOGOUT_REQUEST'})
        fetch("https://nasa-now-backend.herokuapp.com/logout", {credentials: "include"})
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200){
                return dispatch({ type: 'LOGOUT' })
            }
        })
    }
}