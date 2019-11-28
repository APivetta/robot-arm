# robot-arm
Brazo Robot impreso en 3D desarrollado para PPS 2019 - Universidad CAECE

Proyecto basado en el siguiente artículo de [Instructables](https://www.instructables.com/id/3D-Printed-Robot-Arm/)

## Índice
- [robot-arm](#robot-arm)
  - [Índice](#%c3%8dndice)
  - [Armado](#armado)
    - [Lista de materiales](#lista-de-materiales)
    - [Guía de ensamble](#gu%c3%ada-de-ensamble)
  - [Software](#software)
    - [Firmware](#firmware)
    - [Servidor Node.js](#servidor-nodejs)

## Armado

### Lista de materiales
 - 1x NodeMCU (Placa WiFi basada en Esp8266).
 - 1x PCA9685 (Controladora de Servos 16 Canales).
 - 1x Regulador de voltaje step down LM2596.
 - 1x Fuente de alimentación superior a 5V y 2A de corriente.
 - 3x Mini Servo Tower Pro Sg90.
 - 4x Servo S3003.
 - 1x Protoboard.
 - Cables conectores para protoboard.
 - Tornillos y tuercas M3 y M2 para fijar los servos.
 - [Partes impresas](modelos).

### Guía de ensamble
  - Ensamblar las piezas impresas tomando como referencia la guía de [Instructables](https://www.instructables.com/id/3D-Printed-Robot-Arm/)
  - Cablear la electronica siguiendo el siguiente diagrama:


## Software
Para controlar el brazo robot se utiliza el firmware [Firmata](https://github.com/firmata/arduino) en la placa NodeMCU y un servidor [Node.js](https://nodejs.org/en/) utilizando la librería de robótica [johnny-five](http://johnny-five.io/).

### Firmware
Para instalar el firmware Firmata en la placa NodeMCU seguir los siguientes pasos:
- Instalar las librerias de esp8266 para Arduino IDE siguiendo los pasos especificados en [Installing with Boards Manager](https://github.com/esp8266/Arduino#installing-with-boards-manager).
- Instalar las librerias de Firmata para Arduino IDE siguiendo los pasos especificados en [Updating Firmata in the Arduino IDE - Arduino 1.6.4 and higher](https://github.com/firmata/arduino#updating-firmata-in-the-arduino-ide---arduino-164-and-higher).
- Abrir un nuevo proyecto de StandardFirmataWifi desde ``` Archivo > Ejemplos > Firmata > StandardFirmataWifi  ```
- En el Archivo ```wifiConfig.h``` completar con los datos de la red wifi, IP del servidor Node.js y parámetros adicionales según sean necesario y guardar las modificaciones.

```
// Tipicamente los parametros a compretar son:

char ssid[] = "your_network_name";
char wpa_passphrase[] = "your_wpa_passphrase";

#define SERVER_IP 10, 0, 0, 15 // La IP donde estará escuchando el servidor Node.js
#define SERVER_PORT 3030 // El puerto donde estará escuchando el servidor Node.js
```

- Seleccionar la placa NodeMCU en `Herramientas > Placa > NodeMCU 1.0 (ESP 12-E Module)`
- Conectar la placa NodeMCU por USB y quemar el firmware en la misma.

### Servidor Node.js
Para correr el servidor Node.js que controla el brazo clonarse este repositorio y seguir los siguientes pasos: