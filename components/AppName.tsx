import { APP_NAME } from '@/lib/seo'

export default function AppName({ name = APP_NAME, accentClassName }: { name?: string; accentClassName: string }) {
  const suffix = name.match(/\++$/)?.[0] ?? ''

  return <>{name.slice(0, name.length - suffix.length)}{suffix && <span className={accentClassName}>{suffix}</span>}</>
}
