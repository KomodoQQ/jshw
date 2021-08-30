function boxCapacity(length, width, height) {
  const boxSize = 16;
  let inchLength = parseInt(length * 12 / boxSize);
  let inchWidth = parseInt(width * 12 / boxSize);
  let inchHeight = parseInt(height * 12 / boxSize);
  return inchLength * inchWidth * inchHeight;
}