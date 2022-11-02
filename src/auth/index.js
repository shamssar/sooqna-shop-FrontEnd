import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

let url = 'http://localhost:3000'
// let url = 'https://sooqna.herokuapp.com'



export const signUp = (data) => {
    // console.log(data);
    return fetch(`${url}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const signIn = ({
    username,
    password
}) => {
    console.log(username, password)
    // let url = `${url}/signin`;
    return fetch(`${url}/signin`, {
        method: 'POST',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}


export const authenticate = (data, next) => {
    cookies.set('data', data, {
        path: '/'
    });
    window
        .location
        .reload();
    next();
};

export const logOut = next => {
    cookies.remove('data', {
        path: '/'
    })
    // window
    //     .location
    //     .reload();

};

export const isAuthenticated = () => {
    if (cookies.get('data') === 'undefined') {
        return false;
    }
    if (cookies.get('data')) {
        return cookies.get('data');
    } else {
        return false;
    }
};

export const userInfo = async (token) => {
    // if (cookies.get('data') === 'undefined') {
    //     return null;
    // }
    // if (cookies.get('data')) {
    //     let userInfo = cookies.get('data')
    //     // console.log('tttttt',userInfo);
    //     return userInfo.user;
    // } else {
    //     return null;
    // }

    // let url = `${url}/userinfo`
    const result = await axios.get(`${url}/userinfo`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // console.log('ffff', result)
    return result.data
        // .then(response => {
        //     let user = response.data;
        //     console.log('iiiiiiii',(user));
        //     return user;
        // })
        // .catch(err => {
        //     console.log(err);
        // });
};

export const updateUserInfo = async (data,token) => {
    // console.log(data);
    // return fetch('https://sooqna.herokuapp.com/updateprofile', {
    //         method: 'PUT',
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         body:JSON.stringify(data)
    //     })
    //     .then((response) =>response.json())
    //     .then((result) => {
    //         console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    // let url = `${url}/updateprofile`
    const result = await axios.put(`${url}/updateprofile`,data,{
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    // console.log(result);
    return result;

};