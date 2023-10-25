const useUser = () => {

  const { data, error } = await supabase
  .from('countries')
  .select('name')
  .limit(1)
  .single()
  
  return {
    user
  }
}