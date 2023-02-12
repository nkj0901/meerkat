import api from './customAxios'


export const getAccount = async () => {
    const result = await api({ method: 'get', url: '/member/profile/read' })
    return result
}

export const verifyRoom = async (body) => {
    const result = await api({ method: 'put', url: '/room/join' , data: body })
    return result
}

export const roomClose = async (body) => {
    const result = await api({ method: 'put', url: '/room/exp' , data: body })
    return result
}


