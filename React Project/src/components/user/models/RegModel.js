export default {
    default:{
        username:'',
        password:'',
        roles: ['user'],
        repeatPass: '',
        phone: '',
        picture: 'https://i.pinimg.com/736x/48/1a/5e/481a5e1dede0d60b83a99b3bb74de33f--felix-the-cats-book-lovers.jpg'
    },

    errorMsg: obj => {
        const {username, password, repeatPass} = obj;
        if(!username) return 'Username is required';
        if(!password) return 'Password is required';
        if(username.length < 3) return 'Username must be at least 3 symbols';
        if(password.length < 6) return 'Password must be at least 6 symbols';
        if(password !== repeatPass) return 'Passwords did not match';
    }
}