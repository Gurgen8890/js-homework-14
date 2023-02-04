function makeCars(
    name,
    engineType,
    transmisionType,
    fuel,
    capacity,
    gearCount, 
    driveUnitParams, 
    doorCountParams
    ) {
    return makeModel(
        name,
        engineType,
        transmisionType,
        fuel,
        capacity,
        gearCount, 
        driveUnitParams, 
        doorCountParams
        );
}

function makeModel(
    name,
    engineType,
    transmisionType,
    fuel,
    capacity,
    gearCount, 
    driveUnitParams, 
    doorCountParams) {
    return {
        name,
        engine: makeEngine(fuel,capacity,engineType),
        transmisson: makeTransmisson(transmisionType,gearCount),
        driveUnit: makeDriveUnit(driveUnitParams),
        doorcount: makeDoorCount(doorCountParams)
    }
}

function makeEngine(fuel,capacity,engineType){
    return {
        fuel,
        capacity,
        engineType
    }
}

function  makeTransmisson(transmisionType,gearCount){
    return {
        transmisionType,
        gearCount
    }
}

function makeDriveUnit(driveUnitParams){
    return driveUnitParams
}

function makeDoorCount(doorCountParams){
    return doorCountParams
}

let cars = makeCars(
'bmw', 
['ecotec', 'turbo'], 
['automat', 'manual'],
['gas', 'diesel'], 
[2, 3, 4.3], 
[5, 6],
["AWD", 'RWD', 'FWD'],
[5,4,3]
)

let car2 = {...cars}

car2.name = 'mazda'

console.log(cars)
console.log(car2)


