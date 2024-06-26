import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
function Cuisine() {
    const params = useParams();
    const [cuisine, setCuisine] = useState([]);
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4ac4bc3967304330b596349acff5304a&number=9&cuisine=${name}`);
        const recipes = await data.json();
        console.log(recipes);
        setCuisine(recipes.results);
    };
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])
    return (
            <Grid
                 animate={{ opacity: 1 }}
                 initial={{ opacity: 0 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
            >

                {cuisine && cuisine.map((item) => (
                    <Card key={item.id}>
                        <Link to={"/recipie/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>

                    </Card>
                ))}
            </Grid>


    )
}
const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
`
const Card = styled.div`
    img{
        widht:100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;
export default Cuisine;