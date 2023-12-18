import axios from "axios";
import languageList from "./languageList";

const translateBtn = document.getElementsByClassName("translate-btn")[0];
const inputText = document.getElementsByClassName("input-area-text")[0];
const translationTextBox = document.getElementsByClassName("translation-area-text")[0];

window.addEventListener("DOMContentLoaded", () => {
    translateBtn.addEventListener("click", async () => {
        const targetLanguage = document.getElementsByClassName("selected-language")[0].value;
        const text = inputText.innerHTML.toString();

        if(text.length > 0){
            try {
                const response = await axios.post("https://text-translator2.p.rapidapi.com/translate",
                    {
                        source_language: "en",
                        target_language: languageList[targetLanguage],
                        text: text,
                    },
                    {
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                            'X-RapidAPI-Key': 'baed1a31c3msha94e3e9111d29c0p12fe9bjsnae0b3cd559cc',
                            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                        }
                    }
                );
                translationTextBox.innerHTML = response.data.data.translatedText;
            } catch (error) {
                console.error(error);
            }

        }

    });

});