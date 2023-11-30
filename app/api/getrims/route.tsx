import { getPossibleRims } from '../getwidths/data'

export const POST = async (request: Request) => {
  const { width, profile } = await request.json()

  try {
    if (width && profile) {
      const rims = getPossibleRims({ width: Number(width), profile: Number(profile) })
      return new Response(JSON.stringify(rims), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      return new Response(JSON.stringify('Unable to find request data'), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
