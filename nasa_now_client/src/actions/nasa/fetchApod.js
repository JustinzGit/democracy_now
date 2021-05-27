export default function fetchApod(dateInput=""){
    return (dispatch) => {
        dispatch({ type: 'START_APOD_REQUEST'})
        fetch(`https://nasa-now-backend.herokuapp.com/nasa/apod/${dateInput}`)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200){
                return dispatch({ 
                    type: 'ACQUIRE_APOD', 
                    
                    astronomyPic: { 
                        url: apiData.url,
                        date: apiData.date, 
                        hdurl: apiData.hdurl, 
                        title: apiData.title, 
                        media_type: apiData.media_type,
                        explanation: apiData.explanation 
                    }})
            }
        })
    }
}
