import { cn } from '@/utils/cn'

interface TerminalCardProps {
  className?: string
}

const CODE_LINES = [
  { type: 'comment', content: '// Laravel Service Layer' },
  { type: 'keyword', content: 'class', name: 'EmployeeService' },
  { type: 'brace', content: '{' },
  { type: 'method', content: '  public function getAppraisals(' },
  { type: 'param', content: '    int $employeeId,' },
  { type: 'param', content: '    string $status' },
  { type: 'method', content: '  ): Collection {' },
  { type: 'body', content: '    return $this->repo' },
  { type: 'chain', content: '      ->forEmployee($employeeId)' },
  { type: 'chain', content: '      ->withStatus($status)' },
  { type: 'chain', content: '      ->paginate(15);' },
  { type: 'close', content: '  }' },
  { type: 'brace', content: '}' },
]

type LineType = 'comment' | 'keyword' | 'brace' | 'method' | 'param' | 'body' | 'chain' | 'close'

const LINE_COLORS: Record<LineType, string> = {
  comment: 'text-muted-text',
  keyword: 'text-accent',
  brace: 'text-secondary-text',
  method: 'text-blue-400',
  param: 'text-orange-300',
  body: 'text-primary-text',
  chain: 'text-green-400',
  close: 'text-secondary-text',
}

export function TerminalCard({ className }: TerminalCardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-lg overflow-hidden shadow-card',
        'w-full max-w-md',
        className,
      )}
      role="img"
      aria-label="Code sample showing Laravel service layer architecture"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-elevated">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-muted-text">EmployeeService.php</span>
      </div>

      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-xs leading-relaxed">
          {CODE_LINES.map((line, i) => {
            const color = LINE_COLORS[line.type as LineType] ?? 'text-primary-text'
            if (line.type === 'keyword') {
              return (
                <div key={i} className="flex gap-1">
                  <span className="text-accent">class</span>
                  <span className="text-blue-300"> {line.name}</span>
                </div>
              )
            }
            return (
              <div key={i} className={color}>
                {line.content}
              </div>
            )
          })}
        </pre>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-surface-elevated">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-text">PHP</span>
          <span className="font-mono text-[10px] text-muted-text">Laravel 11</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
          <span className="font-mono text-[10px] text-muted-text">Production</span>
        </div>
      </div>
    </div>
  )
}
