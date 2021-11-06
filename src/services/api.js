import axios from 'axios';

const URL = 'https://test-task-j.herokuapp.com/data';

export const getStudents = (page, size, sort, sortDir ) =>   
     axios
    .get(`${URL}?page=${page}&size=${size}&sortBy=${sort}&sortDir=${sortDir}` )
    .then(response =>  response.data)


export const findStudentApi = (page, size, search,) => 
 axios
.get(`${URL}?page=${page}&size=${size}&search=${search}`)
.then(response => response.data)

 
