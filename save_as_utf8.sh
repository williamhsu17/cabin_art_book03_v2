#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

DIR="$1"

# Find all files (not directories) in the specified directory and subdirectories
find "$DIR" -type f | while read file; do
    # Convert the file to UTF-8 and overwrite the original
    iconv -f "$(file -bi "$file" | sed -e 's/.*[ ]charset=//' -e 's/;.*$//')" -t UTF-8 "$file" -o "$file"
done
