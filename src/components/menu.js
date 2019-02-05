import React from 'react'

const handle = event => {}

export default ({ close, store }) => (
  <div className="menu">
    <ul>
      <li
        onClick={() => {store.changeFilter('');close()}}>All
      </li>
      <li onClick={() => {store.changeFilter('print');close()}}>Print</li>
      <li onClick={() => {store.changeFilter('editorial');close()}}>Editorial</li>
      <li onClick={() => {store.changeFilter('branding');close()}}>Branding</li>
      <li onClick={() => {store.changeFilter('exhibition');close()}}>Exhibition</li>
      <li onClick={() => {store.changeFilter('illustration');close()}}>Illustration</li>
      <li onClick={() => {store.changeFilter('book design');close()}}>Book Design</li>
    </ul>
  </div>
)
