import { client, q } from './db'

export const getAllAnswers = () => client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/answers_index')))
)
  .then(response => {
    const notesRefs = response.data
    // create new query out of notes refs. 
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllProductDataQuery = notesRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllProductDataQuery).then((data) => data)
  })
  .catch(error => console.warn('error', error.message))


export const getBucketContents = ( bucketId ) => client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/answers_index')))
)
  .then(response => {
    const notesRefs = response.data
    // create new query out of notes refs. 
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllProductDataQuery = notesRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllProductDataQuery).then((data) => data)
  })
  .then(dataPoints => {
    console.log('dataPoints: ', dataPoints);
    console.log('bucketId: ', bucketId);
    return dataPoints.filter(dp => dp.data.bucket == bucketId)
  })
  .catch(error => console.warn('error', error.message))

export const addDataPoint = (bucket: string, answers) => client.query(
  q.Create(
    q.Collection('answers'),
    {
      data: {
        answers,
        bucket,
        created: new Date().getTime(),
        user: 'lars'
      },
    },
  )
)
  .then(ret => ret)
  .catch(err => console.warn(err))