import {
  createBlogPost,
  createCertification,
  createProject,
  deleteBlogPost,
  deleteCertification,
  deleteMessage,
  deleteProject,
  saveSetting,
  updateBlogPost,
  updateCertification,
  updateMessageStatus,
  updateProject
} from "@/app/admin/actions";
import type {
  AdminBlogPostRow,
  AdminCertificationRow,
  AdminContactMessageRow,
  AdminProjectRow,
  AdminSettingRow
} from "@/lib/admin/queries";

const inputClass = "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100";
const labelClass = "grid gap-2 text-sm font-semibold text-slate-800";

const settingLabels: Record<string, { label: string; valueLabel?: string; help?: string; type?: string }> = {
  homepage_headline: { label: "Homepage headline" },
  professional_subtitle: { label: "Homepage subtitle" },
  linkedin_url: { label: "LinkedIn URL", type: "url" },
  github_url: { label: "GitHub URL", type: "url" },
  resume_file_path: { label: "Resume file path" },
  profile_image_url: {
    label: "Navbar profile image URL",
    valueLabel: "Image URL",
    help: "Use a site path like /profile/daud-profile.jpeg or a full image URL. The site crops it to 36 x 36px so it will not push the main menu."
  },
  footer_name: { label: "Footer name" },
  footer_title: { label: "Footer title" },
  footer_description: { label: "Footer description" },
  footer_email: { label: "Contact email", type: "email" },
  footer_phone: { label: "Contact phone" },
  footer_location: { label: "Contact location" },
  footer_linkedin_url: { label: "Contact LinkedIn URL", type: "url" },
  footer_github_url: { label: "Contact GitHub URL", type: "url" },
  footer_copyright: { label: "Footer copyright" }
};

function Field({ label, name, defaultValue, required = false, type = "text" }: { label: string; name: string; defaultValue?: string | null; required?: boolean; type?: string }) {
  return (
    <label className={labelClass}>
      {label}
      <input name={name} type={type} defaultValue={defaultValue ?? ""} required={required} className={inputClass} />
    </label>
  );
}

function TextArea({ label, name, defaultValue, required = false, rows = 4 }: { label: string; name: string; defaultValue?: string | null; required?: boolean; rows?: number }) {
  return (
    <label className={`${labelClass} sm:col-span-2`}>
      {label}
      <textarea name={name} defaultValue={defaultValue ?? ""} required={required} rows={rows} className={inputClass} />
    </label>
  );
}

function Checkbox({ label, name, defaultChecked }: { label: string; name: string; defaultChecked?: boolean | null }) {
  return (
    <label className="flex items-center gap-3 text-sm font-semibold text-slate-800">
      <input name={name} type="checkbox" defaultChecked={Boolean(defaultChecked)} className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
      {label}
    </label>
  );
}

export function ProjectCreateForm() {
  return (
    <form action={createProject} className="card grid gap-4 p-6 sm:grid-cols-2">
      <Field label="Title" name="title" required />
      <Field label="Slug" name="slug" />
      <TextArea label="Description" name="description" required />
      <Field label="Tools, comma separated" name="tools" />
      <Field label="Status" name="status" />
      <Field label="Image URL" name="image_url" />
      <Field label="GitHub URL" name="github_url" />
      <Field label="Live URL" name="live_url" />
      <TextArea label="Case study" name="case_study" rows={6} />
      <Checkbox label="Featured on homepage" name="featured" />
      <button type="submit" className="button-primary w-fit">Create project</button>
    </form>
  );
}

export function ProjectEditForm({ project }: { project: AdminProjectRow }) {
  return (
    <details className="card p-5">
      <summary className="cursor-pointer list-none">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-slate-950">{project.title}</h2>
            <p className="text-sm text-slate-600">{project.status ?? "No status"} · /projects/{project.slug}</p>
          </div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{project.featured ? "Featured" : "Standard"}</span>
        </div>
      </summary>
      <form action={updateProject} className="mt-6 grid gap-4 sm:grid-cols-2">
        <input type="hidden" name="id" value={project.id} />
        <Field label="Title" name="title" defaultValue={project.title} required />
        <Field label="Slug" name="slug" defaultValue={project.slug} required />
        <TextArea label="Description" name="description" defaultValue={project.description} required />
        <Field label="Tools, comma separated" name="tools" defaultValue={(project.tools ?? []).join(", ")} />
        <Field label="Status" name="status" defaultValue={project.status} />
        <Field label="Image URL" name="image_url" defaultValue={project.image_url} />
        <Field label="GitHub URL" name="github_url" defaultValue={project.github_url} />
        <Field label="Live URL" name="live_url" defaultValue={project.live_url} />
        <TextArea label="Case study" name="case_study" defaultValue={project.case_study} rows={6} />
        <Checkbox label="Featured on homepage" name="featured" defaultChecked={project.featured} />
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="button-primary">Save project</button>
          <button formAction={deleteProject} className="rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-100" type="submit">
            Delete
          </button>
        </div>
      </form>
    </details>
  );
}

export function CertificationCreateForm() {
  return (
    <form action={createCertification} className="card grid gap-4 p-6 sm:grid-cols-2">
      <Field label="Certificate title" name="title" required />
      <Field label="Issuer" name="issuer" required />
      <Field label="Provider" name="provider" />
      <Field label="Category" name="category" />
      <Field label="Completion date" name="completion_date" type="date" />
      <Field label="Image URL" name="image_url" />
      <Field label="Certificate URL" name="certificate_url" />
      <TextArea label="Description" name="description" />
      <Checkbox label="Featured on homepage" name="featured" />
      <button type="submit" className="button-primary w-fit">Create certification</button>
    </form>
  );
}

