class Services {
    reverseDate = (date) => {
        return date.split('-').reverse().join('.');
    }
}

export default Services;