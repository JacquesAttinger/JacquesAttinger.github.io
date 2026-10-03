// Last edited: 2026-10-03 13:35 CDT
import { Container } from '@/components/layout/Container'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import Image from 'next/image'
import jacquesPhoto from '@/images/zoomedoutJacques.jpg'

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction} Please find a copy of my resume{' '}
              <a
                href="/Jacques_Attinger_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-600 underline hover:text-teal-500 dark:text-zinc-100 dark:hover:text-teal-500"
              >
                here
              </a>
              .
            </p>
            <SocialLinks className='md:mt-24' />
          </div>
          <div className="relative flex size-full items-center justify-center w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={jacquesPhoto}
                alt="Jacques Attinger"
                fill
                className="rounded-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-xl space-y-10 py-8 my-8 border-t border-muted">
          <Career />
          <Education />
        </div>
      </Container>
    </>
  )
}
