import axios from 'axios'

export const fetchAllTiresData = async (url: string) => {
  try {
    const data = await axios.get(url).then((response) => response.data)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const fetchPossibleRims = async (url: string, width: number, profile: number) => {
  try {
    const data = await axios.post(url, { width: width, profile: profile }).then((response) => response.data)
    return data
  } catch (error) {
    console.error('Error fetching possible rims:', error)
    throw new Error('Failed to fetch data')
  }
}
