export default function $(sel: string, type?: 'node' | 'nodelist'): Node | NodeList {
  const els = document.querySelectorAll(sel);
  if (type === 'nodelist') {
    return els;
  }

  if (type === 'node' || (els && els.length === 1)) {
    return els[0];
  }

  return els;
}
