import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import CustomerActions from '../components/CustomerActions'

const isRequired = value => (!value && 'Este campo es requerido')

const validate = values => {
  const error = {}

  if (!values.name) {
    error.name = 'El campo nombre es requerido.'
  }

  if (!values.dni) {
    error.dni = 'El campo dni es requerido.'
  }

  return error
}

const MiField = ({input, meta, type, label, name}) => (
  <div>
    <label htmlFor={name}>
      {label}
    </label>
    <input {...input} type={!type ? 'text' : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
)

const isNumber = value => (
  isNaN(Number(value)) && 'El campo debe ser un número'
)

const CustomerEdit = ({name, dni, age, handleSubmit, submmiting}) => {
  return (
    <div>
      <h2>Edición del Cliente</h2>
      <h3>Nombre: {name}/ DNI: {dni}/ Edad: {age}</h3>
      <form onSubmit={handleSubmit}>
        <Field
          name='name'
          component={MiField}
          placeholder='Nombe'
          label={"Nombre"}></Field>
        <Field
          name='dni'
          component={MiField}
          placeholder='dni'
          label={"dni"}></Field>
        <Field
          validate={[isNumber, isRequired]}
          name='age'
          component={MiField}
          placeholder='edad'
          label={"edad"}></Field>
          <CustomerActions>
              <button type="submit" disabled={submmiting}>Enviar Formulario</button>
          </CustomerActions>
      </form>
    </div>
  )
}

CustomerEdit.propTypes = {
  dni: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string
}

const CustomerEditForm = reduxForm({
  form: 'CustomerEdit',
validate})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
