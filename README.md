# PURRFECT_SHOT 
<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRLogo2.png" width = "auto" height = "150">
</p>

## 1. INTRODUCCIÓN
### 1.1. Concepto general 

Purrfect Shot es un juego de acción ambientado en el antiguo oeste donde, con tu personaje gatuno, podrás competir contra tus amigos para ver quien es el mejor tirador. 

Derrotar al máximo número de enemigos posible que atacan el pueblo que visitas es tu objetivo. Cuantos más aciertes, más puntos obtendrás. Purrfect Shot pretende ofrecer un espacio divertido, con una pequeña historia narrativa en la que tienes dos objetivos, derrotar a los enemigos del juego y a tu contrincante.

### 1.2. Rasgos Característicos 

Purrfect Shot es un juego competitivo para dos jugadores o un juego de entrenamiento para un jugador.

Cada jugador tomará el papel de uno de los adorables gatitos que habitan el salvaje oeste para acabar con los bandoleros que merodean por el pueblo y proteger a sus vecinos, quienes les obsequiarán con regalos por su gran labor.

Compite contra un amigo para ver quien es el más rápido desenfundando su arma y gana puntos por cada enemigo abatido, pero ten cuidado no le dispares a uno de los residentes del pueblo o te castigarán. No todos los enemigos serán iguales, así que quizás tendrás que entrenarte en el modo para un solo jugador y agudizar tus reflejos.

Al final del tiempo se verá quién es el verdadero jefe del pueblo y podrás hacerte con la victoria, aunque si no lo consigues siempre podrás pedir la revancha.

### 1.3. Género

El juego pertenece al género de juegos casuales, y se sitúa en el subgénero o temática de videojuego de disparos.

Este tipo de videojuegos se caracterizan por ser rápidos de jugar y con algún elemento que enganche al jugador para que continúe jugando. En el caso de Purrfect Shot, es el carácter competitivo el que mantiene a los jugadores con las ganas de echar otra partida y “pedir la revancha”.

### 1.4. Público objetivo 

El público objetivo de Purrfect Shot comprende edades desde los 7 años hasta los 30. 

Su estética de animales adorables lo hace perfecto para un público joven, igual que de la misma forma, los sonidos de disparos o las acciones “violentas” contra estos animales obligan al usuario a tener una edad mínima para garantizar que no tendrá repercusiones como miedo a los sonidos fuertes o una conducta agresiva hacia los animales.

### 1.5. Estilo visual 

El videojuego está totalmente creado con gráficos 2D. Su estética es “kawaii”, mezclando tiernos gatitos con una ambientación del lejano oeste. Se ha preferido orientar el estilo visual de tal forma que se adapte a nuestro público objetivo y que incluso los más mayores se sientan atraídos por esta estética a la vez que los más pequeños disfrutan de las características propias de las series de animación.

### 1.6. Plataforma

Debido a la parte en red, el juego se distribuirá para navegadores web, tanto para el juego en “local” como para el juego en línea.

### 1.7. Licencia

Al ser un juego sin ánimo de lucro y para un contexto educativo, las licencias usadas serán personales o educativas. En caso de querer comercializar el juego deberían adquirirse licencias para los programas utilizados que así lo indiquen en sus términos de uso.

El juego es totalmente original, por lo que prácticamente todos los recursos externos que se utilicen serán usados simplemente como referencias para crear recursos propios. En caso contrario, se indicará claramente qué recursos se han usado y de dónde se han obtenido.

## 2. MECÁNICAS
### 2.1. Jugabilidad
#### 2.1.1. GamePlay 

Una vez seleccionado el tipo de juego (en red o local), Purrfect Shot despliega una interfaz que permite a los jugadores seleccionar el número de rondas en las que se desean batirse, así como en qué escenario desean realizar la competición. Posteriormente ambos jugadores deben escoger con qué pistoleros van a jugar y qué ropas van a llevar en dichas rondas.

Tras el momento de selección empiezan las rondas de tiro, en las que ambos jugadores comienzan con 6 balas en el cargador. en la pantalla van a aparecer dos tipos de personajes, bandidos o residentes del pueblo. Durante las rondas ambos jugadores deben intentar disparar a los bandidos, y para ello utilizan balas, las cuales se van gastando de una en una cada vez que el jugador dispara. 
Para evitar encontrarse con el cargador vacío, los jugadores deben recoger los obsequios que los residentes del pueblo les ofrecen, los cuales pueden contener balas que se suman a los cargadores de los jugadores. 

