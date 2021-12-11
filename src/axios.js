import axios from "axios" //Takes the functionality from the axios module.

const instance = axios.create({ //Sets up axios
    baseURL: "http://localhost:9000", //If you ever deploy this to heroku, right at the end of the video at 4:01 he explains they showed you what to do in a previous video, need to replace this the video is possibly https://www.youtube.com/watch?v=g8yGxDMyGiE 
});

export default instance