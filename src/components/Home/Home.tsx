import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/action';
import Card from '../Card/Card';

export default function Home(){
    const dispatch = useDispatch();
    const allProducts = useSelector( (state) => state.products)
    console.log(allProducts)
    useEffect(() => {
        dispatch(getProducts())
    })

    console.log(allProducts)
    return (
        <div>
        </div>
    );
};