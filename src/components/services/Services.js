class Services {
    reverseDate = (date) => {
        return date.split('-').reverse().join('.');
    }

    getNowDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();
        const minute = (now.getMinutes()<10?'0':'') + now.getMinutes();
        return `${year}-${month}-${day}T${hour}:${minute}`
    }
}

export default Services;