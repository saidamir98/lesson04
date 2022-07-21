function MyFistFunction() {
    const obj = {
        text1: "Hello World",
        num: 10,
        asd: 10.3,
        falg: true,
    }
    
    console.log(obj);

    let text = "It's let";

    if (text == "It's var") {
        text = text + " from JS";
    } else {
        text = text + " from Saidamir";
    }

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log(text);
    document.getElementById("myspan").innerText = text;
}

setTimeout(() => {
    MyFistFunction();
}, "2000")

