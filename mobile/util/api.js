export function fetchSchedule(event){
  return fetch(`http://192.168.3.37:3000/api/events/${event}/schedule_items`)
  .then(response => {
    if (response.status === 200){
      return response.json();
    } else{
      debugger
      throw new Error(response.statusText);
    }}
  );
}
