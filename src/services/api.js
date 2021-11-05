import axios from 'axios';

axios.defaults.baseURL = 'https://test-task-j.herokuapp.com/data?page=1&size=10';

const getStudents = () => axios
.get()


export default getStudents