// This is a temporary fix until Jimp implements support for webp
// https://github.com/oliver-moran/jimp/issues/144

// const img = await webpToJimp('https://test.com/img.webp', './tmp')

import fs from 'fs'
import axios from 'axios'
import jimp from 'jimp'
import webp from 'webp-converter'

export default async function webpToJimp (url, tempDir) {
  // Verify that the img is a webp
  if (!url.match(/(\.webp)/gi)) return jimp.read(url)

  // Get the webp image
  const response = await axios.get(url, {
    responseType: 'stream'
  })

  // Create the temporary directory if it doesn't exist
  await fs.promises.mkdir(tempDir, { recursive: true })

  // Create a stream at the temporary directory and load the data into it
  const file = fs.createWriteStream(`${tempDir}/tmp.webp`)
  await response.data.pipe(file)

  // Convert the webp image to a readable format
  await webp.dwebp(`${tempDir}/tmp.webp`, `${tempDir}/tmp.png`, '-o')

  // Read the newly created image
  const img = await jimp.read(`${tempDir}/tmp.png`)

  // Delete the temporary files
  fs.unlink(`${tempDir}/tmp.webp`, () => {})
  fs.unlink(`${tempDir}/tmp.png`, () => {})

  return img
}