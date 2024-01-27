export default function URLpath(endpoint, extension) {
  // const deployed = 'http://52.26.157.53/litterai';
  const deployed = 'https://litter.timengle.dev';
  return extension
    ? `${deployed}/${endpoint}/${extension}`
    : `${deployed}/${endpoint}`;
}
