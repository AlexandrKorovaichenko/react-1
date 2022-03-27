
export const requairedField = value => {

    if(value) {return undefined;}

    return "Field is required";

}


export const maxLength30 = value => {

    if(value && value.length > 30) {return "Length is more 30";}

    return undefined;

}


export const minLength2 = value => {

    if(value && value.length > 2) {return "Length is more 2";}

    return undefined;

}


export const maxLenghtCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}