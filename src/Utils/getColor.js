import colors from '../Data/colors.json'

export const getColor = (index) => {

    const length = colors.length;
    const step = length - 76;

    return colors[(step * index) % length];
}
