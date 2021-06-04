const actions = {
    createAction(type, payload) {
        return {
            type,
            payload
        }
    },

    createActionAsync(type, payload) {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({ type, payload })
            }, 3000)
        }
    }
}


export default actions