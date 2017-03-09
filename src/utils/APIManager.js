import 'whatwg-fetch';
import _ from 'lodash';

export default {
	get: (url, cb) => {
		const options = {
			headers: {
				"Content-Type": "application/json",
				"Authorization": "token " + localStorage.getItem('token')
			}
		}

		fetch(url, options)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log(res.results)

				if (_.isFunction(cb)) {
					cb();
				}
				
				return res;
			})
			.catch(err => {
				console.error(err)
			})
	},


	post: (url) => {
		const data = {
      username: 'candidate.5545@eventable.com',
      password: 'R8VMaFVK'
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }

    fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(res => {
      	localStorage.setItem('token', res.token);

       	console.log(res);
       	return res;
      })
      .catch(err => {
        console.error(err);
      })
	} 
}