El objetivo principal es intentar disparar al mayor número de bandidos posible, y más rápido que el jugador contrincante, para así, sumar puntos de recompensa en el contador de puntuación. Además, también se debe intentar recoger el mayor número de obsequios que ofrecen los residentes, para así evitar vaciar el cargador y conseguir power-ups.

Por otra parte, si los jugadores se equivocan al disparar o recoger obsequios recibirán una penalización en su contador de puntuación.

Finalmente, una vez transcurridas todas las rondas, se comparan las puntuaciones de ambos jugadores para determinar el ganador (el que obtenga la puntuación más alta). 

#### 2.1.2. Niveles

En el videojuego no existen unos niveles predefinidos propiamente implementados, debido a su naturaleza competitiva multijugador. 
Ya que la base del juego radica en la victoria frente al jugador contrario, la progresión de la partida se halla en un aumento de la dificultad basada en el tiempo de aparición y de desaparición de los enemigos. Es decir, a medida que avanzan las rondas preseleccionadas por los jugadores, el tiempo que pasan tanto enemigos como aliados en pantalla disminuye, teniendo que aumentar el tiempo de reacción por parte de los jugadores para disparar balas y recoger recompensas.

#### 2.1.3. Movimientos

Durante la partida los jugadores pueden realizar 3 tipos de movimientos básicos:

- Apuntar: Se trata del movimiento de la mirilla a izquierda o derecha, para que el jugador pueda elegir el objetivo en pantalla al que realizar la siguiente acción.

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/cursor_con_mirilla1.png" width = auto height = "200">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/cursor_con_mirilla2.png" width = auto height = "200">
</p>

- Disparar: Se trata de apretar el gatillo y disparar una bala del cargador al objetivo apuntado. En el caso de que el objetivo sea un bandido, se suman al jugador que dispara los puntos correspondientes a la recompensa del enemigo.
Si por el contrario el objetivo que recibe el disparo es un residente, se restan los puntos correspondientes al contador del jugador que dispara, dependiendo de la importancia del civil que recibe el disparo.

- Recoger: La acción consiste en aceptar el obsequio que los residentes ofrecen, ya sean balas (se suman al cargador del jugador que las recoge) o power-ups. 
En contraposición, si alguno de los jugadores realiza esta acción mientras apunta a un bandido, recibirá un disparo, es decir, se le restarán los puntos correspondientes a la recompensa del enemigo.

#### 2.1.4. Items

En el videojuego los jugadores pueden acumular balas recibiendo objetos de los residentes del pueblo, estas balas se gastan al disparar a los objetivos durante el juego.

#### 2.1.5. Inventario

En el videojuego no está presente un inventario propiamente definido, aunque los jugadores cuentan con un cargador que enumera la cantidad de balas que poseen.

#### 2.1.6. Power-Ups

Los power-ups se consiguen al recoger los obsequios de los residentes:

- Balas infinitas: Durante 2 segundos las balas parecen regenerarse, y el jugador que recoge este power-up puede disparar sin tener en cuenta las balas de su cargador. Una vez pasado este tiempo el jugador queda con el mismo número de balas que tenía antes de obtener Balas Infinitas.

- Ovillo de lana: El jugador que recoge este power-up lanza un ovillo de lana al otro jugador, que queda distraído durante 2 segundos, impidiéndole realizar ninguna acción.

- Inmunidad diplomática: Durante 2 segundos los disparos del jugador no afectan a los residentes, aunque sí se ve reducido el número de balas en el cargador del jugador.

### 2.2. Flujo de Juego 
#### 2.2.1. Tutoriales

Debido a la escasez en las acciones y mecánicas in-game, el videojuego consta de un sencillo panel de controles en el menú de opciones, accesible durante todo el tiempo de ejecución de la aplicación. En dicho panel se muestran las teclas correspondientes a las distintas acciones del videojuego que pueden realizar los jugadores.

#### 2.2.2. Flujo de Dificutad

Como se ha mencionado anteriormente, la dificultad del videojuego aumenta progresivamente con el transcurso de las rondas. En las que se va reduciendo el tiempo en pantalla de los objetivos , por lo tanto los jugadores deben precisar sus reflejos y velocidad de reacción.


### 2.3. Personajes
#### 2.3.1. Personajes principales

El juego contará con un total de cuatro personajes seleccionables a libre elección del jugador. Estos están nombrados en honor a personajes famosos del oeste:

__Cat Love-Nat Love__  
Después de que el joven Cat perdiese a su padre por una mala cosecha, construyó una granja propia para poder vivir tranquilo. Desgraciadamente los bandidos no dejaban que viviese su plácido sueño y le robaban con frecuencia, así que decidió aprender a disparar para poder defender su propiedad de los forajidos.

