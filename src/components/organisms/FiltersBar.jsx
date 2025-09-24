import Button from "../atoms/Button";

export default function FiltersBar({ course, setCourse, showOnlyFav, setShowOnlyFav, onReset }) {
  return (
    <div className="row wrap">
      <select className="select" value={course} onChange={e => setCourse(e.target.value)}>
        <option value="">Tutti i piatti</option>
        <option value="primo">Primo</option>
        <option value="secondo">Secondo</option>
        <option value="dolce">Dolce</option>
        <option value="altro">Altro</option>
      </select>
      <label className="row">
        <input type="checkbox" checked={showOnlyFav} onChange={e => setShowOnlyFav(e.target.checked)} />
        Solo preferiti
      </label>
      <Button variant="ghost" onClick={onReset}>Reset</Button>
    </div>
  );
}
