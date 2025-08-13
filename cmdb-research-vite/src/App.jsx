
import { useMemo, useState } from "react";

export default function CMDBResearchPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const tags = [
    { id: "all", label: "All" },
    { id: "data-quality", label: "Data Quality" },
    { id: "ml", label: "ML & Anomaly Detection" },
    { id: "kg", label: "Knowledge Graphs" },
    { id: "process", label: "ITSM/ITIL Process" },
    { id: "security", label: "Security/Blockchain" },
  ];

  const references = useMemo(
    () => [
      {
        title:
          "Using Knowledge Graphs to Automate Network Compliance of Containerized Services (CNSM 2024)",
        authors: "A. Simic",
        year: 2024,
        link:
          "https://dl.ifip.org/db/conf/cnsm/cnsm2024/1571048765.pdf",
        tags: ["kg", "process"],
        summary:
          "Ontology + KG approach to validate IaC/network policies; references CMDB-like configuration items and service relationships.",
      },
      {
        title:
          "Blockchain-Based Security Configuration Management for ICT Systems (MDPI Electronics)",
        authors: "D. Chatziamanetoglou et al.",
        year: 2023,
        link: "https://www.mdpi.com/2079-9292/12/8/1879",
        tags: ["security", "process"],
        summary:
          "Permissioned blockchain model for configuration/change integrity across IT/OT – applicable to CMDB audit trails.",
      },
      {
        title:
          "An ITIL Configuration Management Process Review (IEOM 2024 World Congress)",
        authors: "F. Dande",
        year: 2024,
        link:
          "https://ieomsociety.org/proceedings/2024worldcongress/164.pdf",
        tags: ["process"],
        summary:
          "Survey of AI usage in CMDB-enabled ITIL processes; highlights research gap and vendor adoption patterns.",
      },
      {
        title:
          "Design and Implementation of a Configuration Management Database Data Model (Master’s Thesis, TalTech)",
        authors: "M. Ibrahim",
        year: 2024,
        link:
          "https://digikogu.taltech.ee/et/Download/d7147b0a-027e-42f2-a11c-0dd03e6a9efd",
        tags: ["process", "data-quality"],
        summary:
          "Unified CMDB data model aligning ITIL with E‑ITS compliance; discusses service mapping gaps.",
      },
      {
        title:
          "Construction of Knowledge Graphs: Current State and Challenges (MDPI Information)",
        authors: "M. Hofer et al.",
        year: 2024,
        link: "https://www.mdpi.com/2078-2489/15/8/509",
        tags: ["kg"],
        summary:
          "Systematic review of KG construction pipelines – useful for graph‑based CMDB designs.",
      },
      {
        title:
          "Reconciliation – Best Practices (BMC Helix CMDB Documentation)",
        authors: "BMC Software",
        year: 2024,
        link:
          "https://docs.bmc.com/xwiki/bin/view/Service-Management/IT-Service-Management/BMC-Helix-CMDB/ac213/Getting-started/Best-practices-for-BMC-Helix-CMDB/Reconciliation-Best-Practices/",
        tags: ["process", "data-quality"],
        summary:
          "Practical guidance on identification/reconciliation engines for golden records across sources.",
      },
      {
        title:
          "ServiceNow CMDB Identification & Reconciliation (IRE) – Product Docs",
        authors: "ServiceNow",
        year: 2023,
        link:
          "https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html",
        tags: ["process", "data-quality"],
        summary:
          "Conceptual model of IRE: deduplication, attribute precedence, and reconciliation rules.",
      },
      {
        title:
          "Anomaly Analytics in Data‑Driven ML Systems (Int J Data Sci & Analytics)",
        authors: "S. Azimi et al.",
        year: 2025,
        link:
          "https://link.springer.com/article/10.1007/s41060-024-00593-y",
        tags: ["ml"],
        summary:
          "Generic anomaly detection + root cause analysis framework – transferable to CMDB health analytics.",
      },
      {
        title:
          "Machine Learning‑Based Network Anomaly Detection (MDPI Systems)",
        authors: "P. Schummer et al.",
        year: 2024,
        link: "https://www.mdpi.com/2673-2688/5/4/143",
        tags: ["ml"],
        summary:
          "Mix of supervised/unsupervised methods and explainability (SHAP) relevant to CI/outage anomaly signals.",
      },
      {
        title:
          "The Graphic Future of IT Management (Forrester blog)",
        authors: "D. Worthington",
        year: 2025,
        link: "https://www.forrester.com/blogs/the-graphic-future-of-it-management/",
        tags: ["kg", "process"],
        summary:
          "Industry trend: CMDBs shifting to graph‑based service models; supports service‑centric research directions.",
      },
    ],
    []
  );

  const filteredRefs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return references.filter((r) => {
      const matchesTag = activeTag === "all" || r.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.authors.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [references, query, activeTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-cyan-400/20 ring-1 ring-cyan-400/40 grid place-items-center">
              <span className="text-cyan-300 font-bold">CM</span>
            </div>
            <h1 className="text-xl font-semibold tracking-tight">CMDB Research Hub</h1>
          </div>
          <nav className="ml-auto hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#themes" className="hover:text-white">Research Themes</a>
            <a href="#methods" className="hover:text-white">Methods</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#references" className="hover:text-white">Publications</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1000px_600px_at_70%_-10%,rgba(34,211,238,0.25),rgba(2,6,23,0))]" />
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 grid gap-10">
            <div className="max-w-3xl">
              <p className="text-cyan-300 font-medium">Scientific community · ITSM · ITIL · Data Quality</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
                Open hub for scientific projects on
                <span className="text-cyan-300"> Configuration Management Databases</span>
              </h2>
              <p className="mt-4 text-slate-300">
                Curated research, reproducible methods, and reference implementations for
                CMDB data quality, reconciliation, discovery, and ML‑driven health analytics across
                IT and OT environments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">ITIL 4</span>
                <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">ITSM</span>
                <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Data Quality</span>
                <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Knowledge Graph</span>
                <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Anomaly Detection</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-14 grid gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold">About this hub</h3>
              <p className="mt-3 text-slate-300">
                This site aggregates current scientific work related to CMDBs. It emphasizes
                transparent, modular algorithms with formal justification, statistical validation,
                and reproducibility. While vendor documentation is referenced for context (IRE,
                reconciliation), the focus is on peer‑reviewed or academically rigorous sources.
              </p>
            </div>
            <aside className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h4 className="font-semibold">Scope</h4>
              <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                <li>CMDB data quality metrics & audits</li>
                <li>Identification & reconciliation strategies</li>
                <li>Automated discovery & service mapping</li>
                <li>Graph/ontology‑driven CMDBs</li>
                <li>ML for anomaly & drift detection</li>
                <li>OT/IT convergence & compliance</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Research Themes */}
        <section id="themes" className="max-w-7xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-semibold">Research themes</h3>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: "Data Quality & Governance",
                body:
                  "Define measurable dimensions (completeness, consistency, timeliness, uniqueness, validity) and scoring models. Automate quality gates and audits for golden records.",
              },
              {
                title: "Identification & Reconciliation (IRE)",
                body:
                  "Deterministic + probabilistic matching, attribute precedence, survivorship rules; evaluation via precision/recall and CI life‑cycle drift analysis.",
              },
              {
                title: "Discovery & Service Mapping",
                body:
                  "Multi‑source evidence fusion from agents, logs, cloud APIs and CM tools; causal and topological inference to maintain service dependency graphs.",
              },
              {
                title: "Graph‑centric CMDBs",
                body:
                  "Knowledge‑graph schemas for CIs, relationships and policies; reasoning (DL/SWRL), SPARQL queries, and impact analysis for change & incidents.",
              },
              {
                title: "ML‑driven Health & Anomaly Detection",
                body:
                  "From robust statistics to kNN/IF/LOF to interpretable neural models; root‑cause analysis via feature attribution and dependency context.",
              },
              {
                title: "Security, Audit & Compliance",
                body:
                  "Immutability of config/change trails (e.g., permissioned blockchain), mapping to ISO/IEC 20000, 27001, IEC 62443, and local standards.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-slate-300">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Methods */}
        <section id="methods" className="max-w-7xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-semibold">Methods we use</h3>
          <p className="mt-2 text-slate-300">
            The hub encourages transparent, modular algorithms with formal justification. Typical
            methods include:
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-300">
            {[
              "Least Squares & robust regression",
              "Correlation & Mutual Information",
              "Rajski distance, Scott method",
              "Kernel density estimation (KDE)",
              "k‑nearest neighbors (kNN)",
              "Jaccard entropy measure",
              "Isolation Forest / LOF",
              "Graph analytics & path impact",
              "Neural nets (interpretable variants)",
            ].map((m) => (
              <li key={m} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-semibold">Featured projects</h3>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: "DQ‑Lab: CMDB Data Quality Benchmark",
                desc:
                  "Open benchmark to evaluate completeness, consistency, timeliness and deduplication across synthetic + de‑identified enterprise‑like CMDBs.",
                ctas: [
                  { href: "#references", label: "Read methodology" },
                ],
              },
              {
                title: "Graph CMDB Schema & Reasoning",
                desc:
                  "A lightweight ontology for CIs, services and policies with SPARQL templates for impact analysis and compliance checks.",
                ctas: [
                  { href: "https://palmaitem.github.io/kgcompliance", label: "Demo (external)" },
                ],
              },
              {
                title: "CMDB Health: Anomaly Detection",
                desc:
                  "Pipeline combining KDE/kNN/IF with attribution to highlight drift, stale CIs, and link inconsistencies; export to quality dashboards.",
                ctas: [
                  { href: "#references", label: "Related studies" },
                ],
              },
            ].map((p) => (
              <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.ctas.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      className="px-3 py-1.5 rounded-xl bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-400/30"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Publications & References */}
        <section id="references" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-2xl font-semibold">Publications & references</h3>
            <div className="flex items-center gap-3">
              <input
                className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none w-64"
                placeholder="Search title, author, topic…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex flex-wrap gap-1">
                {tags.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTag(t.id)}
                    className={
                      "px-3 py-1.5 rounded-xl text-sm ring-1 transition " +
                      (activeTag === t.id
                        ? "bg-cyan-500/20 text-cyan-200 ring-cyan-400/50"
                        : "bg-white/5 text-slate-300 ring-white/10 hover:bg-white/10")
                    }
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <ul className="mt-6 grid gap-4">
            {filteredRefs.map((r) => (
              <li
                key={r.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-semibold leading-snug">{r.title}</h4>
                  <span className="text-sm text-slate-400">{r.year}</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{r.authors}</p>
                <p className="mt-2 text-slate-300">{r.summary}</p>
                <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={r.link}
                    target="_blank"
                    className="px-3 py-1.5 rounded-xl bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-400/30"
                  >
                    View source
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-slate-400">
            Note: Some items are industry research or vendor docs to complement peer‑reviewed literature where academic coverage is still limited.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CMDB Research Hub. Built for the scientific community (ITSM/ITIL, data quality & cleaning).
          </p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-slate-200">About</a>
            <a href="#references" className="hover:text-slate-200">Publications</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
