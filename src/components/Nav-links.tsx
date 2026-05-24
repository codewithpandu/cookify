export default function Navlinks({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <li>
      <a className="text-sm hover:text-orange-400" href={href}>
        {name}
      </a>
    </li>
  );
}
