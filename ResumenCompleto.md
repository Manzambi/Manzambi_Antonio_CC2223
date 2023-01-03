
# Hito 0 📶
 🔗  Para informaciones de la descripcion del Premolema clica en [DESCRIPCION DEL PROBLEMA](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%200/descripcionProblema.md)
 
 🔗 Para informacion acerca de la configuracion clica en [CONFIGURACION DEL SISTEMA](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%200/ConfiguracionSistema.md)

# Hito 1 📶
__________________________________________________________________________________________________________________________________________________
🔗 Enlace para acceder a la [HU1- Como Usuario quiero poder seleccionar y/o comprar las pizzas mas baratas](https://github.com/Manzambi/Manzambi_Antonio_CC2223/issues/1)

🔗 Enlace para acceder a la [HU2 - Como usuario quiero poder crear una cuenta y ser parte de los clientes destacados](https://github.com/Manzambi/Manzambi_Antonio_CC2223/issues/2)

🔗 Enlace para acceder a la  [HU3- Como supervisor de ventas, quiero consultar los pedidos de venta procesados clasificándolos por regiones de mayor entrega](https://github.com/Manzambi/Manzambi_Antonio_CC2223/issues/3)

🔗 Enlace para acceder a la [HU4- Como supervisor de los pedidos quiero consultar un listado de los pedidos registrados que faltan ser procesado](https://github.com/Manzambi/Manzambi_Antonio_CC2223/issues/4)

### Extructuras iniciales de algunas clases ℹ️
 
 🔗 Extructura inicial de la [clase usuario cliente](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%201/src/Cliente/cliente.component.ts)

🔗 Extructura inicial de la [clase pizza](https://github.com/Manzambi/Manzambi_Antonio_CC2223/tree/main/Docs/Hito%201/src/Pizza)

🔗 Extructura inicial de la [clase Administrador](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%201/src/AdmSistem/adm-sistema.component.ts)


# Hito 2  📶 📶

---------------------------------------------------------------------------------------------------------------------------------------------  
## Breves consideraciones

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 11.0.4.
lo que se ve a continuacion es solo una parte de explicacion del proyecto, la parte del front, con un enlance del codigo al final.

### 🔄 Development server 💻

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

### 📈☣️ Code scaffolding 📑 📉

Ejecute `ng generar componente nombre-componente` para generar un nuevo componente. También puede usar `ng generar directiva|tubería|servicio|clase|guardia|interfaz|enum|módulo`.

### ⏏️ Build 💥

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`. Use el indicador `--prod` para una compilación de producción.

### ⚛️ Running unit tests 💣

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

### 🔜 Running end-to-end tests 🔜

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo mediante [Transportador](http://www.protractortest.org/).

### Further help 🔀

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI] (https://angular.io/cli).

[traduzccion y parte del codigo](https://github.com/Manzambi/Manzambi_Antonio_CC2223/tree/main/Docs/Hito%202/MyAplication__CC/pizzaHut)


## ♾️ Infrastructure and project tests ♾️

En este apartado añadimos tests y una descripción inicial del entorno o infraestructura de la aplicación, donde se concretan los gestores de dependencias y tareas. Para la adición de tests, se necesita una biblioteca de aserciones y marco de pruebas, ambos añadidos también en este apartado.

En la Actualidad Existen varios Framworks de Pruebas muchos de ellos ya incluen bibliotecas de aserciones, para este proyecto estamos usando el liguagen typescript dentro del marco del framwork Angular, para el frontend, eso con la intuicion de crear una simulacion en la parte del cliente, y para el backend, crearemos una api con el nodeJs, usando el framework express, donde haremos el manejo de nuestra informacion. hasta el momento no vamos vamos a implementar una base de datos(eso sera mas para adelante). 🔥

### :electron:  Choice and configuration of the package manager and dependency
   
  Para el gestor de Paquetes y depencia usaremos `NPM`. ℹ️ `NPM` es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScrip 
  Para utilizar el comando `NPM` tenemos que descargar node primero. `nodejs` es el entorno que nos brindara el gestor `NPM`. para eso procedemos del seguiente modo.
    
![GenerandounanuevaSSH](../main/Docs/Hito%202/img/DescargadeNode.png)

Una vez descargada Lo instalamos. El paso de la instalacion de nodejs s super sencilla on esto basta seguir la sequencia de Next hasta concluir el proceso.

una vez Concluida el proceso hicimos `node --version` este comando nos dira la version del node, y `npm --version` la version npm.

![GenerandounanuevaSSH](../main/Docs/Hito%202/img/NPMYNODEversion.png)

una vez instalado nuestros gestores, procedemos a la instalacion de Expressjs. Pero antes nos movemos en la carpeta que pretendemos desarrollar nuestra api, y ejecutamos `npm init --yes` peste comando nos creara el [paquete.json](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/ApiRest/package.json) en ellas estaran algunas configuraciones utiles para nuestro proyecto, una vez hecho eso procedemos a ejecutar  `npm install express -E` para la instalacion de express que sera  nuestro framwork rest.

![GenerandounanuevaSSH](../main/Docs/Hito%202/img/UsandoNPMParaInstalarExpress.png)

essas son la herramientas usadas, para el avance de los testes hicimos simulacion con los datos json de nuestra api usando postman, usando `npm run dev` o `node index.js` en este caso el [index.js](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/ApiRest/index.js) es el nombre de nuestro ficheiro que posee los JSON. esto es para visualizacion. una vez ejecutado el comando, apartir de postman usando nuestro servidor local, podemos visualizar estos datos.  

![GenerandounanuevaSSH](../main/Docs/Hito%202/img/getClientes.png)

estos datos son capturados desde nuestro [cliente](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/src/app/cliente/cliente.component.ts) angular.

![GenerandounanuevaSSH](../main/Docs/Hito%202/img/getClienteAngular.png)

para eso tenemos dos servidores(... 🔃), pero con puertos diferentes. ♍.. estos datos son recebids y son testeados ...


### Marco de Pruebas y La Biblioteca de Aserciones..

Para las pruebas unitarias en javascript o typescript existen:

(mochajs.org) ⭐

 Jasmine ✴️   K@rm
 
 Tape   --  🌟
 
 Jest  - -- - - 🌠
 
 para los testes unitarios eligimos el framwork Karma, y la biblioteca de aserciones Jasmine ✴️.
 Karma es un framwork de pruebas que viene por defecto en Angular, en nuestro caso lo usamos para hacer los tests con el comando `ng test`, pero para eso hay que configurar la biblioteca de aserciones, y un par de configuraciones en [Karma.config.js](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/karma.conf.js) y en los spec.ts de cada componente en prueba. 
 
      obs: Los archivos spec.ts son los archivos que e generan en cada componente para la creacion d las pruebas de dichas componentes,
      es alli donde se crea las reglas, o bien es nuestra biblioteca.
      
 
 
![GenerandounanuevaSSH](../main/Docs/Hito%202/img/Clienteprueba.png)

La foto de Arriba es la demostracion de una compilacion de todos los componentes, en la foto hay dos apartados lo de arriba es la parte de la configuracion de la biblioteca de aserciones para el [teste de la clase cliente](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/src/app/cliente/cliente.component.spec.ts), el apartado de bajo es la compilacion de los testes, como podemos ver hay 20 pruebas con exito.

![GenerandounanuevaSSH](../main/Docs/Hito%202/img/PruebaDemostracionenelservidor.png)




[Configuracion del Karma](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%202/MyAplication__CC/pizzaHut/karma.conf.js)

-- -- - - - -
#  🥉 Hito 3 🥉

  🔥 Bien Venido a hito 3 🔥
   
   - - -- - -- - - - - -- - - - --  - - -- - -- - - - - -- - - - --   - - -- - -- - - - - -- - - - --   - - -- - -- - - - - -- - - - --  

## ♑ Pruebas de código dentro de contenedores Docker 🧪

Por un lado, todo proyecto que desarrollemos debería ir acompañado de sus pruebas de código para asegurar la calidad, hasta aquí todo bien. 
Por otro lado, Docker nos facilita la vida al poder tener todo dentro de nuestro contenedor y no necesitar en nuestra máquina nada más que 
el propio Docker.

Si estamos trabajando sin Docker, esto es muy sencillo ya que tenemos acceso total sobre todos esos elementos generados como pueden ser los reportes, 
aquí no hay fallo.

Por el contrario, si estamos trabajando con Docker y no necesitamos recolectar ninguno de estos elementos, el proceso también es sencillo, basta 
con añadir un stage en el Dockerfile que ejecute las pruebas de código, de modo que no se genere nuestra imagen Docker si estas no pasan.


En el proceso de creación de esta imagen Docker, se ejecutarán las pruebas de código en una etapa y no nos tenemos que preocupar de nada más.

El problema aquí es que, utilizando una imagen como esta, no podemos recoger ningún elemento propio del proceso de testing, por lo tanto, no podemos generar ningún tipo 
de cobertura.

## ⬇️ Ejecutar pruebas de código dentro de Docker y recuperar los reportes ⬇️

Llegados a este punto y asumiendo que lo vamos a hacer las pruebas de código utilizando Docker, ¿qué opciones tenemos?

▶️ Todo en el mismo Dockerfile 🐳🛃
Un [Dockerfile](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%203/Dockerfile) exclusivo para las pruebas
Como sabemos, en un Dockerfile la imagen final se construye a partir del último FROM, por tanto, podemos pensar en crear un fichero Dockerfile 
para las pruebas de código en el codigo de abajo es la muestra de lo que hablamos

      FROM mcr.microsoft.com/dotnet/core/runtime:3.1-buster-slim AS base
      WORKDIR /app

      FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS restore
      WORKDIR /source
      COPY ["src/Servicio/Servicio.csproj", "src/Servicio/"]
      COPY ["test/UnitTests/UnitTests.csproj", "test/UnitTests/"]
      COPY ["*.sln", "."]
      RUN dotnet restore 

      FROM restore AS build
      COPY . .
      RUN dotnet build  -c Release --no-restore

      FROM build AS test
      VOLUME ["/source"]
      ENTRYPOINT dotnet test -c Release --no-build --logger trx

Con esto ya estaría solucionado el problema porque vamos a tener una imagen sobre la que lanzar las pruebas. 
En cambio, ¿cómo podemos tener un único fichero Dockerfile y generar dos imágenes distintas? Podemos utilizar para eso el modificador --target 
indicándole la etapa de generación que queremos. Con eso vamos a poder generar 2 imágenes distintas.

La ventaja de esta aproximación es que solamente vamos a necesitar mantener un fichero, y vamos a aprovechar el hecho de que Docker cachea las capas 
de un Dockerfile que no han cambiado.

Esto lo podemos comprobar muy fácilmente ejecutando desde la carpeta que contiene el fichero .sln el comando.
          
         docker build -f .\src\Servicio\Dockerfile .
y después creamos la imagen Docker para pasar las pruebas de código con el comando 🏺
            
           docker build --target test -f .\src\Servicio\Dockerfile .
podemos comprobar que todo el proceso lo ha recuperado desde la cache: [img3](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%203/img/im3.png)
 

## 🐳 Ejecutando solo una vez las pruebas de código dentro de Docker 🐳

En muchos casos, el hecho de que las pruebas se ejecuten dos veces no será un problema ya que en caso de pruebas unitarias donde se tarda unos 
segundos, la diferencia no es notable. Pero… ¿qué pasaría si tenemos unas pruebas de integración y funcionales que si tardan tiempo? Pues
simplemente que estaríamos duplicando el tiempo de ejecución, ya que por un lado ejecutamos las pruebas al generar la imagen Docker y otra vez 
al generar los reportes.

*️⃣ Podemos solucionar esto cambiando ligeramente el Dockerfile y cambiando la etapa de test por esta otra:
  
        FROM build AS test
        VOLUME ["/source"]
        ENTRYPOINT ["/bin/sh", "-c", "dotnet test -c Release --no-build"]
*️⃣ Con este pequeño cambio, basta con ejecutar el contenedor con el volumen y especificar en la salida de las pruebas para tener acceso a los
resultados:

        docker run --rm --entrypoint dotnet -v ruta_interna:/test-results imagen  test -c Release --no-build /p:CollectCoverage=true /p:CoverletOutputFormat=\"opencover,cobertura\" /p:CoverletOutput=/test-results/

## Utilizando 🐳 [docker-compose](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%203/Docker-compose.yml) 🐳 

Si bien es cierto que esto es muy útil, cuando tenemos varios proyectos de pruebas la cosa se puede complicar si vamos imagen a imagen 
ejecutando los test… Además, puede que necesitemos alguna dependencia externa como una base de datos o una cache distribuida…

Gracias a 🐳 [docker-compose](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%203/Docker-compose.yml) vamos a poder atajar de un plumazo ambas situaciones, basta con que creemos un fichero docker-compose.yml para las pruebas.
En este fichero podemos declarar todas las dependencias que necesitemos como contenedores adicionales y además, ejecutar cada contenedor utilizando
una etapa concreta de un [Dockerfile](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/Docs/Hito%203/Dockerfile).
---- -- -- - - - - -- - - - -- - - - - -- - - - - - -- - - -- - -- - - - -

# Hito 4 :computer:
## Integracion continua :fire:

  Para la preparacion del proyecto con integracion continua el sistema online de prueba de codigo que usamos es Travis CI.
  la configuracion  [.travis.yml](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/.travis.yml) nos muestra como hicimos la configuracion del trvis para las pruebas en integracion de continuidad en Travis.
  
  En primera instancia lo que hicimos fue dasre de alta con nuestra cuenta de github, una vez hecho eso, lo que hicimos despues, fue hacer una par de congiguracioes, y hacer el vinculo de nuestro repositorio en github con Travis, pero creamos el archivo [.travis.yml](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/.travis.yml) que es el archivo que Travis CI usara para desplegar y ejecutar las pruebas.
  
  el resultado del procesamiento se ve abajo.
  

  ![GenerandounanuevaSSH](../main/Docs/Hito4/img%20/img1.jpeg)
  
  El objectivo esta vez es poder ejecutar las pruebas de forma continua cada vez que ocurra un evento especial, que en nuestro caso será un impulso a la rama principal. :fire:
  
   Se puede visualizar al archivo testeado en Travis desde la configuracion de [.travis.yml](https://github.com/Manzambi/Manzambi_Antonio_CC2223/blob/main/.travis.yml)
  ![GenerandounanuevaSSH](../main/Docs/Hito4/img%20/img3.jpeg)
 
  


 ###### date edition: 2/Enero 📅
 ###### Editor: Manzambi Antonio ✍️
 ###### License ©️2022




[inicio](https://github.com/Manzambi/Manzambi_Antonio_CC2223)
