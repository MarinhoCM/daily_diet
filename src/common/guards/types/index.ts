export type jwtReponse = { 
    payload: { username: string },
    iat: number,
    exp: number,
}

export enum requestMethodMapper {
    GET = 'LER',
    POST = 'CRIAR',
    PATCH = 'AT',
    DELETE = 'DEL',
}
