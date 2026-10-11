import React from 'react';
import { Check, CheckCircle2, Clock, RotateCcw } from 'lucide-react';

interface ReadingProgressBarProps {
  bookId: string;
  status: 'Completed' | 'Currently Reading' | 'Queued';
  progress: number; // 0 to 100
  onToggleCompletion: () => void;
  onUpdateProgress?: (newProgress: number) => void;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  bookId,
  status,
  progress,
  onToggleCompletion,
  onUpdateProgress,
}) => {
  const isCompleted = status === 'Completed' || progress === 100;

  return (
    <div className="space-y-2 pt-3 border-t border-[rgba(226,226,228,0.1)]">
      {/* Label & Status Header */}
      <div className="flex items-center justify-between font-mono text-[0.68rem] tracking-wider uppercase">
        <div className="flex items-center gap-1.5">
          <span className="text-[#e2e2e4] opacity-60">Reading Progress:</span>
          <span className="font-bold text-[#facc15] tabular-nums">{progress}%</span>
        </div>

        {/* Toggle Completion Button */}
        <button
          onClick={onToggleCompletion}
          className={`inline-flex items-center gap-1 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider transition-all cursor-pointer ${
            isCompleted
              ? 'bg-[#facc15] text-[#111113] font-bold hover:bg-[#eab308]'
              : 'border border-[rgba(226,226,228,0.2)] text-[#e2e2e4] opacity-80 hover:opacity-100 hover:border-[#facc15] hover:text-[#facc15]'
          }`}
          title={isCompleted ? 'Mark as In Progress' : 'Mark as Completed'}
        >
          {isCompleted ? (
            <>
              <Check className="w-3 h-3 stroke-[3]" />
              <span>Finished</span>
            </>
          ) : (
            <>
              <Clock className="w-3 h-3" />
              <span>Mark Complete</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Bar Track */}
      <div className="relative w-full h-2 bg-[rgba(226,226,228,0.08)] overflow-hidden border border-[rgba(226,226,228,0.1)]">
        <div
          className={`h-full transition-all duration-300 ease-out ${
            isCompleted
              ? 'bg-[#facc15]'
              : 'bg-gradient-to-r from-[#facc15]/60 to-[#facc15]'
          }`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>

      {/* Interactive Micro-Adjuster (allows fine tuning 0 - 100% or fast increments) */}
      {!isCompleted && onUpdateProgress && (
        <div className="flex items-center justify-between font-mono text-[0.62rem] text-[#e2e2e4] opacity-50 pt-0.5">
          <span>Adjust page progress:</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onUpdateProgress(Math.max(0, progress - 25))}
              className="px-1.5 py-0.5 border border-[rgba(226,226,228,0.1)] hover:border-[#facc15] hover:text-[#facc15] transition-colors"
            >
              -25%
            </button>
            <button
              onClick={() => onUpdateProgress(Math.min(100, progress + 25))}
              className="px-1.5 py-0.5 border border-[rgba(226,226,228,0.1)] hover:border-[#facc15] hover:text-[#facc15] transition-colors"
            >
              +25%
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
