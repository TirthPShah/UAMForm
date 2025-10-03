"use client"

import * as React from "react"
import { useDropzone } from "react-dropzone"
import { cn } from "@/lib/utils"

interface FileDropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  disabled?: boolean
  onFileChange: (files: File[]) => void
  accept?: Record<string, string[]>
  maxFiles?: number
}

export function FileDropzone({
  className,
  disabled = false,
  onFileChange,
  accept,
  maxFiles = 1,
  ...props
}: FileDropzoneProps) {
  const [files, setFiles] = React.useState<File[]>([])

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles)
      onFileChange(acceptedFiles)
    },
    [onFileChange]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    disabled,
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-400 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800",
        disabled && "cursor-not-allowed opacity-60",
        isDragActive && "border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-950",
        className
      )}
      {...props}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
          {files.length > 0 ? (
            <div className="flex flex-col items-center gap-2">
              <img
                src={URL.createObjectURL(files[0])}
                alt="Preview"
                className="max-h-32 rounded object-cover"
              />
              <span className="text-sm">{files[0].name}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">
                {isDragActive ? (
                  "Drop the photo here"
                ) : (
                  <>
                    Drag & drop a photo or <span className="text-blue-500">browse</span>
                    <br />
                    <span className="text-xs text-gray-400">
                                            Supports: JPG, PNG, GIF
                    
                    </span>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}