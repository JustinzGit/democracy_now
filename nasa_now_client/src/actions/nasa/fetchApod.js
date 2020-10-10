export default function fetchApod(dateInput=""){
    return (dispatch) => {
        dispatch({ type: 'START_APOD_REQUEST'})
        fetch(`http://localhost:3001/nasa/apod/${dateInput}`)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200){
                return dispatch({ 
                    type: 'ACQUIRE_APOD', 
                    
                    astronomyPic: { 
                        date: apiData.date, 
                        title: apiData.title, 
                        hdurl: apiData.hdurl, 
                        explanation: apiData.explanation 
                    }})
            }
        })
    }
}
