import PrivacyTitle from "./PrivacyTitle";

export default function PrivacySection({
  title,
  content,
  list,
}) {
  return (
    <section className="mb-12">
      <PrivacyTitle>{title}</PrivacyTitle>

      {content && (
        <p className="text-slate-700 leading-8 whitespace-pre-line">
          {content}
        </p>
      )}

      {list && (
        <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}