import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AiFillDelete } from 'react-icons/ai';
import { deleteItem } from '../../redux/cart/CartSlice';
import {useDispatch} from 'react-redux'
import useRedirect from '../../hooks/useRedirect';

const TAX_RATE = 0;

const useStyles = makeStyles({
  table: {
    overflowX: 'auto',
  },
  img: {
    maxWidth: '60px',
    maxHeight: '60px',
  },
  quantityCell: {
    textAlign: 'center',
    '@media (max-width: 600px)': {
      textAlign: 'left',
    },
  },
});

function ccyFormat(num) {
  if (typeof num !== 'number') {
    return '';
  }
  return `$ ${num.toFixed(2)} `;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function subtotal(items) {
  return items.reduce(
    (acc, curr) => acc + priceRow(curr.quantity, curr.price),
    0
  );
}

export default function SpanningTable() {
  const dispatch = useDispatch()
  const classes = useStyles();

  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const invoiceSubtotal = subtotal(cartItems);
  const invoiceTaxes = TAX_RATE;
  const invoiceTotal = invoiceSubtotal + shippingCost;
  console.log(shippingCost)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  useRedirect(purchaseCompleted ? '/successful' : null);

  const handlePurchaseComplete = () => {
    setPurchaseCompleted(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Descripción</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cartItems.length ? (
            cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                  }}
                  align="left"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className={classes.img}
                  />
                  {item.title}
                </TableCell>
                <TableCell
                  className={classes.quantityCell}
                  align={isMobile ? 'right' : 'center'}
                >
                  {item.quantity}
                </TableCell>
                <TableCell align="right">
                  {ccyFormat(priceRow(item.quantity, item.price))}
                </TableCell>

                <TableCell align="center">
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <AiFillDelete  onClick={() => dispatch(deleteItem(item))}
                      style={{ color: 'crimson', fontSize: '22px', cursor:'pointer' }}
                    />
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3}>
                <p>No hay productos en el carrito</p>
              </TableCell>
            </TableRow>
          )}

          <TableRow>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">$ {invoiceSubtotal}.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Envío</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{ccyFormat(shippingCost)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {cartItems.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            fontSize: '22px',
            background: '#26725bd4',
            color: 'white',
          }}
        >
          <button onClick={handlePurchaseComplete}>Finalizar compra</button>
        </div>
      )}

      {purchaseCompleted && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            fontSize: '22px',
            background: '#206B54',
            color: 'white',
          }}
        >
          <p>Su compra ha sido realizada 🥳</p>
        </div>
      )}
    </TableContainer>
  );
}
