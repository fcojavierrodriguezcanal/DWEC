# A2



##  ¿QUE SE VA A HACER?

Realizaremos la conexión entre los componentes login, register, verificar cuenta, inicio y recuperar contraseña cada uno enlazado a paginas independientes.

##  ¿COMO SE VA A HACER?

Haremos uso de la herramienta angular con el uso de router link y router outlet para enlazar los componentes entre sí además de usar el app routing module para especificar como se van a llamar las rutas de cada una de las páginas. 


Al inicio se redireccionará al login, desde donde podremos acceder al inicio si es que disponemos de una cuenta y contraseña. Desde el inicio se podrá retornar a la vista login en el caso de que el usuario quiera cerrar su sesión.

Desde el login tambien podremos acceder a la pagina de recuperacion de contraseña, que una vez especificado un correo, se podrá volver a la página de login nuevamente.

Por ultimo tambien tendremos la opcion de registrarnos desde la pagina de login. Esta pagina de registro nos llevará a su vez a una nueva pagina donde el usuario debe verificar su cuenta finalmente. Una vez verificada, el usuario podrá volver a la sesion login para hacer uso de su cuenta y entrar al inicio.