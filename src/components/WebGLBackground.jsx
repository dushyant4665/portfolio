function WebGLBackground({ className = '' }) {
  return <div className={`webgl-surface ${className}`.trim()} aria-hidden="true" />
}

export default WebGLBackground
