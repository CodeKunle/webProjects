import React from 'react'

function SidebarOption({active, text, Icon}) {
  return (
    <div class={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption