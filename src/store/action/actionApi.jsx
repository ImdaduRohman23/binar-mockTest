import axios from "axios";

export const getApi = () => {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                dispatch({
                    type: 'GET_DATA',
                    data: res.data
                })
            })
    };
};