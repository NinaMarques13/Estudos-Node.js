import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #videos = new Map() 

    create(video) {
        const videoID = randomUUID

        this.#videos.set(videoID, video)
    }
    list(video) {
        return this.#videos.values()
    }
    update(video) {
        this.#videos.set(id, video)
    }
    delete(video) {
        this.#videos.delete(id)
    }

}