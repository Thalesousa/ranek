import React, { useEffect } from 'react'

export default function Head({title, description}) {
  useEffect(() => {
    document.title = title;
  }, [title, description])
  return <></>
}
