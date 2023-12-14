// imports
import image from '../../Assets/portrait.jpg';

export default function AboutMe() {
    return (
        <div>
            <img id="me-image" src={image} alt="selfie" />
            <section id="about-me" class="headers">About Me</section>
            <p id="me"> Hi, my name is Richard Au. I was born and raised in Colorado. I first started coding as a hobby in 2014. While experiencing multiple profession throughout my college education, ultimately from my studies it lead me back to coding as the profession that I wanted to make a career out of. Being able to problem solve issues and to be able to see the results take effect is what made me pursue coding.</p>
        </div>
    );
}