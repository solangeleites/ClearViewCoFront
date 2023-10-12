import axios from 'axios';

export const createUser = async (nombre, email, password) => {
  try {
    await axios.post(`${import.meta.env.BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    
    const user = await loginUser(email, password);
    return user;
  } catch (error) {
    console.log(error);
    // return alert(error.response.data.errors[0].msg);
  }
};
createUser('sol', 'leites@gmail.com', '123456')

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${import.meta.env.BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  }catch (error) {
    console.log('Error al intentar iniciar sesión:', error.response);
    // Puedes agregar más lógica según sea necesario
  }
  
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${import.meta.env.BASE_URL}/auth/verify`, {
      email,
      code,
    });
    console.log('Usuario verificado');
    return response.data;
  } catch (error) {
    console.log(error);
    // return alert(error.response.data.msg);
  }
};