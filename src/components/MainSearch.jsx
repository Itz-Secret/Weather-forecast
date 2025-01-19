import Lottie from "lottie-react";
import Haze from "./Haze.json";
import Clouds from "./Clouds.json";
import Drizzle from "./Drizzle.json";
import Rain from "./Rain.json";
import Clear from "./Sunny.json";
import Thunder from "./Thunder.json";
import Default from "./Default.json";

export default function MainSearch(props) {
    const k=(props.discription);
    // console.log(k);
    


    // Function to get the appropriate animation
    function getAnimationData(description) {
        
        switch (description?.toLowerCase()) {
            case "haze":
                console.log("hae")
                return Haze;
            case "clouds":
                return Clouds;
            case "drizzle":
                return Drizzle;
            case "rain":
                return Rain;
            case "clear":
                return Clear;
            case "thunderstorm":
                return Thunder;
            default:
                return Default; // Fallback animation
        }
    }

    return (
        <div className="weather-card">
            <h2 className="one">Weather in {props.city}</h2>
            <h1 className="two">{props.temp}°C</h1>
            <h2 className="three">Description: {props.discription}</h2>
            <Lottie
                animationData={getAnimationData(k)} // Pass the result of the function call
                style={{ height: 300, width: 300 }}
            />
        </div>
    );
}
