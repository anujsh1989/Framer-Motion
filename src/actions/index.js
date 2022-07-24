export const addBtn = (data) => {
    return {
        type: "ADD ",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteBtn = () => {
    return {
        type: "DELETE"
    }
}

export const removeBtn = () => {
    return {
        type: "REMOVE"
    }
}