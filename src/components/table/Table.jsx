import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const TAX_RATE = 0;

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
  return `$ ${num.toFixed(2)} `;
}

function priceRow(qty, unit) {
  return qty * unit;
}


function subtotal(items) {
  return items.reduce((acc, curr) => acc + priceRow(curr.quantity, curr.price), 0);
}




export default function SpanningTable() {
  const classes = useStyles();

  const {cartItems, shippingCost} = useSelector(state => state.cart)

  const invoiceSubtotal = subtotal(cartItems);
  const invoiceTaxes = TAX_RATE;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal + shippingCost;

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
  {cartItems.length ? (
    cartItems.map((item) => (
      <TableRow key={item.id}>

        <TableCell style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }} align='center'>
          <img src={item.img} alt={item.title} className={classes.img} />
          {item.title}
        </TableCell>
        <TableCell align="right">{item.quantity}</TableCell>
        <TableCell align="right">{ccyFormat(priceRow(item.quantity, item.price))}</TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={3}>
        <p>No hay productos en el carrito</p>
      </TableCell>
    </TableRow>
  )}

          <TableRow >
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">$ {invoiceSubtotal}.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Envio</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{ccyFormat(shippingCost)}</TableCell>
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
