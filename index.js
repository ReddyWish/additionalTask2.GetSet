class CarService {
    static defaultWorkingHours = {
        from: '9:00',
        to: '20:00'
    }

    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.defaultWorkingHours

    }

    repairCar(carName) {
        let now = new Date()
        let hour = now.getHours()
        let min = now.getMinutes()
        let time = now.getHours() +":"+ now.getMinutes()
        if (carName === undefined) {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        } else if (Object.values(this.workingHours)[0].split(':')[0] > time.split(':')[0] &&
            Object.values(this.workingHours)[1].split(':')[0] < time.split(':')[0]){
            console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
        } else {
            console.log(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
        }
    }

}

const carService = new CarService('repairNow', { from: '8:00', till: '20:00' })
carService.repairCar('BMW')
