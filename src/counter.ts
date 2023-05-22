export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`

    if(counter === 3){
      import('./LazyLoaded')
          .then(res => {
            res.createAlert('loaded ' + counter + ' times');
          })
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
