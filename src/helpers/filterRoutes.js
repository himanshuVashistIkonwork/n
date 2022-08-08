const role = localStorage.getItem("role");

function filterRoutes(r) {
  return r.filter((item) => {
    if (!("permissions" in item)) {
      if ("children" in item) {
        item.children = filterRoutes(item.children);
      }
      return true;
    } else if (item.permissions.includes(role)) {
      if ("children" in item) {
        item.children = filterRoutes(item.children);
      }
      return true;
    }
    return false;
  });
}

export default filterRoutes;
