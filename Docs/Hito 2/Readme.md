## 馃捇  hito 2  馃搶

  ### 馃対 Bien Venido al hito2 馃敟
  
## Breves consideraciones

Este proyecto se gener贸 con [Angular CLI](https://github.com/angular/angular-cli) versi贸n 11.0.4.
lo que se ve a continuacion es solo una parte de explicacion del proyecto, la parte del front, con un enlance del codigo al final.

### 馃攧 Development server 馃捇

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicaci贸n se recargar谩 autom谩ticamente si cambia alguno de los archivos de origen.

### 馃搱鈽ｏ笍 Code scaffolding 馃搼 馃搲

Ejecute `ng generar componente nombre-componente` para generar un nuevo componente. Tambi茅n puede usar `ng generar directiva|tuber铆a|servicio|clase|guardia|interfaz|enum|m贸dulo`.

### 鈴忥笍 Build 馃挜

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilaci贸n se almacenar谩n en el directorio `dist/`. Use el indicador `--prod` para una compilaci贸n de producci贸n.

### 鈿涳笍 Running unit tests 馃挘

Ejecute `ng test` para ejecutar las pruebas unitarias a trav茅s de [Karma](https://karma-runner.github.io).

### 馃敎 Running end-to-end tests 馃敎

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo mediante [Transportador](http://www.protractortest.org/).

### Further help 馃攢

Para obtener m谩s ayuda sobre Angular CLI, use `ng help` o consulte la p谩gina [Descripci贸n general y referencia de comandos de Angular CLI] (https://angular.io/cli).

[traduzccion y parte del codigo](https://github.com/Manzambi/Manzambi_Antonio_CC2223/tree/main/Docs/Hito%202/MyAplication__CC/pizzaHut)


## 鈾撅笍 Infrastructure and project tests 鈾撅笍

En este apartado a帽adimos tests y una descripci贸n inicial del entorno o infraestructura de la aplicaci贸n, donde se concretan los gestores de dependencias y tareas. Para la adici贸n de tests, se necesita una biblioteca de aserciones y marco de pruebas, ambos a帽adidos tambi茅n en este apartado.

En la Actualidad Existen varios Framworks de Pruebas muchos de ellos ya incluen bibliotecas de aserciones, para este proyecto estamos usando el liguagen typescript dentro del marco del framwork Angular, para el frontend, eso con la intuicion de crear una simulacion en la parte del cliente, y para el backend, crearemos una api con el nodeJs, usando el framework express, donde haremos el manejo de nuestra informacion. hasta el momento no vamos vamos a implementar una base de datos(eso sera mas para adelante). 馃敟

### :electron:  Choice and configuration of the package manager and dependency
   
  Para el gestor de Paquetes y depencia usaremos `NPM`. 鈩癸笍 `NPM` es el sistema de gesti贸n de paquetes por defecto para Node.js, un entorno de ejecuci贸n para JavaScrip 
  Para utilizar el comando `NPM` tenemos que descargar node primero. `nodejs` es el entorno que nos brindara el gestor `NPM`. para eso procedemos del seguiente modo.
    
![GenerandounanuevaSSH](./img/DescargadeNode.png)

Una vez descargada Lo instalamos. El paso de la instalacion de nodejs s super sencilla on esto basta seguir la sequencia de Next hasta concluir el proceso.

una vez Concluida el proceso hicimos `node --version` este comando nos dira la version del node, y `npm --version` la version npm.

![GenerandounanuevaSSH](./img/NPMYNODEversion.png)

una vez instalado nuestros gestores, procedemos a la instalacion de Expressjs. Pero antes nos movemos en la carpeta que pretendemos desarrollar nuestra api, y ejecutamos `npm init --yes` peste comando nos creara el [paquete.json](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/ApiRest/package.json) en ellas estaran algunas configuraciones utiles para nuestro proyecto, una vez hecho eso procedemos a ejecutar  `npm install express -E` para la instalacion de express que sera  nuestro framwork rest.

![GenerandounanuevaSSH](./img/UsandoNPMParaInstalarExpress.png)

essas son la herramientas usadas, para el avance de los testes hicimos simulacion con los datos json de nuestra api usando postman, usando `npm run dev` o `node index.js` en este caso el [index.js](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/ApiRest/index.js) es el nombre de nuestro ficheiro que posee los JSON. esto es para visualizacion. una vez ejecutado el comando, apartir de postman usando nuestro servidor local, podemos visualizar estos datos.  

![GenerandounanuevaSSH](./img/getClientes.png)

estos datos son capturados desde nuestro [cliente](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/src/app/cliente/cliente.component.ts) angular.

![GenerandounanuevaSSH](./img/getClienteAngular.png)

para eso tenemos dos servidores(... 馃攦), pero con puertos diferentes. 鈾?.. estos datos son recebids y son testeados ...


### Marco de Pruebas y La Biblioteca de Aserciones..

Para las pruebas unitarias en javascript o typescript existen:

(mochajs.org) 猸?

 Jasmine 鉁达笍   K@rm
 
 Tape   --  馃専
 
 Jest  - -- - - 馃尃
 
 para los testes unitarios eligimos el framwork Karma, y la biblioteca de aserciones Jasmine 鉁达笍.
 Karma es un framwork de pruebas que viene por defecto en Angular, en nuestro caso lo usamos para hacer los tests con el comando `ng test`, pero para eso hay que configurar la biblioteca de aserciones, y un par de configuraciones en [Karma.config.js](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/karma.conf.js) y en los spec.ts de cada componente en prueba. 
 
      obs: Los archivos spec.ts son los archivos que e generan en cada componente para la creacion d las pruebas de dichas componentes,
      es alli donde se crea las reglas, o bien es nuestra biblioteca.
      
 
 
![GenerandounanuevaSSH](./img/Clienteprueba.png)

La foto de Arriba es la demostracion de una compilacion de todos los componentes, en la foto hay dos apartados lo de arriba es la parte de la configuracion de la biblioteca de aserciones para el [teste de la clase cliente](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/src/app/cliente/cliente.component.spec.ts), el apartado de bajo es la compilacion de los testes, como podemos ver hay 20 pruebas con exito.

![GenerandounanuevaSSH](./img/PruebaDemostracionenelservidor.png)

 ###### date edition: 22/Nov 馃搮
 ###### Editor: Manzambi Antonio 鉁嶏笍
 ###### License 漏锔?2022




[Configuracion del Karma](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/karma.conf.js)




[inicio](https://github.com/Manzambi/Manzambi_Antonio_CC2223)
