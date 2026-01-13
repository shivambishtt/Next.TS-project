function EventTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-semibold">Tags</h2>
      <ul>
        {tags.map((tag, id) => {
          return <li key={id}>{tag}</li>;
        })}
      </ul>
    </div>
  );
}
export default EventTags;
