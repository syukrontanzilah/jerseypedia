export const GET_USER = "GET_USER"

export const getUser = () => {
    console.log("masuk aksi..")
    return (dispatch) => {
        dispatch({
            type: GET_USER,
            payload: {
                nama: 'Azmi',
                email: 'azmyalaydrus@gmail.com'
            }
        })
    }
}