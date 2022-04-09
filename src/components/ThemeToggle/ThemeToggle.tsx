import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, ReactNode, useContext } from 'react'

import { ThemeContext } from '../../hooks/useTheme'
import { type ThemeSettingType } from '../../types/theme.types'
import { MoonIcon, PcIcon, SunIcon } from './atoms/icons'

type ThemeSettingsType = {
  value: ThemeSettingType
  label: string
  icon: ReactNode
}

const settings: ThemeSettingsType[] = [
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
  {
    value: 'system',
    label: 'System',
    icon: PcIcon,
  },
]

export function ThemeToggle({ panelClassName = 'mt-4' }) {
  const { themeSetting, setThemeSetting } = useContext(ThemeContext)

  return (
    <Listbox value={themeSetting} onChange={setThemeSetting}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button type="button">
        <span className="dark:hidden">
          <SunIcon className="w-6 h-6" selected={themeSetting !== 'system'} />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="w-6 h-6" selected={themeSetting !== 'system'} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300',
          panelClassName
        )}
      >
        {settings.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'py-1 px-2 flex items-center cursor-pointer',
                  selected && 'text-sky-500',
                  active && 'bg-slate-50 dark:bg-slate-600/30'
                )}
                data-track-heap={`set-theme-${value}`}
              >
                {/* @ts-expect-error don't know how to fix this typing error */}
                <Icon selected={selected} className="w-6 h-6 mr-2" />
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export function ThemeSelect() {
  const { themeSetting, setThemeSetting } = useContext(ThemeContext)

  const findCurrentTheme = settings.find((x) => x.value === themeSetting)

  if (!findCurrentTheme) {
    return null
  }

  const { label } = findCurrentTheme

  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor="theme"
        className="text-slate-700 font-normal dark:text-slate-400"
      >
        Switch theme
      </label>
      <div className="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
        <SunIcon className="w-6 h-6 mr-2 dark:hidden" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 mr-2 hidden dark:block"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          />
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            className="fill-slate-400"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            className="fill-slate-400"
          />
        </svg>
        {label}
        <svg className="w-6 h-6 ml-2 text-slate-400" fill="none">
          <path
            d="m15 11-3 3-3-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select
          id="theme"
          value={themeSetting || ''}
          //@ts-expect-error value can only be of ThemeType
          onChange={(e) => setThemeSetting(e.target.value)}
          className="absolute appearance-none inset-0 w-full h-full opacity-0"
        >
          {settings.map(({ value, label }) => (
            <option
              key={value}
              value={value}
              data-track-heap={`set-theme-${value}`}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
