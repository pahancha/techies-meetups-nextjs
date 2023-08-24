export type MeetupType = {
    id: number
    name: string
    photoURL: string
    startTime: Date
    endTime: Date
    createdOn: Date
    updatedOn: Date
}
export type MeetupssType = {
    results: MeetupType[]
}