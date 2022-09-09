# Pasos para ejecutar el Servidor

1. Clonar el repositorio

2. Abrir la consola (CMD) y entrar a la carpeta del proyecto

3. Ejecutar el comando "npm install" para instalar las dependencias

4. Ejecutar el comando "npm run dev", el servidor se iniciará y ya puede probar la aplicacion


# Pasos para ejecutar el Cliente

1. Clonar el repositorio

2. Abrir la consola (CMD) y entrar a la carpeta del proyecto

3. Ejecutar el comando "npm install" para instalar las dependencias

4. Ejecutar el comando "npm start" y abrir el navegador, por defecto en localhost:3000


# Pasos para probar la aplicación

La aplicación consume un API pública de pokemón, la cual es https://pokeapi.co/api/v2, para probar
la aplicación, primero entrará a la vista de búsqueda, allí se le pide digitar un número, al digitarlo
sera redirigido a la vista de resultados donde se le mostrarán los resultados que concuerden con el 
parámetro ingresado, o de lo contrario un mensaje de alerta en caso de no tener resultados.

Despúes en la vista de resultados tendrá un listado con 4 items escogidos al azar, cada uno con su información y un botón para ver el detalle, al dar click en el botón VER, sera redirigido a la vista de
detalle, donde podrá ver la información detallada de cada item.
