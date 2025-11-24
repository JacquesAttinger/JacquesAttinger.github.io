import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { publications } from '@/config/research'

export const metadata: Metadata = {
    title: 'Research',
    description: 'My research publications and academic work.',
}

export default function Research() {
    return (
        <SimpleLayout
            title="Publications"
            intro=""
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    <ul className="flex flex-col gap-8">
                        {publications.map((pub, index) => (
                            <li key={index} className="flex flex-col space-y-2">
                                {/* Title */}
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium text-fuchsia-600 hover:underline"
                                >
                                    {pub.title}
                                </a>

                                {/* Authors */}
                                <div className="text-zinc-600 dark:text-zinc-300">
                                    {pub.authors.split(', ').map((author, i, arr) => (
                                        <span key={i}>
                                            {author === "Jacques Attinger" ? (
                                                <span className="font-bold underline text-black dark:text-white">{author}</span>
                                            ) : (
                                                author
                                            )}
                                            {i < arr.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </div>

                                {/* Venue & Date */}
                                <div className="text-sm italic text-muted-foreground">
                                    {pub.venue}, {pub.date}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SimpleLayout>
    )
}
