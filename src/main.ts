import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      click on the counter, after 3 times another chunck should be loaded
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
