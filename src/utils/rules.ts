export const rules = {
    required: (message: string = 'Поле обязательно для заполнения 👇') =>
        ({ required: true, message: message }),
    /*min: (length: number, message: string = `Минимум ${length} символов`) => 
        ({ min: length, message: message })*/
}