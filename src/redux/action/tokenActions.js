export const CHANGE_TOKEN = "CHANGE_TOKEN";
export const CLEAR_TOKEN = "CLEAR_TOKEN";

export function changeToken(data){
	return {
		type : CHANGE_TOKEN,
		token : data
	}
}

export function clearToken(){
	return {
		type : CLEAR_TOKEN
	}
}