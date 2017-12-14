# Calculo de Sistema Fotovoltaico

Aplicación Web para realizar el dimensionamiento de un sistema solar fotovoltaico.

## Comenzar
Ingresar a http://rspirolazzi.com:3001/index.html

## PARAMETROS GEOGRAFICOS Y DE RADIACIÓN SOLAR
Para comenzar con el dimensionamiento, es necesario registrar la zona donde se realizara la instalación.
### Buscar la zona
![alt text](http://rspirolazzi.com:3001/previews/buscar_zona.jpg "Ejemplo: Buenos Aires")
Al ingresar la zona aparecera un listado para seleccionar. En algún caso podría haber mas de un resultado.
![alt text](http://rspirolazzi.com:3001/previews/lista_de_angulos.jpg "")

### Seleccionar la zona de radiación solar
En el siguiente cuadro se debe seleccionar la mejor radiación para la instalación que deseamos hacer
![alt text](http://rspirolazzi.com:3001/previews/seleccionar_angulo.jpg "El angulo recomendable es 49°")
Esta acción habilitara el cuadro de ingreso de consumos.

## PARAMETROS DE CONSUMO Y ENERGÍA
Desde aquí se realiza la carga de consumo del hogar para dimensionar. 
Para realizar la carga, se debe completar el cuadro:
![alt text](http://rspirolazzi.com:3001/previews/carga_de_consumo.jpg "Carga de Consumo") 
1. **Dispositivo (Texto)**: Nombre del dispositivo. Ejemplo: TV 20".
2. **Cant (Numerico)**: Cantidad del mismo dispositivo: 2 televisores.
3. **[W] (Numerico)**: Potencia en Watts
4. **[Wt] (Numerico)**: Total de la potencia. Se multiplica la cantidad por la potencia. Se auto calcula
5. **[Wpt] (Numerico)**: Total de la potencia. Se multiplica la cantidad por la potencia. Se auto calcula. Por ahora es igual a [Wt]
6. **hs/día (Numerico)**:Horas del día, en invierno, que se usara este dispositivo.
7. **Wh/día (Numerico)**:Total de horas, en invierno. Se multiplica la cantidad por las horas. Se auto calcula.
8. **hs/día (Numerico)**:Horas del día, en verano, que se usara este dispositivo.
9. **Wh/día (Numerico)**:Total de horas, en verano. Se multiplica la cantidad por las horas. Se auto calcula.

Dar click al botón **mas**.
![alt text](http://rspirolazzi.com:3001/previews/agregar_consumo.jpg "Ejemplo de consumo") 

Al ir agregando consumos se iran totalizando:
1. Potencia Total
2. Potencia Pico Total
3. Consumo total promedio Invierno
4. Consumo total promedio Verano
5. Consumo máximo del año
6. Energía a Generar
7. Energía extra a generar
8. Energia total a generar por día

Al ingresar uno o mas paneles, se habilitara la siguiente opción.

## PANELES SOLARES SELECCIONADOS PARA LA INSTALACIÓN
Desde aquí se realiza la de los paneles solares
Para realizar la carga, se debe completar el cuadro:
![alt text](http://rspirolazzi.com:3001/previews/carga_de_paneles.jpg "Carga de Panel") 

1. **Potencia del Panel (Numerico)**: Potencia del Panel Solar. Ej: 80
2. **Voltaje del panel (Numerico)**: Voltage. Ej: 12
3. **Corriente de Corto Circuito (Numerico)**:Ejemplo: 5.01
4. **Corriente Nominal (Numerico)**:Ejemplo: 4.60
5. **Modelo (Texto)**:Nombre del panel solar
6. **Costo (Numerico)**:Se se ingresa el costo, se calculara con la cantidad
7. **Cantidad (Numerico)**: cantidad de paneles del mismo modelo necesarios para la instalacion
8. **Total (Numerico)**: Se calcula multiplicando el costo con la cantidad
9. **Temperatura (Numerico)**: Por default es 25°

Dar click al botón **mas**.
![alt text](http://rspirolazzi.com:3001/previews/agregar_panel.jpg "Ejemplo de panel solar") 

Al ir agregando paneles se iran totalizando:
1. Cantidad Total 
2. Costo de Inversión

Al ingresar uno o mas paneles, se habilitara la siguiente opción.