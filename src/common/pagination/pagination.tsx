import {useState} from "react";
import {Pagination, Stack} from "@mui/material";

type Pagination = {
    page:number
    pageQty: number
    setPage:(page:number)=>void
}
export const PaginationCards = (props: Pagination) => {
    const [pageQty] = useState(props.pageQty)
    return (
        <div>
            <Stack spacing={2}>
                {!!pageQty && (
                    <Pagination count={pageQty}
                        page={props.page} onChange={(_,num)=>props.setPage(num)}
                    />
                )}
            </Stack>
        </div>
    );
};