export default {
    default:{
        type:'lostAndFound',
        content:''
    },
	
	errorMsg: obj => {
        if(obj.content.length === 0) return 'Article can not be empty';
		return '';
	}
}