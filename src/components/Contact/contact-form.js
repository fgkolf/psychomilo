import React, { useState } from 'react'
import styles from './contact-form.module.css'
import ResultNotification from './result-notification'

const encode = (data) => (
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
)

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validate = (values) => {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = 'Εισάγετε το όνομα σας'
  }

  if (!values.email.trim()) {
    errors.email = 'Εισάγετε ένα email επικοινωνίας'
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Εισάγετε ένα έγκυρο email επικοινωνίας'
  }

  if (!values.message.trim()) {
    errors.message = 'Εισάγετε το μήνυμα σας'
  }
  return errors
}

const ContactForm = () => {
  const initialFormValues = { name: '', email: '', message: '' }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: null })
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setResult(null)
      const currentErrors = validate(formValues)
      if (Object.keys(currentErrors).length) {
        setErrors(currentErrors)
        return
      }

      const form = e.target
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...formValues,
        }),
      })
      setResult('success')
    } catch (e) {
      setResult('error')
    }
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <input type="hidden" name="form-name" value="contact"/>
        <div className="col-12">
          <input
            type="text"
            name="name"
            placeholder="Όνομα"
            onChange={handleChange}
            value={formValues.name}
            className={errors.name && styles.error}
          />
          {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
        </div>
        <div className="col-12">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formValues.email}
            className={errors.email && styles.error}
          />
          {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </div>
        <div className="col-12">
          <textarea
            name="message"
            placeholder="Εισάγετε το μήνυμα σας"
            rows="8"
            onChange={handleChange}
            value={formValues.message}
            className={errors.message && styles.error}
          />
          {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
        </div>
        <div className={['col-12', styles.buttonWrap].join(' ')}>
          {result
            ? <ResultNotification result={result}/>
            : (
              <button type="submit" className={styles.submitBtn}>
                Αποστολή
              </button>
            )
          }
        </div>
      </div>
    </form>
  )
}

export default ContactForm
