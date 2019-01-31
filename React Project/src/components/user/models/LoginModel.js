export default {
    default:{
        username:'',
        password:''
    },

    errorMsg: obj => {
        const {username, password} = obj;
        if(!username) return 'Username is required';
        if(!password) return 'Password is required';
        if(username.length < 3) return 'Username must be at least 3 symbols';
        if(password.length < 6) return 'Password must be at least 6 symbols';
    }
}