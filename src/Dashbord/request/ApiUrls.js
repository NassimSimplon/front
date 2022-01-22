// globlobal Url
const url = 'http://localhost:4000/Nass_X'

// User Urls
export const addUserUrl = `${url}/user/add`
export const getAllUsersUrl = `${url}/users/getAll`
export const deleteUserUrl = `${url}/user/delete/:id`
export const updateUserUrl = `${url}/user/update/:id` 
export const getUserUrl = `${url}/user/get/:id`


 

// Services Urls
export const addServiceUrl = `${url}/Service/add`
export const getAllServicesUrl = `${url}/Services/get`
export const deleteServiceUrl = `${url}/Service/delete`
export const updateServiceUrl = `${url}/Service/update` 
export const getServiceUrl = `${url}/Service/get/:id`



//Témoignage
export const addTémoignageUrl = `${url}/Temoignage/add`
export const getAllTémoignagesUrl = `${url}/Temoignages/get`
export const deleteTémoignageUrl = `${url}/Temoignage/delete`
export const updateTémoignageUrl = `${url}/Temoignage/update/:id` 
export const getTémoignageUrl = `${url}/Temoignage/get/:id`