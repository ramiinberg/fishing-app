import React, { PureComponent } from 'react'
import './fishTable.css'

export default function FishTable() {
  return (
    <section>
  <header className='fishTable'>
    <div class="col">Column A</div>
    <div class="col">Column B</div>
    <div class="col">Column C</div>
  </header>
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
  </div>
</section>
  )
} 
