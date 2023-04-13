import CTA from "../CTA";
import Fleet from "../Fleet";
import LandingSlider from "../LandingSlider";
import LogoSlider from "../LogoSlider";

function Home(props){
    return (
        <div>
            {/* Home */}
            <CTA />
            <Fleet />
            <LandingSlider />
            <LogoSlider />
        </div>
    );
}

export default Home
