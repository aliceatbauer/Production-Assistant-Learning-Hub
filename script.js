const resources = [
  {
    title: "Understanding your production workflow",
    category: "technical",
    description: "Map the stages of a typical project from initial brief through planning, production, delivery and review.",
    activity: "Create a one-page workflow for a real or fictional project.",
    evidence: "Save your workflow and a short reflection.",
    link: "#"
  },
  {
    title: "Communicating clearly with stakeholders",
    category: "workplace",
    description: "Explore practical techniques for concise updates, managing expectations and making actions clear.",
    activity: "Rewrite a sample project update so that actions, owners and deadlines are obvious.",
    evidence: "Keep your before-and-after examples.",
    link: "#"
  },
  {
    title: "Project planning fundamentals",
    category: "projects",
    description: "Learn how milestones, dependencies, risks and responsibilities fit together in a practical project plan.",
    activity: "Build a simple plan for an upcoming piece of work.",
    evidence: "Export or screenshot the plan.",
    link: "#"
  },
  {
    title: "Risk and issue management",
    category: "projects",
    description: "Learn the difference between risks and issues and how to assess, record and communicate them.",
    activity: "Create a small risk register with likelihood, impact and mitigations.",
    evidence: "Retain your completed risk register.",
    link: "#"
  },
  {
    title: "Time management for busy teams",
    category: "professional",
    description: "Explore prioritisation, task batching and realistic planning when several deadlines compete.",
    activity: "Review your next week's workload and identify your top three priorities.",
    evidence: "Write a short reflection on what changed.",
    link: "#"
  },
  {
    title: "Quality control and attention to detail",
    category: "technical",
    description: "Understand why structured checks reduce errors and how to create a repeatable quality process.",
    activity: "Design a checklist for one recurring task in your role.",
    evidence: "Save the checklist and note where you used it.",
    link: "#"
  },
  {
    title: "Running an effective meeting",
    category: "workplace",
    description: "Learn how good agendas, actions and follow-ups turn meetings into useful project progress.",
    activity: "Create an agenda and action log for a real meeting.",
    evidence: "Retain the agenda and completed action log.",
    link: "#"
  },
  {
    title: "Using feedback to improve your work",
    category: "professional",
    description: "Explore how to receive, interpret and apply constructive feedback.",
    activity: "Take one piece of recent feedback and turn it into an improvement action.",
    evidence: "Record the feedback, action and outcome.",
    link: "#"
  },
  {
    title: "Budget awareness",
    category: "technical",
    description: "Build your understanding of costs, approvals, tracking and the impact of changes on a project.",
    activity: "Create a simple example budget and identify three cost risks.",
    evidence: "Keep the example budget and reflection.",
    link: "#"
  },
  {
    title: "Building a useful contact list",
    category: "workplace",
    description: "Learn how organised contact information can support communication, handovers and continuity.",
    activity: "Create a structured contact template for a fictional project.",
    evidence: "Save your template and explain your fields.",
    link: "#"
  },
  {
    title: "Lessons learned and project review",
    category: "projects",
    description: "Learn how to capture what worked, what did not and what should change next time.",
    activity: "Run a mini retrospective on a completed task.",
    evidence: "Save your three key lessons and actions.",
    link: "#"
  },
  {
    title: "Personal development planning",
    category: "professional",
    description: "Turn your apprenticeship learning into specific development goals you can revisit over time.",
    activity: "Write one short-term and one longer-term development goal.",
    evidence: "Keep the goals and review date.",
    link: "#"
  }
];

const labels = {
  technical: "Technical",
  workplace: "Workplace",
  projects: "Projects",
  professional: "Professional"
};

const grid = document.getElementById("resourceGrid");
const count = document.getElementById("resourceCount");
const search = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

let activeFilter = "all";

function render() {
  const query = search.value.trim().toLowerCase();

  const visible = resources.filter(item => {
    const matchesFilter = activeFilter === "all" || item.category === activeFilter;
    const text = `${item.title} ${item.description} ${item.activity} ${item.evidence}`.toLowerCase();
    return matchesFilter && text.includes(query);
  });

  count.textContent = visible.length;

  grid.innerHTML = visible.map(item => `
    <article class="card">
      <div>
        <span class="card-tag">${labels[item.category]}</span>
        <h3>${item.title}</h3>
        <p class="card-description">${item.description}</p>
      </div>
      <div class="card-bottom">
        <div class="activity"><strong>Try it:</strong> ${item.activity}</div>
        <div class="evidence"><strong>Evidence:</strong> ${item.evidence}</div>
        <a class="card-link" href="${item.link}">Explore resource →</a>
      </div>
    </article>
  `).join("");

  noResults.hidden = visible.length !== 0;
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

search.addEventListener("input", render);
render();
