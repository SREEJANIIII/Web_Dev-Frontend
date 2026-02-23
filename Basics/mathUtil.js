const PI=3.14

function getCircumference(radius){
    return 2*PI*radius
}

function getArea(radius){
    return PI*radius*radius
}

function getVolume(radius){
    return (4/3)*PI*radius*radius*radius
}

export {getCircumference,getArea,getVolume}