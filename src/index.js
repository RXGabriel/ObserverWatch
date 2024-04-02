import Marketing from '../src/observers/marketing.js'
import Shipment from '../src/observers/shipment.js'
import Payment from '../src/events/payment.js'
import PaymentSubject from './subjects/paymentSubject.js'

const subject = new PaymentSubject()
const marketing = new Marketing()
subject.subscribe(marketing)

const shipment = new Shipment()
subject.subscribe(shipment)

const payment = new Payment(subject)
payment.creditCard({ userName: 'ericksilva', id: Date.now() })

subject.unsubscribe(marketing)

payment.creditCard({ userName: 'mariasilva', id: Date.now() })