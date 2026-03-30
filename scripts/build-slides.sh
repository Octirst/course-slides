#!/bin/bash

# Build all Slidev presentations to static files

SLIDES_SOURCE="./slides"
SLIDES_OUTPUT="./public/slides"

# Create output directory
mkdir -p "$SLIDES_OUTPUT"

# Find all slides.md files and build them
find "$SLIDES_SOURCE" -name "slides.md" | while read -r slide_file; do
  # Get relative path (e.g., 25-2-bigdata/unit01-lesson01)
  rel_path=$(dirname "$slide_file" | sed "s|^$SLIDES_SOURCE/||")
  output_dir="$SLIDES_OUTPUT/$rel_path"
  
  echo "📦 Building: $rel_path"
  mkdir -p "$output_dir"
  
  # Build Slidev to static files
  cd "$(dirname "$slide_file")"
  npx slidev build --base "/slides/$rel_path/" --out "$output_dir" 2>/dev/null
  cd - > /dev/null
  
  echo "✅ Done: $rel_path"
done

echo ""
echo "🎉 All slides built successfully!"
echo "Output directory: $SLIDES_OUTPUT"
