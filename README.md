# Taller 2 - Tópicos Avanzados en Ingeniería de Software
Prueba automatizada en Playwright aplicando los patrones de diseños DDD (Data-Driven-Design) y POM (Pages-Objects-Models)

# Flujo completo Taller 2

# Página: https://play.pokemonshowdown.com/


# Paso 1:

![image](https://github.com/user-attachments/assets/9b75ef64-8948-4d51-88cd-cdd439dcb9e5)


Seleccionar el botón Teambuilder


# Paso 2:

![image](https://github.com/user-attachments/assets/eca5805d-a151-4fff-9651-0252f3f4c03f)


Dar click a la opción (add format folder)


# Paso 3:

![image](https://github.com/user-attachments/assets/d883d532-3ecd-48af-a39c-f6e93578a400)


Dar click a la opción Ubers


# Paso 4:

![image](https://github.com/user-attachments/assets/e5935de0-7907-4c89-b2aa-2d7474acfd1c)


Darle al click al botón New Gen 9 Ubers Team


# Paso 5:

![image](https://github.com/user-attachments/assets/c008794e-855b-4b3e-87a9-7914b0b395ea)


Dar click en el botón add Pokemon

# Paso 6:

![image](https://github.com/user-attachments/assets/3b4bbf7b-6ced-4b9f-ae31-f189d8373b05)

Si todos los pokemones cumplen con el reglamentode de Ubers, nos aparecerá por pantalla el siguiente mensaje: Your team is valid for Gen 9 Ubers.


# Evidencias del ejercicio

## Pokemon 1

![Ogerpon-Hearthflame](https://github.com/user-attachments/assets/fb2579b7-8c87-44c4-b2ba-3d19c7077271)

## Pokemon 2

![Flutter Mane](https://github.com/user-attachments/assets/997f76ff-db71-4ce8-bdfe-448b4ba16aca)

## Pokemon 3

![Dragonite](https://github.com/user-attachments/assets/c68cce0d-bf13-43ee-a558-7c4ee6a9c5d4)

## Pokemon 4

![Ursaluna-Bloodmoon](https://github.com/user-attachments/assets/5fd317b1-2bc8-4be1-af89-f69e6d4a6572)

## Pokemon 5

![Urshifu-Rapid-Strike](https://github.com/user-attachments/assets/70f1b145-62f8-4365-9a67-a04794492780)


## Pokemon 6

![Iron Bundle](https://github.com/user-attachments/assets/a8d72813-1e82-42e3-8757-e2c8cfa421b4)


## Equipo completo

![team](https://github.com/user-attachments/assets/f5ccc8b6-4871-452d-95ed-9534daabc885)


## Assertions 

En esta prueba automatizada hay dos assertions:

1) El primer assertion es cuando le demos los valores a los stats al final se debe de quedar en 0, es decir, los 508 puntos de EVS deben de estar distribuidos en las diferentes stats.

2) El segundo assertion es una vez que tengamos los 6 pokemones en nuestro equipo, le damos click en el botón validate y nos deberá de mostrar un mensaje que diga: Your team is valid for Gen 9 Ubers.

## Observaciones importantes

1) Es fundamental que cuando se vaya agregar un Pokemon se digite el nombre del Pokemon hasta que aparezca y después seleccionarlo
   
2) Es importante que se digite los valores de los EVS de cada pokemon manualmente
   
3) Tener en cuenta que la sumatoria de los puntos de EVS debe de ser igual a 508














