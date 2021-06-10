import axios from 'axios';

const testApiGet = (fileName = '', pageNum = 1, pageSize = 10) => {
	return axios.get(`/testapi/report/lists/property?name=${fileName}&pageNum=${pageNum}&pageSize=${pageSize}`);
};

export default {
	testApiGet,
};
