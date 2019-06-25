export class InvalidCodeError extends Error {
    public code: string

    constructor(code: string) {
        super(`Zadaný kód ${code} neexistuje.`)
        this.code = code
    }
}