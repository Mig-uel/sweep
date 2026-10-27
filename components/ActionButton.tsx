export default function ActionButton({
  icon,
  text,
}: {
  icon?: React.ReactNode
  text: string
}) {
  return (
    <button className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-50 hover:cursor-pointer'>
      {icon && (
        <span className='flex items-center justify-center size-4'>{icon}</span>
      )}
      {text}
    </button>
  )
}
