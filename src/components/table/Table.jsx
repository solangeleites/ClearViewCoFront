import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 1000;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit, img) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price, img };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Anteojo de sol', 1, 13500, 'https://via.placeholder.com/250'),
  createRow('Anteojo de sol ', 2, 7890, 'https://via.placeholder.com/250'),
  createRow('Gotitas',2 , 3235, 'https://via.placeholder.com/250'),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Descripción</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell style={{display:'flex', flexDirection:'row', gap:'20px', alignItems:'center'}} align='center'> 
                <img src={row.img} alt={row.desc} className={classes.img} />
                {row.desc}
              </TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow >
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Envio</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const TAX_RATE = 1000;

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
//   img: {
//     maxWidth: '50px',
//     maxHeight: '50px',
//   }
// });

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit, img) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price, img };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow('Anteojo de sol', 1, 13500),
//   createRow('Anteojo de sol ', 2, 7890),
//   createRow('Gotitas',2 , 3235),

// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

// export default function SpanningTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="spanning table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Descripción</TableCell>
//             <TableCell align="right">Cantidad</TableCell>
//             <TableCell align="right">Precio</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.desc}>
//               <TableCell>{row.desc}</TableCell>
//               <TableCell align="right">{row.qty}</TableCell>
//               <TableCell align="right">{ccyFormat(row.price)}</TableCell>
//             </TableRow>
//           ))}

//           <TableRow style={{marginTop: '50px'}}>
//             <TableCell colSpan={2}>Subtotal</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Envio</TableCell>
//             <TableCell align="right"></TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

