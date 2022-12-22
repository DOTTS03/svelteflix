export function load(data:any):Object{
  const querySearch = data.url.searchParams.get('gnre')
  return {querySearch}
}