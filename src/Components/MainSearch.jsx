/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction, GET_SONGS } from "../Redux/Actions";

const MainSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const songsFromRedux = useSelector((state) => state.song.result);

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(getSongsAction(query))
    }

    useEffect(() => {
        dispatch({
            type: GET_SONGS,
            payload: [],
        })  
    }, []);

}

export default MainSearch