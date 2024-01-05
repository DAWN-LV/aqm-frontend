import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label: string
}

const KBD: React.FC<Props> = ({ ...props }) => (
  <kbd { ...props } className={ classNames("px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500", props.className) }>
    { props.label }
  </kbd>
)

export default KBD