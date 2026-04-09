export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto my-8 px-4 w-full">
      {children}
    </div>
  )
}