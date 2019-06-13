export interface UserProfile {
    firstName: string,
    lastName: string,
    foodType: number,
    isPlusOne: boolean,
    plusOneId: number|null
}

export interface LoginPayload {
    code: string
}