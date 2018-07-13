type DomTypeParam = 'node' | 'nodelist';

// TODO: Figure out correct return type for this function
export default function $(sel: string, type?: DomTypeParam): any {
  const els = document.querySelectorAll(sel);
  if (type === 'nodelist') {
    return els;
  }

  if (type === 'node' || (els && els.length === 1)) {
    return els[0];
  }

  return els;
}
