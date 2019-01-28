import { CHANGE_TOKEN,CLEAR_TOKEN } from "../action/tokenActions";

const token = "";

export default function(state=token,action){
	switch(action.type){
		case CHANGE_TOKEN:{
			return action.token
		}
		case CLEAR_TOKEN:{
			return null
		}
		default:
			return state;
	}
}