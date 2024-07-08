function CardLoading() {
  return (
    <div className="flex min-w-60 flex-col md:min-w-72 lg:min-w-80">
      <div className="aspect-video w-full animate-pulse rounded-xl bg-gray-900" />
      <div className="my-2 flex h-9 justify-between md:my-4">
        <div className=" h-6 w-32 animate-pulse rounded-xl bg-gray-900" />
        <div className=" h-6 w-32 animate-pulse rounded-xl bg-gray-900" />
      </div>
    </div>
  );
}

export default CardLoading;
