import {useGetCharactersQuery} from "../../services/baseApi.ts";
import CharacterCard from "../characterCard/characterCard.tsx";
import s from './Characters.module.scss'
import {PaginationCards} from "../../common/pagination/pagination.tsx";
import {TextField} from "@mui/material";
import {useState} from "react";


const Characters = () => {
    const [page,setPage]=useState(1)
    const [name,setName]=useState('')
    const setPageCB = (page:number)=>{
        setPage(page)
    }

    const {data, isLoading} = useGetCharactersQuery({page,name})
    if (isLoading) {
        return <span>Loading...</span>
    }
    if(data){
    return ( <div className={s.wrap}>
            <TextField sx={{maxWidth:1130}} fullWidth label={'query'} value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
            {data?.results.map((card) => (
                <CharacterCard key={card.id} data={card}/>
            ))}
            <PaginationCards  page={page} pageQty={data.info.pages} setPage={setPageCB}/>
        </div>)}
};

export default Characters;