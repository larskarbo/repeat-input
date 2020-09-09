import faunadb from 'faunadb'

import Constants from 'expo-constants';
const client = new faunadb.Client({ secret: Constants.manifest.extra.FAUNADB_KEY })
const q = faunadb.query

export { client , q }