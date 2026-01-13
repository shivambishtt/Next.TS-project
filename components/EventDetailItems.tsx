import Image from "next/image";

function EventDetailItem({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex gap-3 items-center">
      <Image src={icon} alt={alt} width={15} height={15} />
      <p>{label}</p>
    </div>
  );
}

export default EventDetailItem;
