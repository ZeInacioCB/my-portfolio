function CardTechChips({ tech }) {
    if (!tech || tech.length === 0) return null;

    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tech.map((skill) => (
                <li key={skill} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                        {skill}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CardTechChips;
