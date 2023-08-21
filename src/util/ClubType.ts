export type ClubType = {
    id: number
    title: string
    photoURL: string
    content: string 
}
export type ClubsType = {
    results: ClubType[]
}