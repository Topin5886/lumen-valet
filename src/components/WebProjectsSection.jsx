import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./Icons";
import { webProjects } from "../data/assets";

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {webProjects.map((project, i) => (
            // Le wrapper gère l'apparition (framer-motion écrit un transform inline) ;
            // l'article gère le survol, sinon les deux transforms se neutralisent.
            <motion.div
              key={project.url}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink/80 backdrop-blur transition-all duration-500 ${EASE} hover:-translate-y-1.5 hover:border-acid/40 hover:shadow-[0_30px_80px_-30px_rgba(214,255,63,0.35)]`}
              >
                {/* Aperçu façon fenêtre de navigateur */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  data-cursor
                  className="block"
                >
                  <div className="flex items-center gap-4 border-b border-white/10 bg-noir/80 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors delay-75 duration-300 group-hover:bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors delay-150 duration-300 group-hover:bg-[#28c840]" />
                    </div>
                    <span className="flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-center text-[11px] tracking-wide text-haze">
                      {project.domain}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden bg-noir">
                    <img
                      src={project.preview}
                      alt=""
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ${EASE} group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                  </div>
                </a>

                <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-haze">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
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
                    {/* La flèche sort en haut à droite et une nouvelle arrive d'en bas à gauche */}
                    <span className="relative h-4 w-4 overflow-hidden">
                      <ArrowUpRightIcon
                        className={`absolute inset-0 h-4 w-4 transition-transform duration-500 ${EASE} group-hover/btn:-translate-y-full group-hover/btn:translate-x-full`}
                      />
                      <ArrowUpRightIcon
                        className={`absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-500 ${EASE} group-hover/btn:translate-x-0 group-hover/btn:translate-y-0`}
                      />
                    </span>
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
