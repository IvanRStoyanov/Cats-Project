export default {
    default:{
        name:'',
        breed:'',
        age: ['user'],
        color: '',
        picture: ''
    },

    errorMsg: obj => {
        const {picture} = obj;
        if(!picture) return 'Picture is required';
    }
}