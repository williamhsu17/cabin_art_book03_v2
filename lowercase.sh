#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

DIR="$1"

# Renaming directories first
find "$DIR" -type d | while read -r d; do
    lowercase=$(echo "$d" | tr '[:upper:]' '[:lower:]')
    if [ "$d" != "$lowercase" ]; then
        mv -v "$d" "$lowercase"
    fi
done

# Renaming files next
find "$DIR" -type f | while read -r f; do
    dirpart=$(dirname "$f")
    filepart=$(basename "$f")
    lowercase_file=$(echo "$filepart" | tr '[:upper:]' '[:lower:]')
    if [ "$filepart" != "$lowercase_file" ]; then
        mv -v "$f" "$dirpart/$lowercase_file"
    fi
done

