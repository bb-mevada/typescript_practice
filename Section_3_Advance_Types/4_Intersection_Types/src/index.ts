// & symbol in typescript is intersection type

type Dragabble = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Dragabble & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

console.log(textBox);