export function CertificationEditForm({ certification }: { certification: AdminCertificationRow }) {
  return (
    <details className="card p-5">
      <summary className="cursor-pointer list-none">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-slate-950">{certification.title}</h2>
            <p className="text-sm text-slate-600">{certification.issuer} · {certification.category ?? "Uncategorized"}</p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">{certification.provider ?? "Provider"}</span>
        </div>
      </summary>
      <form action={updateCertification} className="mt-6 grid gap-4 sm:grid-cols-2">
        <input type="hidden" name="id" value={certification.id} />
        <Field label="Certificate title" name="title" defaultValue={certification.title} required />
        <Field label="Issuer" name="issuer" defaultValue={certification.issuer} required />
        <Field label="Provider" name="provider" defaultValue={certification.provider} />
        <Field label="Category" name="category" defaultValue={certification.category} />
        <Field label="Completion date" name="completion_date" type="date" defaultValue={certification.completion_date} />
        <Field label="Image URL" name="image_url" defaultValue={certification.image_url} />
        <Field label="Certificate URL" name="certificate_url" defaultValue={certification.certificate_url} />
        <TextArea label="Description" name="description" defaultValue={certification.description} />
        <Checkbox label="Featured on homepage" name="featured" defaultChecked={certification.featured} />
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="button-primary">Save certification</button>
          <button formAction={deleteCertification} className="rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-100" type="submit">
            Delete
          </button>
        </div>
      </form>
    </details>
  );
}

export function BlogCreateForm() {
  return (
    <form action={createBlogPost} className="card grid gap-4 p-6 sm:grid-cols-2">
      <Field label="Title" name="title" required />
      <Field label="Slug" name="slug" />
      <Field label="Category" name="category" />
      <TextArea label="Excerpt" name="excerpt" />
      <TextArea label="Content" name="content" rows={8} />
      <Checkbox label="Published" name="published" />
      <button type="submit" className="button-primary w-fit">Create blog post</button>
    </form>
  );
}

export function BlogEditForm({ post }: { post: AdminBlogPostRow }) {
  return (
    <details className="card p-5">
      <summary className="cursor-pointer list-none">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-slate-950">{post.title}</h2>
            <p className="text-sm text-slate-600">{post.category ?? "Uncategorized"} · /blog/{post.slug}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${post.published ? "bg-teal-50 text-teal-800" : "bg-amber-50 text-amber-800"}`}>
            {post.published ? "Published" : "Draft"}
          </span>
        </div>
      </summary>
      <form action={updateBlogPost} className="mt-6 grid gap-4 sm:grid-cols-2">
        <input type="hidden" name="id" value={post.id} />
        <Field label="Title" name="title" defaultValue={post.title} required />
        <Field label="Slug" name="slug" defaultValue={post.slug} required />
        <Field label="Category" name="category" defaultValue={post.category} />
        <TextArea label="Excerpt" name="excerpt" defaultValue={post.excerpt} />
        <TextArea label="Content" name="content" defaultValue={post.content} rows={8} />
        <Checkbox label="Published" name="published" defaultChecked={post.published} />
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="button-primary">Save post</button>
          <button formAction={deleteBlogPost} className="rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-100" type="submit">
            Delete
          </button>
        </div>
      </form>
    </details>
  );
}

export function MessageCard({ message }: { message: AdminContactMessageRow }) {
  return (
    <article className="card p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-950">{message.subject}</h2>
          <p className="mt-1 text-sm text-slate-600">{message.full_name} · {message.email}</p>
          {message.company ? <p className="text-sm text-slate-600">{message.company}</p> : null}
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{message.status ?? "new"}</span>
      </div>
      <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">{message.message}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <form action={updateMessageStatus} className="flex gap-2">
          <input type="hidden" name="id" value={message.id} />
          <select name="status" defaultValue={message.status ?? "new"} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
            <option value="new">new</option>
            <option value="read">read</option>
            <option value="replied">replied</option>
            <option value="archived">archived</option>
          </select>
          <button type="submit" className="button-secondary px-4 py-2">Update</button>
        </form>
        <form action={deleteMessage}>
          <input type="hidden" name="id" value={message.id} />
          <button type="submit" className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-100">Delete</button>
        </form>
      </div>
    </article>
  );
}

export function SettingForm({ setting }: { setting: AdminSettingRow }) {
  const metadata = settingLabels[setting.key];
  const value = setting.value ?? "";

  return (
    <form action={saveSetting} className="card grid gap-4 p-5 sm:grid-cols-[220px_1fr_auto] sm:items-end">
      {metadata ? (
        <div className={labelClass}>
          Setting
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950">{metadata.label}</div>
          <input type="hidden" name="key" value={setting.key} />
        </div>
      ) : (
        <Field label="Setting key" name="key" defaultValue={setting.key} required />
      )}
      <div className="grid gap-2">
        <Field label={metadata?.valueLabel ?? "Value"} name="value" defaultValue={value} type={metadata?.type ?? "text"} />
        {metadata?.help ? <p className="text-xs font-medium leading-5 text-slate-500">{metadata.help}</p> : null}
      </div>
      <div className="flex items-center gap-3">
        {setting.key === "profile_image_url" && value ? (
          <img src={value} alt="Current navbar profile preview" className="h-10 w-10 rounded-lg border border-slate-200 object-cover" />
        ) : null}
        <button type="submit" className="button-primary">Save</button>
      </div>
    </form>
  );
}