__Kitty el Niño- Billy el Niño__  
Kitty era una joven que tuvo que ganarse la vida desde muy pequeña en los bajos fondos por su propia cuenta. Aprendió a cómo usar un arma de fuego y luego de hacerse un nombre como forajida, decidió cambiar el rumbo de su vida y convertirse en vaquera y luchar contra los bandidos que atacan su hogar.

__Paw Allison-Clay Allison__  
Paw es conocido como uno de los mejores pistoleros del viejo oeste, no hay nada que le guste más que batirse en duelo a cualquier oportunidad que se le presente. Ahora, usa esas habilidades para defender a aquellos que no pueden y de paso divertirse un poco desenfundando su revólver.

__Tiger Tim-Buffalo Bill__  
Tim se ganó su apodo de Tiger no solo por su aspecto similar, sino también por su ferocidad en combate. Luchó en guerras territoriales contra los sabuesos del este y nunca recibió un solo disparo. Ahora Tiger Tim usa su renombre y sus aptitudes para seguir luchando contra las injusticias, pero esta vez en su propio hogar.

La elección de personajes se realizará antes del inicio de la ronda por cada uno de los jugadores.

#### 2.3.2. Bandidos

Los enemigos con los que contaremos dentro del juego serán “dianas” con la ilustración de bandidos a los cuales tendremos que disparar. Tendrán los aspectos de distintos famosos forajidos, para que los personajes practiquen su puntería antes del enfrentamiento con bandidos.  

Contamos con:  
- El proscrito: +100 puntos.
- El forajido: +50 puntos.
- El criminal: +20 puntos.
- El saqueador: +10 puntos
- El matón: +5 puntos.

Dependiendo de la recompensa del bandido al que abatamos, se nos otorgará puntos en base a ella, como son: 5, 10, 20, 50 y 100 puntos.

#### 2.3.3. Residentes

Los Residentes serán “dianas” al igual que los enemigos pero con aspecto de ciudadanos corrientes de pueblo del antiguo oeste. De esta forma los personajes practicarán el controlar el pulso a la hora de disparar para evitar posibles daños colaterales y que ningún civil salga herido a la hora de la verdad.  

Al igual que los bandidos los residentes también tendrán una puntuación; solo que aquí se nos restará dependiendo de cual sea al que disparemos. Contamos con:
- El alcalde: -100 puntos.
- El doctor: -50 puntos.
- El alguacil: -20 puntos.
- Civiles: -10 puntos.
- Niños: -5 puntos.

### 2.4. Movimientos
#### 2.4.1. Controles

Los controles en línea son iguales que en local para el jugador 1. Los controles para los jugadores en local son:
- Jugador 1 controles:
  - Desplazamiento: tendremos la tecla A y D (marcada en verde).
  - Disparo: tecla W (marcada en rojo).
  - Recoger objeto: tecla S (marcada en azul).
- Jugador 2 controles:
  - Desplazamiento: tendremos la tecla ← y →  (marcada en verde).
  - Disparo: tecla ↑ (marcada en rojo).
  - Recoger objeto: tecla  ↓ (marcada en azul).

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/teclado.png" width = "520" height = auto>
</p>

#### 2.4.2. Cámara

Será una cámara estática que muestra a los personajes de espalda y por la parte de delante se encuentran las “dianas”  (enemigos) a los cuales tendremos que disparar.

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/wii_referencia.png" width = auto height = "200">
</p>

#### 2.5. Logros

Dependiendo de nuestro desempeño en el juego y de nuestras hazañas se nos recompensará con los siguientes logros:
- Tiro certero: no fallar ninguna bala.
- Buen samaritano: no disparar a ningún Residente.
- Gatillo fácil: disparar a 3 Residentes de forma seguida.
- El favorito del pueblo: recoge todos los objetos que sueltan los Residentes durante una ronda.
- El más rápido del oeste: derriba a 3 Bandidos en menos de 2 segundos.
- Duelista legendario: gana todas las rondas frente a tu oponente.
- Criminal de guerra: dispara a todos los Residentes que aparecen durante una ronda.

## 3. INTERFACES
Todos los bocetos aparecerán a la izquierda y los escenarios acabados a la derecha
### 3.1. Diagrama de Flujo 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/diagrama_flujo.png" width = auto height = "650">

</p>

### 3.2. Menú principal

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/menu_inicio.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/pantallainiciomax.png" width = auto height = "300">
</p>

