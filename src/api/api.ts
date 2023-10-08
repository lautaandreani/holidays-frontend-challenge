import { HolidayArr, holidayArrSchema } from '../lib/validations'

const BASE_URL = 'https://nolaborables.com.ar/api'

export async function getHolidays(year: number): Promise<HolidayArr> {
  const holidays = await fetch(`${BASE_URL}/v2/feriados/${year}`)
  const holidaysToJson = await holidays.json()
  const validateHolidays = holidayArrSchema.safeParse(holidaysToJson)

  if (validateHolidays.success) return holidaysToJson
  else throw new Error(validateHolidays.error.message)
}
