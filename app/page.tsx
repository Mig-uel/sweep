import ActionButton from '@/components/ActionButton'
import Image from 'next/image'
import {
  PlusCircle,
  FolderKanban,
  Clock,
  History,
  Activity,
  Video,
  FileSpreadsheet,
  FileText,
} from 'lucide-react'

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans '>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start'>
        {/* Logo */}
        <div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-2 sm:items-center text-black'>
          <Image
            src='/dsny_logo.png'
            alt='DSNY logo'
            width={70}
            height={38}
          />
          <div className='flex flex-col gap-1 sm:items-start'>
            <div className='text-5xl font-bold'>S.W.E.E.P.</div>
            <div className='text-lg font-medium text-zinc-600 dark:text-zinc-400'>
              Surveillance Waste Enforcement Efficiency Platform
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <h1 className='max-w-sm text-3xl font-bold leading-10 tracking-tight text-black '>
            What would you like to do?
          </h1>

          {/* Cases */}
          <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
            <div className='flex flex-col gap-4 sm:gap-4'>
              <h2 className='text-2xl font-semibold'>Cases</h2>
              <div className='flex flex-col gap-4 sm:flex-row'>
                {/* Action Buttons */}
                <ActionButton
                  icon={<PlusCircle />}
                  text='New Case'
                />
                <ActionButton
                  icon={<FolderKanban />}
                  text='Active Cases'
                />
                <ActionButton
                  icon={<Clock />}
                  text='Pending Cases'
                />
                <ActionButton
                  icon={<History />}
                  text='Case History'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cameras */}
        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <div className='flex flex-col gap-4 sm:gap-4'>
            <h2 className='text-2xl font-semibold'>Cameras</h2>
            <div className='flex flex-col gap-4 sm:flex-row'>
              {/* Action Buttons */}
              <ActionButton
                icon={<Activity />}
                text='View Status'
              />
              <ActionButton
                icon={<Video />}
                text='Manage Cameras'
              />
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <div className='flex flex-col gap-4 sm:gap-4'>
            <h2 className='text-2xl font-semibold'>Reports</h2>
            <div className='flex flex-col gap-4 sm:flex-row'>
              {/* Action Buttons */}
              <ActionButton
                icon={<FileSpreadsheet />}
                text='Generate Report'
              />
              <ActionButton
                icon={<FileText />}
                text='View Reports'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
