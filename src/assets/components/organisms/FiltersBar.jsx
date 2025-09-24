import Button from "../atoms/Button";

export default function FiltersBar({ course, setCourse, showOnlyFav, setShowOnlyFav, onReset }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <select className="border rounded px-3 py-2" value={course} onChange={e => setCourse(e.target.value)}>
        <option value="">Tutti i piatti</option>
        <option value="primo">Primo</option>
        <option value="secondo">Secondo</option>
        <option value="dolce">Dolce</option>
        <option value="altro">Altro</option>
      </select>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={showOnlyFav} onChange={e => setShowOnlyFav(e.target.checked)} />
        Solo preferiti
      </label>
      <Button variant="ghost" onClick={onReset}>Reset</Button>
    </div>
  );
}
