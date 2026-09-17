/*
  Master list of topics shown on the homepage.
  To add a new topic:
    1. Duplicate topics/_template.html, rename it to match "file" below.
    2. Fill in its formulas + notes.
    3. Add an entry here so it shows up on the homepage and in search.
  status: "ready" once the page has real content, "pending" while it's still a placeholder.
*/

const TOPICS = [
  {
    category: "Algebra",
    title: "Surds",
    file: "topics/surds.html",
    blurb: "Laws of surds, rationalising denominators (incl. conjugates), solving equations with surds.",
    status: "ready"
  },
  {
    category: "Algebra",
    title: "Quadratic Functions",
    file: "topics/quadratic-functions.html",
    blurb: "Completing the square, nature of roots via discriminant, solving quadratic inequalities.",
    status: "ready"
  },
  {
    category: "Algebra",
    title: "Equations & Inequalities",
    file: "topics/equations-inequalities.html",
    blurb: "Simultaneous equations (linear & quadratic) by substitution, and using the discriminant for line/curve intersections.",
    status: "ready"
  },
  {
    category: "Algebra",
    title: "Logarithms & Exponentials",
    file: "topics/logarithms-exponentials.html",
    blurb: "Log laws, change of base, solving exponential equations.",
    status: "ready"
  },
  {
    category: "Calculus",
    title: "Differentiation Techniques",
    file: "topics/differentiation-techniques.html",
    blurb: "Chain, product & quotient rules, differentiating trig/exp/log functions.",
    status: "ready"
  },
  {
    category: "Calculus",
    title: "Integration Techniques",
    file: "topics/integration-techniques.html",
    blurb: "Standard integrals, substitution, integrating trig/exp/log functions.",
    status: "ready"
  },
  {
    category: "Geometry and Trigonometry",
    title: "Coordinate Geometry",
    file: "topics/coordinate-geometry.html",
    blurb: "Length & midpoint, gradients, parallel/perpendicular lines, equation of a line, area of a figure.",
    status: "ready"
  },
  {
    category: "Geometry and Trigonometry",
    title: "Circles",
    file: "topics/circles.html",
    blurb: "Equation of a circle in standard and general form (Further Coordinate Geometry).",
    status: "ready"
  },
  {
    category: "Geometry and Trigonometry",
    title: "Circle Properties",
    file: "topics/circle-properties.html",
    blurb: "All 8 E-Math circle theorems, plus the 2 that carry over into A-Math Plane Geometry.",
    status: "ready"
  },
  {
    category: "Geometry and Trigonometry",
    title: "Trigonometric Ratios",
    file: "topics/trigonometric-ratios.html",
    blurb: "Special angle values, the CAST rule for general angles, negative/complementary angle identities.",
    status: "ready"
  },
  {
    category: "Geometry and Trigonometry",
    title: "Trigonometric Graphs",
    file: "topics/trigonometric-graphs.html",
    blurb: "Graphs of sin, cos, tan and the a sin bx / a cos bx / a tan bx family — period, amplitude, asymptotes.",
    status: "ready"
  },
  {
    category: "Geometry and Trigonometry",
    title: "Trigonometric Equations & Identities",
    file: "topics/trigonometric-equations-identities.html",
    blurb: "Identities, addition/double angle & R-formulae, and solving equations by finding the basic angle first.",
    status: "ready"
  }
];