__Nombre de la pantalla__: Menú principal.  
__Descripción de la pantalla__: Es la pantalla que aparece al inicio del juego.  
__Estados del juego__: Con esta pantalla podemos acceder a “Jugar”, el cual nos permite iniciar una nueva partida, que nos conduce a la interfaz de elección de jugadores y tipo de partida.Con el botón “Opciones” se accede al menú de opciones. Por último tenemos la opción de “Créditos” que nos mostrará los integrantes que han participado en la creación de Purrfect Shot.

### 3.3. Interfaz de elección de jugadores y tipo de juego 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRMenu1.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/menu1.PNG" width = auto height = "300">
</p>

__Nombre de la pantalla__: Ajustes de jugadores y tipo de juego  
__Descripción de la pantalla__: Es la pantalla que aparece tras haber iniciado en el menú principal el juego.   
__Estados del juego__: Permite al usuario elegir el número de jugadores navegando en la primera opción de este menú, así como elegir y el tipo de juego (pulsando local o en línea). Se puede acceder de nuevo al menú de opciones mediante el botón “Opciones”. Por último, se dispone de un botón “Continuar” para acceder a la siguiente pantalla del juego 

### 3.4. Interfaz de sala

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRMenu2.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/menu2.PNG" width = auto height = "300">
</p>

__Nombre de la pantalla__: Elección de sala.  
__Descripción de la pantalla__: Aparece sólo tras haber escogido como opción el jugar en línea.  
__Estados del juego__: Permite al jugador crear una nueva sala pulsando “Crear Sala”,  o unirse a una ya existente mediante un código.
El último botón “Atrás” permite al usuario retroceder a la pantalla de juego anterior por si quiere cambiar alguna opción que ya había establecido con anterioridad.

### 3.5. Interfaz de personalización de partida

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRMenu3.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/menu3.PNG" width = auto height = "300">
</p>

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/personalizacionpartida.png" width = auto height = "300">
</p>
 
__Nombre de la pantalla__: Personalización de partida.  
__Descripción de la pantalla__: Los jugadores podrán escoger a su personaje a través de un menú emergente que aparecerá al clicar sobre su cartel de jugador. De la misma forma se podrán modificar el número de rondas y el mapa  
__Estados del juego__: Cada jugador podrá elegir su personaje antes de cada partida clicando en el cartel de su jugador. En local esto se tendrá que hacer por turnos, mientras que en línea podrá ser simultáneo. Se pondrá una restricción para que cada jugador solo pueda elegir su personaje (en línea) y se podrá utilizar para juegos de un solo jugador para evitar seleccionar un personaje para un jugador que no existe.  
Se podrá también cambiar el número de rondas que se van a jugar seguidas, así como el mapa donde se va a jugar. Si se selecciona un mapa, este será el único que se verá en todas las rondas, si se selecciona aleatorio, en cada ronda el mapa cambiará.  
Se podrá volver a la pantalla anterior con el botón “Atrás” y empezar la partida con el botón “Jugar''.

### 3.6. Interfaz de elección de personaje

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRMenu4.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/menup.PNG" width = auto height = "300">
</p>

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/personalizacionpersonaje.png" width = auto height = "300">
</p>
 
__Nombre de la pantalla__: Personalización de personajes.  
__Descripción de la pantalla__: Los jugadores podrán escoger a su personaje a través del menú de selección de partida.   
__Estados del juego__: En esta interfaz aparecerá el nombre del gato seleccionado con una pequeña descripción a su lado (para leer la descripción de cada personaje ir al apartado 2.3.1 Personajes principales):

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/eleccion_personaje.jpg" width = auto height = "250">
  <img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/descripciones.png" width = auto height = "250">
</p>

Los artículos que acompañan a nuestro personaje jugable, una vez seleccionado, se verán en la misma interfaz de la siguiente manera:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/eleccion_ropa.jpg" width = auto height = "250">
</p>

### 3.7. Interfaz del juego 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/ingame.png" width = auto height = "300">
 <img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/capturajuego.png" width = auto height = "300">
</p>

__Nombre de la pantalla__: Interfaz de juego.  
__Descripción de la pantalla__: Es la pantalla que aparece una vez el juego va a dar comienzo .  
__Estados del juego__: Es una interfaz que se conserva independiente de cómo sea el fondo o nivel que se esté jugando. En este caso se mostrará una opción en la esquina superior izquierda en la que el jugador puede acceder al menú de opciones. Por otro lado, está el temporizador que será el tiempo restante de la ronda del que disponen los jugadores.  
Abajo en las esquinas izquierda y derecha respectivamente se mostrarán las balas de las que disponen los jugadores para poder disparar. 

### 3.8. Menú de opciones

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/opciones.png" width = auto height = "300">
  <img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/MenusJuego/opciones.png" width = auto height = "300">
</p>

