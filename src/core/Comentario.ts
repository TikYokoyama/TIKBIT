export default class Comentario {
    #id: string
    #userName: string
    #coment: string

    constructor(userName: string, coment: string, id: string = null) {
        this.#userName = userName
        this.#coment = coment
        this.#id = id
    }

    static vazio() {
        return new Comentario('', '')
    }

    get id() {
        return this.#id
    }

    get userName() {
        return this.#userName
    }

    get coment() {
        return this.#coment
    }
}