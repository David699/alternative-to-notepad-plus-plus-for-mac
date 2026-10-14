import type { SeoArticleTable as ArticleTable } from '@/lib/seo-articles'

export default function SeoArticleTable({ table }: { table: ArticleTable }) {
  return (
    <section aria-label={table.title}>
      <h2 className="text-2xl font-black tracking-tight text-gray-950">{table.title}</h2>
      <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">{table.title}</caption>
          <thead className="bg-gray-950 text-white">
            <tr>{table.headers.map((header) => <th key={header} scope="col" className="px-4 py-3 font-bold">{header}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.rows.map((row) => (
              <tr key={row.join('|')} className="align-top">
                {row.map((cell, index) => index === 0 ? (
                  <th key={index} scope="row" className="px-4 py-4 font-bold leading-7 text-gray-950">{cell}</th>
                ) : (
                  <td key={index} className="px-4 py-4 leading-7 text-gray-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
