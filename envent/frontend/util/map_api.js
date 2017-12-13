export const postMap = (map) => (
  $.ajax({
    method: 'POST',
    url: 'api/maps',
    data: {map}
  })
);

export const deleteMap = (id) => (
  $.ajax({
    method: 'DELETE', 
    url: `api/maps/${id}`
  })
);

export const fetchMap = (id) => (
  $.ajax({
    method: 'GET', 
    url: `api/maps/${id}`
  })
);