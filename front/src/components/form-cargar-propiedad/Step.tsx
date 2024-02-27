import React from 'react'

interface Step {
  title: string,
  description: string,
  children: JSX.Element
}

export default function Step({ title, description, children }: Step) {
  return (
    <section>
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="text-primary">{title}</h3>
        <h4 className="font-[600]">{description}</h4>
      </div>
      {children}
    </section>
  )
}