__Nombre de la pantalla__: Menú de opciones.  
__Descripción de la pantalla__: Es la pantalla a la que se accede desde el menú de inicio pulsando “Opciones” o desde el menú de juego en la esquina superior izquierda.  
__Estados del juego__: En este menú podemos hacer variar la música de ambiente y los sonidos y efectos que van a tener tanto los jugadores como los objetos. Por otro lado, para mayor comodidad del jugador hay una opción para silenciar todos los sonidos y música a la vez.   
Tenemos una parte del menú dedicado a los controles para que el jugador pueda recordar los movimientos que debe hacer para poder jugar y dos opciones, una que cierra este menú y otra que aplica todo los cambios que el usuario haya hecho. 

### 3.9. Interfaces de los jugadores

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/vs.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/MenusJuego/inGame/vs.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/ImagenVS.jpg" width = auto height = "300">
</p>

__Nombre de la pantalla__: Personajes de los jugadores elegidos.  
__Descripción de la pantalla__: Es la pantalla que aparece una vez los usuarios han elegido con qué personajes quieren jugar.  
__Estados del juego__: Es una pantalla de paso que solo muestra los personajes elegidos por los usuario. No es una pantalla con la que se pueda interactuar.

### 3.10. Interfaz de victoria y derrota
Es una pantalla que se creó después durante el desarrollo del juego reutilizando material artítico y es por eso que no tiene ningún boceto. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/pantala%20resultados.png" width = auto height = "300">
</p>

__Nombre de la pantalla__: Pantalla de victoria y derrota
__Descripción de la pantalla__: Es la pantalla en la que aparece el jugador ganador y el jugador perdedor junto con todas sus estaditicas 
__Estados del juego__: Es una pantalla de paso que solo muestra las estaditicas de la partida que se ha realizado. 

### 3.10. Interfaz de records
Es una pantalla que se creó después durante el desarrollo del juego reutilizando material artítico y es por eso que no tiene ningún boceto. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/records.png" width = auto height = "300">
</p>
__Nombre de la pantalla__: Pantalla de records
__Descripción de la pantalla__: Es una pantalla que aparece al comienzo en el título y que muestra los records del juego 
__Estados del juego__: Es una pantalla de paso que informa al jugador únicamente. 

### 3.11. Interfaz de residentes
Es una pantalla que se creó después durante el desarrollo del juego reutilizando material artítico y es por eso que no tiene ningún boceto. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/residentes.png" width = auto height = "300">
</p>
__Nombre de la pantalla__: Pantalla de residentes
__Descripción de la pantalla__: Es una pantalla en la que aprecen todos los personajes residentes que hay en el jueogo junto con la puntuación que descuntan si les disparas. 
__Estados del juego__: Es una pantalla de paso que informa al jugador únicamente.

### 3.11. Interfaz de enemigos
Es una pantalla que se creó después durante el desarrollo del juego reutilizando material artítico y es por eso que no tiene ningún boceto. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/enemigos.png" width = auto height = "300">
</p>
__Nombre de la pantalla__: Pantalla de enemigos
__Descripción de la pantalla__: Es una pantalla en la que aparecen todos los personajes enemigos que hay en el jueogo junto con la puntuación que descuntan si les disparas. 
__Estados del juego__: Es una pantalla de paso que informa al jugador únicamente.

### 3.11. Interfaz de potenciadores
Es una pantalla que se creó después durante el desarrollo del juego reutilizando material artítico y es por eso que no tiene ningún boceto. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/potenciadores.png" width = auto height = "300">
</p>
__Nombre de la pantalla__: Pantalla de potenciadores
__Descripción de la pantalla__: Es una pantalla en la que aparecen todos los potenciadores que se han incorporado en el jeugo y que aparecen junto con los residentes a lo largo de la partida. 
__Estados del juego__: Es una pantalla de paso que informa al jugador únicamente.

### 3.11. Interfaz de controles
Es una pantalla que se creó después durante el desarrollo del juego reutilizando material artítico y es por eso que no tiene ningún boceto. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/potenciadores.png" width = auto height = "300">
</p>
__Nombre de la pantalla__: Pantalla de controles
__Descripción de la pantalla__: Es una pantalla en la que aprecen los controles de ambos jugadores. Cómo odeben moverse y como deben disparar o recoger los potenciadores.
__Estados del juego__: Es una pantalla de paso que informa al jugador únicamente.

## 4. ARTE
### 4.1. Concept Art 2D

El concept art 2D del juego se distribuye en tres partes importantes: las interfaces, los personajes y los escenarios donde se sitúan estos.

- Menú principal: como ya se ha mostrado en el apartado de interfaces (3.2 Menú principal), el menú principal consta de un fondo desértico y cuatro botones: jugar, opciones, créditos y salir. Al pasar el cursor por encima de los tres primeros se despegará la esquina del botón, simulando una pegatina. En cuanto al botón “salir”, aparecerá destacado con un redondel. Una vez se pulse cualquiera de estos botones, su diseño se oscurecerá para simular que se ha apretado. 
- Interfaz de…
  - Opciones: mostrado en el apartado de interfaces (3.8 Menús de opciones), este se mostrará como un papel desgastado con colores marrones y manchas de patas a su alrededor. En su interior encontraremos diversas opciones de modificación del juego.
  - Elección de personaje: para la elección de personaje nos encontraremos con cuatro gatos estándar que contarán con una pequeña descripción a su lado. A modificar podremos cambiarle su gorro y su ropa para añadirle un toque más único y personal. Ver “3.6 Interfaz de elección del personaje”.
  - Jugador 1 vs Jugador 2: una vez elegidos los personajes, aparecerán en pantalla con el diseño ya mostrado en el apartado “3.9 Interfaz de los jugadores” antes de entrar al juego.
  - Puntaje y tiempo: una vez ya dentro del modo de juego, veremos, además del escenario, una interfaz de madera con detalles antiguos. Este rodea el espacio de juego para indicar el puntaje de cada jugador y el tiempo restante.  
  Para más información: “3.7 Interfaz del juego”. Los números de puntuación aparecerán en rojo, acompañados por una bala al lado de su número. Por otro lado el reloj, a los 10 segundos cambiará su tono a un color rojizo para alertar a los jugadores.
  - Logros: aparecerá una pequeña moneda en el lado inferior derecho indicando el tipo de logro y que jugador lo ha recibido.
 
- Escenarios: al entrar al modo de juego podremos elegir entre tres escenarios diferentes:
  - Desierto: encontraremos una escena desértica de tonos marrones claros, rodeada por montañas y algo de vegetación como cactus o bolas de paja.
  - Calle principal del pueblo: apreciamos una calle con diversos establecimientos y pequeños detalles como barriles y carros de carga. Sus colores se basarán, como se viene diciendo, en marrones, con algún toque en azul o verde.
  - Bar con salón de baile: veremos una barra de bar con butacas y mesas con sillas alrededor de un escenario. El establecimiento de madera se verá con marrones oscuros y rojos, además de verse desgastado y polvoriento.

### 4.2. Arte final 

El arte final del juego se basará en un dibujo 2D con sombras duras tanto en las interfaces, como el entorno y los personajes.  
Con el objetivo de crear una cohesión en todos los elementos del juegos, hemos creado una paleta base en la que nos guiaremos. Esta está basada en los siguientes colores:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Bandidos.png" width = auto height = "200">
</p>

Los cuatro primeros colores irán más acorde a las estética del antiguo oeste, con el añadido de algunos detalles en azul y verde para no quedarnos únicamente con una gama de colores monocromática. En cuanto a los personajes, estos se saldrán un poco de esta paleta, pero siguiendo la misma tonalidad para que no haya un gran contraste.  
A continuación se mostrarán los primeros bocetos de los escenarios que se han desarrollado:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/escenario1.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/escenario2.PNG" width = auto height = "300">
</p>

Una vez los escenarios se han terminado se ha hecho una alternativa en cada uno de ellos; todos estarán diseñados tanto de día como de noche y se mostrarán aquí respectivamente.
##### Calle de día y de noche
<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Fondos/calledia.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Fondos/callenoche.png" width = auto height = "300">
</p>

##### Granero de día y de noche
<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Fondos/granerodia.png" width = auto height = "300">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Fondos/graneronoche.png" width = auto height = "300">
</p>

##### Desierto de día
<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Fondos/desiertodia.png" width = auto height = "300">
</p>

Por otro lado, los jugadores tendrán cuatro gatos, a elegir uno. Todos se verán con una misma pose pero se distinguirán en su gama de colores: 
La paleta de colores aparecerá en la parte izquierda, mientras que el personaje finalizado se mostrará en la derecha.
- __Cat Love-Nat Love__: presenta colores blancos con tonos sucios y su color de ojos será azul.

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Cat_Love.png" width = auto height = "150">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes/PersonajeGatoBlanco.png" width = auto height = "190">
</p>

- __Kitty el Niño-Billy el Niño__: su pelaje será negro y gris con ojos verdes para más contraste.

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Kitty_El_Ni%C3%B1o.png" width = auto height = "150">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes/PersonajeGatoNegro.png" width = auto height = "190">
</p>

