import { z } from 'zod'

export const holidaysSchema = z.object({
  motivo: z.string(),
  tipo: z.string(),
  info: z.string(),
  dia: z.number(),
  mes: z.number(),
  id: z.string(),
})

export const holidayArrSchema = z.array(holidaysSchema)

export type Holiday = z.infer<typeof holidaysSchema>
export type HolidayArr = z.infer<typeof holidayArrSchema>
