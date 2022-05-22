import { Table, TableCell, TableBody,TableHead, TableRow } from "@mui/material";

const items = [
    'Business','Entertainment','Health','Science','Sports','Technology'
];


const Categories = ({currentCategory,setCurrentCategory,setText, flag, setFlag})=> {

    const handleClick = (item)=>{
        setCurrentCategory(item.toLowerCase());
        console.log(currentCategory);
        setText("");
        setFlag(flag+1);
    }

    return (
        <Table style={{cursor:'pointer'}}>
                <TableHead>
                    {currentCategory==='general' ? <TableRow>
                        <TableCell style={{backgroundColor:'#5793f2', color:'white'}} onClick={()=>setCurrentCategory('general')}>
                            General
                        </TableCell>
                    </TableRow> : <TableRow>
                        <TableCell onClick={()=>{setCurrentCategory('general'); setText(""); setFlag(flag+1)}}>
                            General
                        </TableCell>
                    </TableRow> }
                    
                </TableHead>
                <TableBody>
                    {
                        items.map((item) => (
                            item.toLowerCase()===currentCategory ? 
                            <TableRow style={{backgroundColor:'#5793f2', color:'white'}}>
                                <TableCell style={{color:'white'}} onClick={()=> handleClick(item)}>
                                    {item}
                                </TableCell>
                            </TableRow> :
                            <TableRow>
                            <TableCell onClick={()=> handleClick(item)}>
                                {item}
                            </TableCell>
                        </TableRow>

                        ))
                    }

                </TableBody>
            </Table>
    )
}

export default Categories;