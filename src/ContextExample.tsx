import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <div>
      <h1>
        NewCycleForm: {activeCycle}
        <button
          onClick={() => {
            setActiveCycle((state: number) => state + 1)
          }}
        >
          Alterar o ciclo ativo
        </button>
      </h1>
    </div>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}
export function ContextExample() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
