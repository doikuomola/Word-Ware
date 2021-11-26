import {
    createTheme,
    MenuItem,
    TextField,
    ThemeProvider,
} from "@material-ui/core";
import React from "react";
import categories from "../../data/Category";
import "./Header.css";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff",
            },
            type: lightMode ? "light" : "dark",
        },
    });
    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };

    return (
        <div className="header">
            <span className="title">{word ? word : "Word ware"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search a Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {categories.map((category) => (
                            <MenuItem
                                key={category.label}
                                value={category.label}
                            >
                                {category.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
