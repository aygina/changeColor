function changeColor(selectObject) {
    let value = selectObject.value;

    if (value == "day") {
        document.body.style.backgroundColor = "beige";
    } else if (value == "night") {
        document.body.style.backgroundColor = "dimgrey";
    } else if (value == "magic") {
        document.body.style.backgroundColor = "pink";
    } else
        document.body.style.backgroundColor = "white";
}