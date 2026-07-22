import { useState, type ImgHTMLAttributes } from 'react'

/**
 * Image with a soft brand shimmer while it loads, fading in once ready.
 * Preserves any passed className (object-cover, positioning, etc.).
 */
export function LazyImage({
  className = '',
  onLoad,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      {...props}
      loading={props.loading ?? 'lazy'}
      decoding="async"
      onLoad={(e) => {
        setLoaded(true)
        onLoad?.(e)
      }}
      className={`${className} transition duration-700 ${
        loaded ? 'opacity-100' : 'animate-pulse bg-shell/70 opacity-60'
      }`}
    />
  )
}
