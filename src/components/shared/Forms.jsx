import React, { useState } from 'react'
import { Form, Input, Button } from '@heroui/react'

export default function Forms() {
  const [touched, setTouched] = useState({ username: false, email: false })

  const onSubmit = (e) => {
    e.preventDefault()
    // handle your form values here…
  }

  // Validation functions only show error if touched
  const validateUsername = (value) => {
    if (!touched.username) return null
    if (!value) return 'Username is required'
    if (value === 'admin') return 'Nice try!'
    return null
  }
  const validateEmail = (value) => {
    if (!touched.email) return null
    if (!value) return 'Email is required'
    if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email'
    return null
  }

  return (
    <Form
      className="w-full max-w-xs"
      validationBehavior="aria"
      onSubmit={onSubmit}
    >
      {/* Custom label for Username */}
      <div className="mb-1">
        <span className="block text-white text-sm font-semibold">Name</span>
      </div>
      <Input
        isRequired
        label=""
        labelPlacement="outside"
        name="username"
        placeholder="Enter your name"
        type="text"
        labelStyle={{ color: 'white' }}
        validate={validateUsername}
        onBlur={() => setTouched((prev) => ({ ...prev, username: true }))}
      />

      {/* Custom label for Email */}
      <div className="mb-1 mt-4">
        <span className="block text-white text-sm font-semibold">Email</span>
      </div>
      <Input
        isRequired
        label=""
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        labelStyle={{ color: 'white' }}
        validate={validateEmail}
        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
      />

      {/* Only one email field */}

      <Button type="submit" variant="bordered" className="mt-4 text-white">
        Submit
      </Button>
    </Form>
  )
}
