export const getCityNames = ({ temperatures }) => Object.keys(temperatures).filter(key => key !== 'dates' && key !== 'us')