import React from "react";
import "./Definitions.css";

const definitions = ({ word, meanings, category, lightMode }) => {
    return (
        <div className="meanings">
            {/* audio---------------------------- */}
            {meanings[0] && word && category === "en" && (
                <audio
                    style={{ backgroundColor: "#fff", borderRadius: 10, border:"none" }}
                    src={
                        meanings[0].phonetics[0] &&
                        meanings[0].phonetics[0].audio
                    }
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {/* audio---------------------------- */}
            {word === "" ? (
                <span className="subtitle">
                    Start by typing a word in search
                </span>
            ) : (
                meanings.map((mean) =>
                    mean.meanings.map((item) =>
                        item.definitions.map((def) => (
                            <div
                                className="singleMeaning"
                                style={{
                                    backgroundColor:lightMode?"#3b5360": "#fff",
                                    color:lightMode?"#fff": "black",
                                }}
                            >
                                <b style={{fontSize: 20}}>{def.definition}</b>
                                <hr
                                    style={{
                                        backgroundColor: "black",
                                        width: "100%",
                                    }}
                                />
                                {def.example && (
                                    <span>
                                        <b>Example: </b>
                                        <i>{def.example}</i>
                                    </span>
                                )}
                                {def.synonyms && (
                                    <span>
                                        <b>Synonymns: </b>
                                        {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default definitions;
