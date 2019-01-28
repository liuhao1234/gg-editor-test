import axios from 'axios';
import serverUrl from './serverUrl';
import store from '../redux/store';
//import { Modal, message } from 'antd';
import { changeToken } from '../redux/action/tokenActions';
export default class Axios {
	static ajax(options){
		const baseURL = serverUrl;
		//const baseURL = "http://localhost:9696/";
		const token = store.getState().token;
		console.log(token)
		return new Promise((resolve,reject)=>{
			axios({
				method:'post',
				baseURL,
				url:options.url,
				data:options.data,
				headers:{
					'Content-Type': 'application/json',
					token
				}
			}).then((response)=>{
				//console.log(response)
				if(response.status === 200){//http返回的200
					let res = response.data;
					if(res.code === 200){//code是501的时候请求超时
						resolve(response.data);
						store.dispatch(changeToken(res.token));
					}
				}
			})
		})
	}
}