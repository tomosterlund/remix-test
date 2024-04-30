import {ScheduleXCalendar, useNextCalendarApp} from "@schedule-x/react";
import {viewDay, viewMonthAgenda, viewMonthGrid, viewWeek} from "@schedule-x/calendar";

export default function AppCalendar() {
  const calendar = useNextCalendarApp({
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2023-12-16',
        end: '2023-12-16',
      },
    ],
  })

  return <>
    <ScheduleXCalendar calendarApp={calendar} />
  </>
}
