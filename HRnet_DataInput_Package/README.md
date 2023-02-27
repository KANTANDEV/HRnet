# HRnet DataInput

## How to Install

For install package use command :

`npm i hrnet-datainput`

## Package contents

This package contains the following components :

```
<DataInput /> // React component that displays a field and its label.

```

## How to import

To import components into your code use the syntax as in the example below

```
import DataInput from 'hrnet-datainput/src'

```

## Exemple

```
import React from 'react'
import ReactDOM from 'react-dom'
import DataInput from 'hrnet-datainput/src'

const App = () => {
  return (
    <div>
      <DataInput
        id="inputName"
        type="text"
        name="name"
        label="Nom :"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  )
```

## Component parameters

### DataInput

```
/**
 * DataInput component
 * @param {string} id - Field ID.
 * @param {'text' | 'number' | 'date'} type - Field type.
 * @param {string} name - Field name.
 * @param {string} label - Field label.
 * @param {(e: ChangeEvent<HTMLInputElement>) => void} onChange - Function to call when the field value changes.
 * @returns {JSX.Element} - React component.
 * @summary React component that displays a field and its label.
 */
```
