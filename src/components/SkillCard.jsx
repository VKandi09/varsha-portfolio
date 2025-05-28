
const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 flex-shrink-0 transition-colors group ' + classes}>
        <figure className="bg-zinc-700/50 items-center rounded-lg overflow-hidden w-20 h-20 p-2 group-hover:bg-zinc-900 transition-colors">
            <img 
                src={imgSrc} 
                alt={label}
                height={60}
                width={60}
                className="" 
            />
        </figure>
        <div>
            <h3>{label}</h3>
            <p className="text-zinc-400 text-sm">
                {desc}
            </p>
        </div>
    </div>
  )
}

export default SkillCard