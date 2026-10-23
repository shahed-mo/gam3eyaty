const KEY = "gam3eyaty-groups";

export function getGroups() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getGroup(id) {
  return getGroups().find((g) => g.id === id) || null;
}

function writeGroups(groups) {
  try {
    localStorage.setItem(KEY, JSON.stringify(groups));
    return true;
  } catch {
    return false;
  }
}

export function saveGroup(group) {
  return writeGroups([...getGroups(), group]);
}

export function updateGroup(updated) {
  const groups = getGroups().map((g) => (g.id === updated.id ? updated : g));
  return writeGroups(groups);
}

