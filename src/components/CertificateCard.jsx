
const CertificateCard = ({ title, issuer, date, link }) => (
  <div className="bg-white/20 dark:bg-zinc-800/50 border border-white/20 dark:border-zinc-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all backdrop-blur-md flex flex-col">
    <h3 className="text-lg font-bold text-zinc-800 dark:text-white">{title}</h3>
    <p className="text-sm text-zinc-500">{issuer}</p>
    <p className="text-xs text-zinc-400">{date}</p>
    {link && (
      <a href={link} target="_blank" rel="noreferrer" className="flex mt-auto text-blue-500 hover:text-red-500 text-sm">
        View Certificate →
      </a>
    )}
  </div>
);

export default CertificateCard;