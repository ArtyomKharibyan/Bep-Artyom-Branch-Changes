import React, { useRef } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Autocomplete, IAutoCompleteItem } from '@uiComponents/Autocomplete'

import { ErrorScroll } from '@hooks/EducationScrollError/ErrorScroll'

export interface IAutocompleteProps<T> {
  fieldName: string
  placeholder?: string
  className?: string
  scrollError?: boolean
  inputClasses?: string
  items: T[]
  onChange?: (value: T) => void
  label?: string
  id?: string
  error?: string | null
  selectedItem?: boolean
  resetSelectedItem?: () => void
}

const AutocompleteField = <T extends IAutoCompleteItem>({
  fieldName,
  items,
  placeholder,
  className,
  inputClasses,
  onChange,
  error,
  label,
  id,
  scrollError,
  selectedItem,
  resetSelectedItem,
}: IAutocompleteProps<T>) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name: fieldName, control })
  const errorMessage = error ?? fieldState?.error?.message

  const scrollRef = useRef<HTMLDivElement | null>(null)

  ErrorScroll({
    scrollError,
    fieldState,
    fieldError: fieldState.error?.message ?? null,
    ref: scrollRef,
  })

  return (
    <div ref={scrollRef}>
      <Autocomplete
        {...field}
        onValueChange={onChange}
        placeholder={placeholder}
        items={items}
        inputClasses={inputClasses}
        classes={className}
        label={label}
        id={id}
        error={errorMessage}
        selectedItem={selectedItem}
        resetSelectedItem={resetSelectedItem}
      />
    </div>
  )
}

export default AutocompleteField