- __Paw Allison-Clay Allison__: gato típicamente conocido como “tricolor”, con una base blanca y manchas en naranja y negro. Sus ojos serán de un color similar al naranja de su color de pelo.

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Paw_Allison.png" width = auto height = "150">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes/PersonajeGatoTricolor.png" width = auto height = "190">
</p>

- __Tiger Tim-Buffalo Bill__: veremos una base naranja con rayas de la misma tonalidad por todo su diseño. Su color de ojos será en tonos verdes. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Tiger_Tim.png" width = auto height = "150">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes/PersonajeGatoNaranja.png" width = auto height = "190">
</p>

- __Sin nombre__: veremos una base gris con rayas grises amarronadas un poco más oscuras. Sus ojos serán de color azul. Además habrá un coleccionable que podrán encontrar a lo largo del juego y con el que podrás jugar. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/Paleta_Kit.png" width = auto height = "150">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/gato%20nuevo.png" width = auto height = "190">
</p>

Podemos observar los cambiso en el neuvo personaje a continuación:
<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/gato.png" width = auto height = "150">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/gatomusica.png" width = auto height = "190">
</p>

Como hemos enseñado en el apartado “3.6 Interfaz de elección de personaje”, los colores de la elección de prendas de nuestro personaje seguirán la tonalidad del juego, los Bandidosy los Residentes.

<p align="center">
<img src = "https://cdn.discordapp.com/attachments/1029696274838081580/1032004158376648744/unknown.png" width = auto height = "100">
</p>
Siguiendo este esquema de diseño se han desarollado los siguientes accesorios para poder personalizar tu personaje dentro del juego:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Gorro%20Beige.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Gorro%20Gris.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Gorro%20Marron.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Gorro%20Verde.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Panuelo%20Azul.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Panuelo%20Rojo.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Panuelo%20Verde.png" width = auto height = "60">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Accesorios%20reescalados/Panuelo%20Violeta.png" width = auto height = "60">
</p>

En cuanto a los Bandidos y los Residentes veremos un diseño similar a los ya mostrados con detalles como el puntaje y diferentes poses. Además, cada uno de ellos tendrá una variación de dos colores, para añadir más dinámica y dificultad al juego.  

- Bandidos: los enemigos aparecerán con colores más duros en su vestimenta, como los mostrados a continuación:
Siguiendo la paleta de color que se muestra a continuación se han desarrollado varios enemigos

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Bandidos.png" width = auto height = "200">
</p>

Estos personajes no han seguido una estética en el momento de desearrollarse, es decir, se han intentado hacer lo más dinámicos posibles para que el juego tenga agilidad y cambio. Utilizando la paleta mostrada con anterioridad se han creado variantes de cada uno. 

- Residentes: estos tendrán tonos tirando más al pastel:
Con los personajes buenos se ha seguido la misma rúbrica que con los enemigos. Se ha empleado la paleta que aparece a continuación y se han creado varios modelos para otorgar dinamismo. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/Paleta_Residentes.png" width = auto height = "200">
</p>

Tomando estos colores se ha variado cada personaje para conseguir una amplia gama de distinción

El objetivo de estos colores es conseguir que el jugador distinga con velocidad quiénes son los personajes que tiene que disparar y cuales son los que tiene que recoger ítem. Los colores mostrados serán ligeramente modificados para que se adapten mejor a la tonalidad del entorno y las interfaces.

Añadir que tanto los personajes jugables en su selección, como los Bandidos y los Residentes in-game, tendrán un diseño que simula una pegatina, tal y como se muestra en la siguientes imágenes:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/pegatinas.png" width = auto height = "200">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/pegatinachincheta.jpg" width = auto height = "200">
</p>

Esta idea se ha implementado en los personajes que ya se habán desarollado y que se muestran en los apartados anteriores. EL resulatdo qeu se ha obtenido se muestra a continuación: 
<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Bueno%201.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Bueno%202.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Bueno%203.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%201.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%202.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%203.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%204.png" width = auto height = "100">
</p>
Las variantes que se han creado de estos personajes son los siguientes:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Bueno%201%20variante.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Bueno%202%20variante.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Bueno%203%20variante.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%201%20variante.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%202%20variante.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%203%20variante.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Personajes%20%20reescalados/Malo%204%20variante.png" width = auto height = "100">
</p>

### 4.3. Logo

El logo del juego estará compuesto tanto por su nombre como por un dibujo que represente el significado del juego. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRLogo.png" width = auto height = "100">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/JeRLogo2.png" width = "auto" height = "100">
</p>

### 4.4. Música

