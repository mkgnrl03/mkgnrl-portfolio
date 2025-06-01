type ContainerProp = {
  children: React.ReactNode,
  className?: string,
}

function Container(props: ContainerProp) {
  return (
    <div className={`max-w-6xl w-full h-full mx-auto ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Container