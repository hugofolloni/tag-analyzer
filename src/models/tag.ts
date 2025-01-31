export type Tag = {
  name: string,
  count: number,
  artists: string[],
  albums: Album[]
}

export type Artist = {
    name: string,
    count: number,
    tags: string[]
}

export type Album = {
    name: string, 
    artist: string, 
    image: string
}

export type UserInfo = {
  username: string,
  photo: string,
}

export type ArtistInfoResponse = {
  tag: {
      photo: string,
      name: string
  } | null, 
  artist: {
      photo: string,
      name: string
  } | null,
}