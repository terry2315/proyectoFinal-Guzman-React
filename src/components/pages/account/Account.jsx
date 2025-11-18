import { useContext, useState } from 'react'
import styles from './Account.module.css'
import { CartContext } from '../../../context/CartProvider'
import { serverTimestamp } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { dc } from '../../../service/firebase'
import { Link } from 'react-router-dom';
import { EmptyCart } from '../../pages/shopping-cart/empty-cart/EmptyCart'

export const Account = () => {
  const { cart, payTotal, deleteItem } = useContext(CartContext);
  const [orderId, serOrderId] = useState();
  const [errors, setErrors] = useState({});
  const [customer, setCustumer] = useState({
    name: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    emailConfirn: '',
    password: '',
  });

  const sendData = (e) => {
    e.preventDefault();

    const isValid = validateData();

    if (!isValid) {
      alert("Debes llenar el formulario correctamente");
      return;
    }

    finishPurchase();
  };

  const handleValores = (e) => {
    setCustumer({ ...customer, [e.target.name]: e.target.value })
  }

  const finishPurchase = () => {
    let order = {
      client: customer,
      shopping: cart,
      total: payTotal(),
      date: serverTimestamp()
    };

    const sales = collection(dc, 'orders')
    addDoc(sales, order)
      .then((response) => {
        serOrderId(response.id)
        deleteItem()
      })
      .catch((error) => console.log(error))
  }


  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
  }


  const validateData = () => {
    let newErrors = {};

    if (!expressions.name.test(customer.name)) {
      newErrors.name = 'El npmbre tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.';
    }

    if (!expressions.name.test(customer.lastName)) {
      newErrors.name = 'El nombre tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.';
    }

    if (!expressions.phone.test(customer.phone)) {
      newErrors.phone = 'El teléfono debe tener entre 7 y 14 números';
    }

    if (!expressions.email.test(customer.email)) {
      newErrors.email = 'El correo no es válido';
    }

    if (customer.email !== customer.emailConfirn) {
      newErrors.emailConfirn = 'Los correos deben coincidir';
    }

    if (!expressions.password.test(customer.password)) {
      newErrors.password = 'La contraseña debe tener entre 4 y 12 caracteres';
    }

    if (!customer.address || customer.address.trim().length < 8) {
      newErrors.address = 'La dirección es demasiado corta. Debe contener almenos ocho caracteres';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };





  if (!cart.length && !orderId) {
    return <EmptyCart />
  }

  return (

    <div className={styles.content__form}>
      {
        orderId
          ?
          <div>
            <h2>Realizaste correctamente tu compra</h2>
            <h4>El codigo de seguimiento es: {orderId}</h4>
            <Link to='/'>Volver a home</Link>
          </div>
          :
          <div>

            <h2>Registro de usuario</h2>

            <form className={styles.form} onSubmit={sendData}>
              <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  placeholder='Nombre'
                  value={customer.name}
                  name='name'
                  id='name'
                  onChange={handleValores}

                />
                {errors.name && <p>{errors.name}</p>}

                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  placeholder='Apellido'
                  value={customer.lastName}
                  name='lastName'
                  id='lastName'
                  onChange={handleValores}

                />
                {errors.lastName && <p>{errors.lastName}</p>}
              </div>

              <div>

                <label htmlFor="phone">Telefono</label>
                <input
                  type="number"
                  placeholder='Telefono'
                  value={customer.phone}
                  name='phone'
                  id='phone'
                  onChange={handleValores}

                />
                {errors.phone && <p>{errors.phone}</p>}

                <label htmlFor="password">Contrasena</label>
                <input
                  type="password"
                  placeholder='Contrasena'
                  value={customer.password}
                  name='password'
                  id='password'
                  onChange={handleValores}

                />
                {errors.password && <p>{errors.password}</p>}
              </div>


              <div>
                <label htmlFor="email">Correo</label>
                <input
                  type="text"
                  placeholder='Email'
                  value={customer.email}
                  name='email'
                  id='email'
                  onChange={handleValores}

                />
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="emailConfirn">Conrfimar correo</label>
                <input
                  type="text"
                  placeholder='Confirma tu email'
                  value={customer.emailConfirn}
                  name='emailConfirn'
                  id='emailConfin'
                  onChange={handleValores}

                />
                {errors.emailConfirn && <p>{errors.emailConfirn}</p>}
              </div>

              <div>
                <label htmlFor="address">Direccion</label>
                <input
                  type="text"
                  placeholder='Direccion'
                  value={customer.address}
                  name='address'
                  id='address'
                  onChange={handleValores}

                />
                {errors.address && <p>{errors.address}</p>}
              </div>

              <button type='submit'>Completar compra</button>
            </form>
          </div>
      }
    </div>


  )
}
