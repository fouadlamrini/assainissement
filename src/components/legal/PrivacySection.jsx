import PrivacyTitle from "./PrivacyTitle";

export default function PrivacySection({
  title,
  content,
  list,
}) {
  return (
    <section className="mb-8">

      <PrivacyTitle>
        {title}
      </PrivacyTitle>

      {content && (
        <p className="text-gray-700 leading-8 whitespace-pre-line">
          {content}
        </p>
      )}

      {list && (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

    </section>
  );
}