En cuanto a la música, ya que la temática del juego se enfoca en el viejo oeste, se implementará una melodía ajustada a este ambiente antiguo. Dependiendo de donde se encuentre el jugador se podrá escuchar:
- Menú de inicio y selección de personajes: música de rodeo.
- Entorno de acción: se añadirá una música de persecución, donde se note un ambiente tenso en un primer instante.

### 4.5. Efectos de sonido

Por otro lado, los efectos de sonido se enfocarán en:
- Botones: cualquier botón de selección, una vez pulsado, vendrá acompañado por un maullido de gato. Se distinguen tres tipos de maullidos diferentes para tener una variedad.
- Arma: al pulsar “W” se escuchará el disparo del arma y al recoger balas con “S”, se podrá distinguir un sonido de recarga del mismo. 
- Logro: al conseguir un logro, se acompañará a la imagen en pantalla un sonido de victoria.  

Selección de personaje:
- Victoria/derrota: en el formato local sonará únicamente la victoria. En caso de ser formato en red, a cada jugador le aparecerá un sonido acorde a su logro.
- Tiempo: durante el juego se establecerá un tiempo, este sonará de forma intensa cuando queden 10 segundos de partida con el objetivo de alertar a los jugadores.

## 5. API REST
### 5.1. Navegación 
Se volverán a introducir a continuación las capuras del juego de todas las panllas usando la apliación. 
A contnuación se mostrara el diagrama del flujo de pnatallas que están incorporadas por el momento.

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/flujo%20de%20pantallas.jpeg" width = auto height = "500">
</p>

### 5.2. Diagrama de clases y API REST
Se ha creado un diagrama de las clases en la que no se ha incluido ni atributos ni métodos. Se mostrarán las relaciones entre las clases (asociación agrgación/comosición o herencia) y se diferenciarán directamnte y claramente con un código de color. Además, se incluirán qué clases y se mostrará una distribución pautada por ellas. 

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/uml" width = auto height = "300">
</p>

### 5.3. Instrucciones precisas para ejecutar la aplicación 
Es un apartado en el que se mostrará un resumen de la compilación, como se ejecuta el archivo .jar y que hace falta instalar para que pueda funcionar. 

Para la maquina que sea servidor deberá tener instalado la herramienta para Eclipe, Spting Tool Suite. Se debe ejecutar el fichero Application.java que esta dentro de la carpeta src/main/java/purfectshot
Se ejcutará como aplicacion de Spring Boot.

El servidor y los dos clientes (uno de los clientes puede ser el propio servidor) deben estar conectados en la mmisma subred, es decir, en el mismo router.

A continuacón se montrarán las imágenes para que se pueda seguir facilmente los pasos:

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/codigo%201.png" width = auto height = "200">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/codigo%202.png" width = auto height = "200">
</p>

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/codigo%203.png" width = auto height = "300">
</p>  

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/codigo%204.png" width = auto height = "100">
</p>  

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/codigo%205.png" width = auto height = "30">
</p> <p align="center">

<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/Menus/menusGDD/codigo%206.png" width = auto height = "70">
</p> 

## 6. Equipo 
Miembros del equipo
- Daniel Borrego Cruz
- Alicia Enríquez Martínez
- Andrea Gallardo Lasso
- Gema López-Pozuelo Senderos
- Purificación Méndez Peñalver

<p align="center">
<img src = "https://github.com/KriiveN/purrfect_shot/blob/main/src/assets/ImagenesGDD/logo_empresa.png" width = auto height = "100">
</p>

## 7. Referencias
- Generador de paleta de colores: https://coolors.co 
- Imagen Wii Party:
https://images-na.ssl-images-amazon.com/images/I/51J8VAE7ZQL.jpg
https://www.google.com/url?sa=i&url=http%3A%2F%2Fgettime.co.kr%2Fshop%2Fitem%2F13446090%2Fcate%2F8923%2Fpage%2F165%2F%2F%3Fdm%3D1%26l%3D20%26o%3D2%26d%3Ddesc%26q%3D%26ps%3D0%26pe%3D0&psig=AOvVaw2S_HAZz3SVFMGhdkvZSJqL&ust=1666202283227000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDg2-Kt6voCFQAAAAAdAAAAABAD 
- Imagen Pegatina 1:
https://www.freepik.es/vector-gratis/conjunto-divertido-pegatinas-estilo-comic_1319668.htm#query=pegatinas&position=40&from_view=keyword 
- Imagen Pegatina 2:
https://es.dreamstime.com/pegatina-de-dibujo-dibujos-animados-una-creativa-image150414274
- Fuente de referencia para el logo del juego:
https://www.dafont.com/es/texas-tango.font 

