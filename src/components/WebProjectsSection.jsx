import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./Icons";
import { webProjects } from "../data/assets";

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

function SoonPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-noir" aria-hidden="true">
      {/* Halo acide */}
      <div className="absolute -bottom-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-acid/20 blur-[100px]" />

      {/* Grille fine */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f5f3ee 1px, transparent 1px), linear-gradient(to bottom, #f5f3ee 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="font-display text-[10px] uppercase tracking-[0.4em] text-acid">
          Lumen Valet × Photo-ML
        </span>
        <span className="font-display text-3xl font-medium uppercase leading-none tracking-tight text-paper sm:text-4xl">
          Prochainement<span className="text-acid"> !</span>
        </span>
        <span className="max-w-[17rem] text-[11px] uppercase leading-relaxed tracking-[0.18em] text-haze">
          Nouveau site en préparation
        </span>
      </div>
    </div>
  );
}

export default function WebProjectsSection() {
  return (
    <section id="web" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="05" label="Développement" title="Réalisations Web" />
          <p className="max-w-sm text-sm leading-relaxed text-haze md:text-right">
            Du design à la mise en ligne — des sites et applications pensés,
            codés et déployés de A à Z, avec le même soin que mes visuels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {webProjects.map((project, i) => {
            const isSoon = Boolean(project.soon);

            const preview = (
              <>
                <div className="flex items-center gap-4 border-b border-white/10 bg-noir/80 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors delay-75 duration-300 group-hover:bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors delay-150 duration-300 group-hover:bg-[#28c840]" />
                  </div>
                  <span className="flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-center text-[11px] tracking-wide text-haze">
                    {project.domain}
                  </span>
                  {isSoon && (
                    <span className="shrink-0 rounded-full border border-acid/30 px-2 py-0.5 font-display text-[9px] uppercase tracking-[0.15em] text-acid">
                      Bientôt
                    </span>
                  )}
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-noir">
                  {project.preview ? (
                    <>
                      <img
                        src={project.preview}
                        alt=""
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ${EASE} group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                    </>
                  ) : (
                    <SoonPreview />
                  )}
                </div>
              </>
            );

            return (
              // Le wrapper gère l'apparition (framer-motion écrit un transform inline) ;
              // l'article gère le survol, sinon les deux transforms se neutralisent.
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full ${isSoon ? "md:col-span-2 md:mx-auto md:w-[calc(50%_-_1.25rem)] xl:col-span-1 xl:mx-0 xl:w-auto" : ""}`}
              >
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink/80 backdrop-blur transition-all duration-500 ${EASE} hover:-translate-y-1.5 hover:border-acid/40 hover:shadow-[0_30px_80px_-30px_rgba(214,255,63,0.35)]`}
                >
                  {/* Aperçu façon fenêtre de navigateur */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      aria-hidden="true"
                      data-cursor
                      className="block"
                    >
                      {preview}
                    </a>
                  ) : (
                    <div className="block">{preview}</div>
                  )}

                  <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="flex items-center gap-2 text-xs uppercase leading-relaxed tracking-[0.25em] text-haze">
                          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-acid" />
                          {project.category}
                        </span>
                        <h3 className="font-display text-3xl font-medium tracking-tight text-paper md:text-4xl">
                          {project.title}
                        </h3>
                      </div>
                      <span className="font-display text-xs uppercase tracking-[0.25em] text-acid">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-haze">{project.description}</p>

                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-paper/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor
                        aria-label={`Voir le site ${project.title} (nouvel onglet)`}
                        className="group/btn relative mt-auto inline-flex w-fit items-center gap-3 overflow-hidden rounded-full border border-paper/20 px-7 py-3 font-display text-xs uppercase tracking-[0.25em] text-paper transition-colors duration-500 hover:border-acid hover:text-noir"
                      >
                        {/* Remplissage acid qui glisse depuis la gauche */}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 origin-left scale-x-0 rounded-full bg-acid transition-transform duration-500 ${EASE} group-hover/btn:scale-x-100`}
                        />
                        <span className="relative">Voir le site</span>
                        {/* La flèche sort en haut à droite et une nouvelle arrive en bas à gauche */}
                        <span className="relative h-4 w-4 overflow-hidden">
                          <ArrowUpRightIcon
                            className={`absolute inset-0 h-4 w-4 transition-transform duration-500 ${EASE} group-hover/btn:-translate-y-full group-hover/btn:translate-x-full`}
                          />
                          <ArrowUpRightIcon
                            className={`absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-500 ${EASE} group-hover/btn:translate-x-0 group-hover/btn:translate-y-0`}
                          />
                        </span>
                      </a>
                    ) : (
                      <span className="mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-acid/30 bg-acid/5 px-7 py-3 font-display text-xs uppercase tracking-[0.25em] text-acid">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
                        </span>
                        Prochainement !
                      </span>
                    )}
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
