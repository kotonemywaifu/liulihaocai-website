import { useState, useEffect } from "react"

export default function Typewriter({ texts = ["Lorem Ipsum", "dolor sit amet"], cursor = "|", cursor_always_blink = false,
    typespeed = 100, idletime = 1000, decreasetime = 50 }) {

    const [text, setText] = useState("");
    const [cursorClass, setCursorClass] = useState("idle");
    const [stage, setStage] = useState({
        idx: 0,
        time: new Date().getTime() - 1000,
        type: 0,
        input: "input"
    });

    useEffect(() => {
        var updateTypewriter = () => {
            var s = stage;
            var t = new Date().getTime();
            var delay = s.input == "input" ? typespeed : (s.input == "decrease" ? decreasetime : idletime);
            if (t - s.time < delay) {
                return;
            }
            if (s.input == "input") {
                s.type++
                if (s.type >= texts[s.idx].length) {
                    s.input = "idle";
                    setCursorClass("idle");
                }
            } else if (s.input == "decrease") {
                s.type--;
                if (s.type <= 0) {
                    s.input = "input";
                    s.idx = (s.idx + 1) % texts.length;
                }
            } else {
                setCursorClass("typing");
                s.input = "decrease";
            }
            setText(texts[s.idx].substring(0, s.type));
            s.time = t;
            setStage(s);
        }
        var timeout = setInterval(updateTypewriter, 10);
        return () => {
            clearInterval(timeout);
        }
    })

    return (
        <span>{text}<span className={cursorClass == "idle" || cursor_always_blink ? "tw_cursor_idle" : "tw_cursor_typing"}>{cursor}</span></span>
    )
}