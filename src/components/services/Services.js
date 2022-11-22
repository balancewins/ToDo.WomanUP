class Services {
    /** Функция для отображения пользователю текущей даты в формате dd.mm.yyyy */
    reverseDate = (date) => {
        return date.split('-').reverse().join('.');
    }

    /** Функиця для сохранения даты в формате, корректно воспринимающимся new Date(arg) */
    getNowDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = (now.getHours()<10?'0':'') + now.getHours();
        const minute = (now.getMinutes()<10?'0':'') + now.getMinutes();
        return `${year}-${month}-${day}T${hour}:${minute}`
    }
}

export default Services;