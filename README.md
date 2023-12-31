<p align="center">
  <a href="https://github.com/DAWN-LV/aqm-backend" target="blank"><img src="https://github.com/DAWN-LV/aqm-backend/blob/master/src/common/images/Logo.png?raw=true" width="200" alt="AQM Logo" /></a>
</p>

# Co2 level monitoring in university premises

## 1. Sensor Display
Display of all sensors and graphical output of all data

## 2. Sensor Management
Manage sensor functionality, adjust sensor to required parameters, delete sensors that aren`t needed or not working sensors.

## 3. Communication with Back-end
Receiving data from the back-end using Api, data processing. Sending data to the Back-end about adding/removing a sensor. Changing the sensor configuration.

## 4. Receiving Data from the Back-end

Retrieving API data.

```ts
{
    "ip": "192.168.0.1",
    "mac": "00:1A:2B:3C:4D:5E",
    "name": "test_sensor",
    "threshold": 800,
    "status": "working" | "error",
    "setup_timing": 1313131313213,
    "calculated_data": [
        {"value": 111, "epoch": 111111111},
        {"value": 222, "epoch": 222222222},
        {"value": 333, "epoch": 333333333},
        {"value": 444, "epoch": 444444444},
        {"value": 555, "epoch": 555555555}
    ],
    "data": [
        {"value": 666, "epoch": 666666666},
        {"value": 777, "epoch": 777777777},
        {"value": 888, "epoch": 888888888},
        {"value": 999, "epoch": 999999999},
        {"value": 123, "epoch": 123456789},
        {"value": 456, "epoch": 987654321}
    ]
}
```
* ip: Sensor IP address;
* mac: Sensor MAC address;
* name: Sensor name;
* threshold: The set normal value of CO2 in the room;
* status: Sensor operating status;
* calculated_data: Expected sensor performance;
* data: Current data from the sensor;
* value: CO2 value from 0 to 2000;
* epoch: Update frequency;

## 5. Adding a New Sensor

The ability to add a new sensor. If you click on the add button, a modal window will open where you need to enter the sensor's ip address and name. After the request will be sent to Back-end about the status of the sensor.

## Instalation 
```bash
git clone https://github.com/DAWN-LV/aqm-frontend
```

## Install node modules

```bash
npm install
```

## Run project

```bash
npm run dev
```

