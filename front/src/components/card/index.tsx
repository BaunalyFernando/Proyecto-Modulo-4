import {IProducts} from "../../types"
import React from "react";

export const Card: React.FC<IProducts> = ({description, name, price, stock, image, categoryId}) => {
    return (
        <div>
            <h1>{description}</h1>
                <p>{name}</p>
                <p>{price}</p>
                <p>{stock}</p>
                <img src={image} alt={name} />
            <p>{categoryId}</p>
        </div>
    );
}

export default Card;