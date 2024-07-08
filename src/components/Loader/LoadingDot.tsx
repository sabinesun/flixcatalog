function LoadingDot() {
  return (
    <div className="m-8 ml-0 flex items-center justify-center space-x-1">
      <div className="size-1 animate-bounce rounded-full bg-white [animation-delay:-0.3s] md:size-2" />
      <div className="size-1 animate-bounce rounded-full bg-white [animation-delay:-0.15s] md:size-2" />
      <div className="size-1 animate-bounce rounded-full bg-white md:size-2" />
    </div>
  );
}

export default LoadingDot;
