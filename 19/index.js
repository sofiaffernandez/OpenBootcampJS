const nombre = 'Sofía';
const apellido = 'Fernández';

const datos = {
  nombre: nombre,
  apellido: apellido
};

sessionStorage.setItem('datos', JSON.stringify(datos));
localStorage.setItem('datos', JSON.stringify(datos));
const fechaExpiracion = new Date(Date.now() + 120000); // 2 minutos
const cookieValor = JSON.stringify(datos);
document.cookie = `datos=${cookieValor}; expires=${fechaExpiracion.toUTCString()}; path=/`;
