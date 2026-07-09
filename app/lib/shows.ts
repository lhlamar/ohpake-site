export type Show = {
  date: Date
  venue: string
  location: string
  url?: string
}

export async function getShows(): Promise<Show[]> {
  const icsUrl = process.env.GOOGLE_CALENDAR_ICS_URL
  if (!icsUrl) return []

  const res = await fetch(icsUrl, { next: { revalidate: 60 } })
  if (!res.ok) return []

  const ics = await res.text()
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  return parseIcs(ics)
    .filter((show) => show.date.getTime() >= startOfToday.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

function parseIcs(ics: string): Show[] {
  const unfolded = ics.replace(/\r?\n[ \t]/g, '')
  const lines = unfolded.split(/\r?\n/)

  const shows: Show[] = []
  let current: Partial<Show> | null = null

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      current = {}
      continue
    }
    if (line === 'END:VEVENT') {
      if (current?.date && current.venue) {
        shows.push({
          date: current.date,
          venue: current.venue,
          location: current.location ?? '',
          url: current.url,
        })
      }
      current = null
      continue
    }
    if (!current) continue

    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const rawName = line.slice(0, colonIdx)
    const value = unescapeIcs(line.slice(colonIdx + 1))
    const name = rawName.split(';')[0]

    if (name === 'SUMMARY') current.venue = value
    else if (name === 'LOCATION') current.location = value
    else if (name === 'URL') current.url = value
    else if (name === 'DTSTART') current.date = parseIcsDate(value)
  }

  return shows
}

function unescapeIcs(s: string): string {
  return s
    .replace(/\\n/gi, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\')
}

function parseIcsDate(v: string): Date {
  if (/^\d{8}$/.test(v)) {
    return new Date(Date.UTC(+v.slice(0, 4), +v.slice(4, 6) - 1, +v.slice(6, 8)))
  }
  const m = v.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/)
  if (!m) return new Date(NaN)
  const [, y, mo, d, h, mi, s, z] = m
  if (z === 'Z') {
    return new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +s))
  }
  return new Date(+y, +mo - 1, +d, +h, +mi, +s)
}
