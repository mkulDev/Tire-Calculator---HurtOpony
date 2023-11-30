import { getUniqueWidths, osobowe } from './data'
export const GET = async (request: Request) => {
  try {
    const allPassibleWidths = getUniqueWidths()
    if (allPassibleWidths) {
      return new Response(JSON.stringify(allPassibleWidths), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    return new Response(JSON.stringify("Sorry but we can't find data you are looking for"), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
