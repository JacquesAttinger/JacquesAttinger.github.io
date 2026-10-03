// Last edited: 2026-10-03 12:49 CDT
"use client"

import { ArrowRight, GitFork, Star, BookOpen, Lock } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import Link from 'next/link'


function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-muted-foreground/20 px-2 py-0.5 text-xs text-muted-foreground">
      {children}
    </li>
  )
}

export function GithubProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const href = project.link ? `https://${project.link.href}` : undefined
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full py-5  px-6 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-2'>
            <BookOpen size={20} weight="duotone" />
            <Component className="text-sm font-semibold tracking-tight">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4">
          {(project.techStack?.length || project.isPrivate) && (
            <ul role="list" className="flex flex-wrap gap-1.5 pr-6">
              {project.isPrivate && (
                <Tag>
                  <span className="inline-flex items-center gap-1">
                    <Lock size={12} weight="duotone" />
                    Private repo
                  </span>
                </Tag>
              )}
              {project.techStack?.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
          )}
          <div className='flex flex-row items-center gap-2 text-xs font-semibold opacity-80'>
            { !!project.gitStars && (
              <>
                <Star size={16} weight="duotone" /> 
                {project.gitStars}
              </>
            )}
            { !!project.gitForks && (
              <>
                <GitFork size={16} weight="duotone" /> 
                {project.gitForks}
              </>
            )}
          </div>
        </div>
        {href && (
          <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${project.name} on GitHub`}
            className='absolute inset-0 z-20'>
            <ArrowRight size={32} weight="duotone" className="absolute bottom-6 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
          </Link>
        )}
      </div>
    </li>
  )
}
