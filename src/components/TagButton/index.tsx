import { TagButtonFilter } from './TabButtonFilter.style'

interface ITagButtonProps {
  name: string
  handleSetTag: (value: string) => void
  tagActive: Boolean
}

export function TagButton({ name, handleSetTag, tagActive }: ITagButtonProps) {
  return (
    <TagButtonFilter
      className={`tag ${tagActive ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name}
    </TagButtonFilter>
  )
}
