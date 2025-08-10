Got it — here’s the **full, single-piece `README.md`** for your Livy History Tour App, completely rewritten, cleaned up, and ready to commit without any merge conflicts.

---

```markdown
# 🏛️ Livy History Tour App

**Livy** is a location-aware history tour app that blends **Roman-inspired design** with **modern mapping**, **offline audio guides**, and **AI-powered Q&A**.  
Our pilot tour features the **Lexington Heritage Loop**, but Livy’s architecture supports scalable, location-based storytelling for any region.

---

## 📜 Features

- **GPS-based, offline-capable tours** with MapLibre GL integration.
- **Audio, images, and rich text** for each location stop.
- **AI Q&A** (RAG-based) for historical context using FastAPI + LangChain.
- **Roman-inspired UI design** with black, parchment, stone gray, antique gold, laurel wreath, and column motifs.
- **Service Worker caching** for offline support.
- **Postgres database** for tours, stops, and media.
- **Freemium model** with support for sponsorships and white-label deployments.

---

## 🗺️ Pilot Region

**Lexington Heritage Loop** – Explore the heart of Lexington, Kentucky, with curated stops that blend local history and immersive storytelling.

---

## 🛠️ Tech Stack

### Frontend
- [SvelteKit](https://kit.svelte.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [MapLibre GL](https://maplibre.org/)  
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) for offline caching

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) (REST API + AI integration)
- [Postgres](https://www.postgresql.org/) with [SQLAlchemy](https://www.sqlalchemy.org/)
- [LangChain](https://www.langchain.com/) for retrieval-augmented generation (RAG)
- Vector DB: Weaviate, Pinecone, or pgvector

---

## 📂 Project Structure

```

Livy/
│
├── backend/                 # FastAPI backend + AI integrations
├── frontend/                # SvelteKit frontend
│   ├── src/lib/components/  # UI components
│   ├── src/routes/          # SvelteKit routes/pages
│   ├── static/              # Static assets
│   ├── app.css              # Tailwind base styles
│   └── tailwind.config.cjs  # Tailwind config
├── postcss.config.cjs       # PostCSS config
├── README.md
└── package.json

````

---

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- Python 3.11+
- Postgres DB instance
- Yarn or npm

---

### Frontend Installation
```bash
cd frontend
npm install
npm run dev
````

---

### Backend Installation

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
export SECRET_KEY="your-secret-key"
uvicorn main:app --reload
```

> The backend requires a `SECRET_KEY` environment variable for signing JWTs.
> Set this to a strong, random value in your deployment environment.
> Livy will raise a `RuntimeError` if `SECRET_KEY` is not defined.

---

## 📦 Offline Support

Livy uses a **Service Worker** to cache maps, audio, and tour content for offline use.
When running locally, disable caching in development mode to avoid stale assets:

1. Open **Chrome DevTools → Application tab → Service Workers**.
2. Check **"Bypass for network"**.

---

## 💡 AI Q\&A Workflow

1. User asks a question about a stop.
2. Backend searches the vector DB for relevant historical documents.
3. Matches are passed to the LLM (via LangChain) for context-based answer generation.
4. Response is returned to the frontend.

---

## 🧰 Development Notes & Troubleshooting

* **TailwindCSS Build Issues:**
  If Tailwind styles aren’t applying, ensure `tailwind.config.cjs` `content` paths include all `.svelte` files under `src/`.

* **PostCSS Config Errors:**
  If you see `Cannot find module 'tailwindcss'` or PostCSS errors, run:

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  ```

* **Python Import Path Problems:**
  When running backend tests, ensure `backend` is on your `PYTHONPATH` or run tests from the project root:

  ```bash
  PYTHONPATH=. pytest
  ```

* **Database Connection:**
  Set `DATABASE_URL` in your `.env` file:

  ```
  DATABASE_URL=postgresql+psycopg2://user:password@localhost:5432/livy
  ```

---

## 📅 Roadmap

* ✅ MVP with Lexington Heritage Loop
* ⏳ Expand to multiple regions
* ⏳ Add user-generated tour support
* ⏳ Implement premium & sponsor tiers

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

**Created by Boswell Web Development Solutions LLC**
📍 Lexington, Kentucky

```

---

If you commit this version, it’s completely free of merge markers, fully formatted for GitHub, and includes a **Development Notes & Troubleshooting** section so future devs can hit the ground running.  

Do you want me to also make a **matching `CONTRIBUTING.md`** so outside developers know how to submit PRs and run tests? That would pair well with this README.
```
