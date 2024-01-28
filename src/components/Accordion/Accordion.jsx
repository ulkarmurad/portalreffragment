import { useState } from "react";

export default function Accordion() {
    const [data, setData] = useState([{ title: "Accordion#1", content: "some content#1" }, { title: "Accordion#2", content: "some content#2" }, { title: "Accordion#3", content: "some content#3" }])
     return (
        <div className="container">
            {}
        </div>
     )
}