
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /[0-9]/;

export function validation(userData){
    let errors={}
    if (!userData.username) errors.username='Por favor complete este campo';
    if (!regexEmail.test(userData.username)) errors.username='Usuario debe ser un email';
    if (userData.username.length >35) errors.username='No puede tener mas de 35 caracteres';
    if (userData.password.length < 6 || userData.password.length > 10 ) errors.password= 'Debe contener entre 6 y 10 caracteres';
    if (!regexPassword.test(userData.password)) errors.password='Debe contener al menos un número';
    return errors;
}