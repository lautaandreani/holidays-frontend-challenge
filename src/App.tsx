import { useEffect, useState } from 'react'

import { getHolidays } from './api/api'
import { HolidayArr } from './lib/validations'
import './App.css'
import { HolidaySkeleton } from './components/index-skeleton'

const year = new Date().getUTCFullYear()
const currentMonth = new Date().getUTCMonth() + 1
const currentDate = new Date().getUTCDate()

function App() {
  const [holidays, setHolidays] = useState<HolidayArr>([])
  const findNextHoliday = holidays?.find((holiday) => holiday.dia >= currentDate)

  const getNextHolidayDay = () => {
    if (findNextHoliday) {
      const nextHolidayDate = new Date(year, findNextHoliday.mes, findNextHoliday.dia).getUTCDate()
      return nextHolidayDate - currentDate
    }
  }

  const filterPastHolidays = (holidays: HolidayArr) => {
    const filterHolidays = holidays.filter((holiday) => {
      return holiday.mes >= currentMonth
    })

    setHolidays(filterHolidays)
  }

  useEffect(() => {
    getHolidays(year)
      .then(filterPastHolidays)
      .catch((err) => console.error(err))
  }, [])

  if (!holidays.length) return <HolidaySkeleton />

  return (
    <>
      <h3 className='text-3xl font-bold mb-4'>Próximo feriado 📅</h3>
      <div className='flex flex-col gap-2 border border-soft_gray min-w-[30rem] p-4 rounded justify-center'>
        <div className='flex items-center gap-2 justify-center'>
          <p className='text-xl font-medium'>
            {findNextHoliday?.dia}/{findNextHoliday?.mes}
          </p>
          - <small className='text-[#a6a6a6]'>{findNextHoliday?.motivo}</small>
        </div>
        <h1>
          Faltan <strong>{getNextHolidayDay()}</strong> días para el próximo feriado
        </h1>
        <span>
          Más info{' '}
          <a href={findNextHoliday?.info} target='_blank' className='underline text-blue-400'>
            click aquí
          </a>
        </span>
      </div>
      <details className='mt-6 border border-soft_gray p-2 text-left rounded'>
        <summary>Próximos feriados</summary>
        {holidays.map((holiday) => (
          <div key={holiday.id} className='flex gap-2'>
            <span className='min-w-[3rem]'>
              {holiday.dia}/{holiday.mes}
            </span>
            <strong>{holiday.motivo}</strong> -
            <a href={holiday?.info} target='_blank' className='underline text-blue-400'>
              click aquí
            </a>
          </div>
        ))}
      </details>
    </>
  )
}

export default App
