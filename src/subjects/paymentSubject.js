export default class PaymentSubject {
    #observers = new Set()
    notify(data) {
        this.#observers.forEach(observer => observer.update(data))
    }

    subscribe(observer) {
        this.#observers.add(observer)
    }

    unsubscribe(observer) {
        this.#observers.delete(observer)
    }
}
