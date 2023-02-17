import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Song from './Song'
import { useParams } from 'react-router-dom'

const SongNameSearchResults = () => {
  const [songs, setSongs] = useState([])
  const params = useParams()

  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='
  
  useEffect(() => {
    getSongs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSongs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.songName)
      if (response.ok) {
        const { data } = await response.json()
        setSongs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {songs.map((songData) => (
            <Song key={songData.id} data={songData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default SongNameSearchResults