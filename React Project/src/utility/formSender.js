import requester from './requester';
export default {
    register: {
        send: obj => {
            const userData = {};
            userData.username = obj.username;
            userData.password = obj.password;
            userData.roles = obj.roles;
            userData.phone = obj.phone;
            userData.picture = obj.picture;
            return requester.post('user', '', 'basic', userData)
        },
        success: res =>  {
            sessionStorage.setItem('authtoken', res._kmd.authtoken);
            sessionStorage.setItem('username', res.username);
            sessionStorage.setItem('picture', res.picture)
            return '/';
        }
    },
	
    login: {
		send: obj => {
            const userData = {};
            userData.username = obj.username;
            userData.password = obj.password;
            return requester.post('user', 'login', 'basic', userData)
        },
        success: res =>  {
            sessionStorage.setItem('authtoken', res._kmd.authtoken);
            sessionStorage.setItem('username', res.username);
            sessionStorage.setItem('roles', res.roles);
            sessionStorage.setItem('picture', res.picture);
            return '/';
        }
    },
	
	article: {
		send: obj => {
			const articleData = {};
			articleData.author = sessionStorage.getItem('username');
			articleData.authorPic = sessionStorage.getItem('picture');
			articleData.content = obj.content;
			articleData.type = obj.type;
			return requester.post('appdata', 'articles', 'kinvey', articleData)
		},
		success: res => {
		    return '/article/list/' + res.type;
        }
	},

    articleEdit: {
        send: obj => {
            const articleData = {};
            articleData.author = sessionStorage.getItem('username');
            articleData.authorPic = sessionStorage.getItem('picture');
            articleData.content = obj.content;
            articleData.type = obj.type;
            return requester.update('appdata', 'articles/' + obj.targetPoint, 'kinvey', articleData)
        },
        success: res => {
            return '/article/details/' + res.type + '/' + res._id;
        }
    },
	
    regCat: {
        send: obj => {
            const catData = {};
            catData.name = obj.name;
            catData.age = obj.age;
            catData.breed = obj.breed;
            catData.color = obj.color;
            catData.picture = obj.picture;
            catData.owner = sessionStorage.getItem('username');
            return requester.post('appdata', 'cats', 'kinvey', catData)
        },
        success: res => {
            return '/cat/list';
        }
    }
}