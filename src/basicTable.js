import React from "react";
import {styled} from "@mui/material/styles";
import {TableBody, TableRow} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const BasicTable = ({type, activity}) => {
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
            fontWeight: 700,
            width: 350,
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    return (
        <TableBody>
            <StyledTableRow>
                <StyledTableCell>{activity}</StyledTableCell>
                <StyledTableCell align='center'>{type}</StyledTableCell>
                <StyledTableCell align='right'>Just now</StyledTableCell>
            </StyledTableRow>
        </TableBody>
    );
}

export default BasicTable