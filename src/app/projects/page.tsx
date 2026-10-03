// Last edited: 2026-10-03 13:35 CDT
import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import { projectHeadLine, projectIntro, githubProjects } from '@/config/infoConfig'

import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import { CustomIcon } from '@/components/shared/CustomIcon'

export const metadata: Metadata = {
  title: 'Projects',
  description: projectHeadLine,
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
        <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
          <CustomIcon name='github' size={28} />
          GitHub
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {githubProjects.map((project) => (
            <GithubProjectCard key={project.name} project={project} titleAs='h3' />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
