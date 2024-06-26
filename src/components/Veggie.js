import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from "react-router-dom";
function Veggie() {
    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getVeggie();
    }, [])
    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4ac4bc3967304330b596349acff5304a&number=9&tahs=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            console.log(data);
            setVeggie(data.recipes)
        }

    };

    return (
        <div>

            <Wrapper>
                <h3>Veggie Corner</h3>
                <br></br>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagitation: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {
                        veggie.map((recipie) => {
                            return (
                                <SplideSlide>
                                    <Card>
                                        <Link to={'/recipie/' + recipie.id}>
                                            <p>{recipie.title}</p>
                                            <img src={recipie.image}></img>
                                            <Gradient />

                                        </Link>


                                    </Card>
                                </SplideSlide>

                            )
                        })
                    }
                </Splide>

            </Wrapper>
        </div>
    );
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem; /* Add colon here */
overflow: hidden;
position: relative;

img {
    border-radius: 2rem;
    /* Add other image styles here if needed */
    
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
p{
    min-height: 25rem;
    border-radius: 2rem; /* Add colon here */
    overflow: hidden;
    position: absolute; /* Corrected property name */
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center
}
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;

export default Veggie;