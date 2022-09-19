export default class Post {
    #id: string
    #userName: string
    #coment: string

    constructor(userName: string, coment: string, id: string = null) {
        this.#userName = userName
        this.#coment = coment
        this.#id = id
    }

    // toJSON(){
    //     return `{"username":"${this.#userName}", "coment":"${this.#coment}"}`  
    // }

    toJSON() {
        return {id: this.getId(), userName: this.getUserName(), coment: this.getComent()}; // everything that needs to get stored
    };

    static vazio() {
        return new Post('', '')
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

    getId() {
        return this.#id
    }

    getUserName() {
        return this.#userName
    }

    getComent() {
        return this.#coment
    }
}