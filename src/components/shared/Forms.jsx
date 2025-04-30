import React from 'react'
import { Form, Input, Button } from '@heroui/react'

export default function Forms() {
  const onSubmit = (e) => {
    e.preventDefault()
    // handle your form values here…
  }

  return (
    <Form
      className="w-full max-w-xs"
      validationBehavior="aria"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your name"
        type="text"
        validate={(value) => (value === 'admin' ? 'Nice try!' : null)}
      />

      <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        validate={(value) =>
          /\S+@\S+\.\S+/.test(value) ? null : 'Invalid email'
        }
      />

      {/* Only one email field */}

      <Button type="submit" variant="bordered" className="mt-4">
        Submit
      </Button>
    </Form>
  )
}
