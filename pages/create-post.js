import { useEffect, useState } from "react"
import autoComplete from "@tarekraafat/autocomplete.js"

export async function getServerSideProps() {
    const res = await fetch('https://forum-backend.deta.dev/song')
    const songs = await res.json()
    return {
        props: { songs }
    }
}

export default function Posting({ songs }) {

    const [song,setSong] = useState('')

    useEffect(() => {
        const autoCompleteJS = new autoComplete({
            selector: "#autoComplete",
            placeHolder: "Search for songs...",
            data: {
                src: songs.map(({ song }) => song),
                cache: true,
            },
            resultsList: {
                element: (list, data) => {
                    if (!data.results.length) {
                        // Create "No Results" message element
                        const message = document.createElement("div");
                        // Add class to the created element
                        message.setAttribute("class", "no_result");
                        // Add message text content
                        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                        // Append message element to the results list
                        list.prepend(message);
                    }
                },
                noResults: true,
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: (event) => {
                        const selection = event.detail.selection.value;
                        autoCompleteJS.input.value = selection;
                    }
                }
            }
        });

    }, [songs])


    return (
        <div className="w3-padding w3-center">
            
            <input id="autoComplete" onBlur={e=>{setSong(e.target.value)}} type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoCapitalize="off" />

            <br/>

            <button onClick={e=>{alert(song)}}>onClick</button>

        </div>
    )

}